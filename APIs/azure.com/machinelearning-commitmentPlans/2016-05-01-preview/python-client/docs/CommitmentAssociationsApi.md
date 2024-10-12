# openapi_client.CommitmentAssociationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commitment_associations_get**](CommitmentAssociationsApi.md#commitment_associations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}/commitmentAssociations/{commitmentAssociationName} | 
[**commitment_associations_list**](CommitmentAssociationsApi.md#commitment_associations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}/commitmentAssociations | 
[**commitment_associations_move**](CommitmentAssociationsApi.md#commitment_associations_move) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}/commitmentAssociations/{commitmentAssociationName}/move | 


# **commitment_associations_get**
> CommitmentAssociation commitment_associations_get(subscription_id, resource_group_name, commitment_plan_name, commitment_association_name, api_version)



Get a commitment association.

### Example


```python
import openapi_client
from openapi_client.models.commitment_association import CommitmentAssociation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommitmentAssociationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    commitment_plan_name = 'commitment_plan_name_example' # str | The Azure ML commitment plan name.
    commitment_association_name = 'commitment_association_name_example' # str | The commitment association name.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.

    try:
        api_response = api_instance.commitment_associations_get(subscription_id, resource_group_name, commitment_plan_name, commitment_association_name, api_version)
        print("The response of CommitmentAssociationsApi->commitment_associations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentAssociationsApi->commitment_associations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **commitment_plan_name** | **str**| The Azure ML commitment plan name. | 
 **commitment_association_name** | **str**| The commitment association name. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 

### Return type

[**CommitmentAssociation**](CommitmentAssociation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commitment_associations_list**
> CommitmentAssociationListResult commitment_associations_list(subscription_id, resource_group_name, commitment_plan_name, api_version, skip_token=skip_token)



Get all commitment associations for a parent commitment plan.

### Example


```python
import openapi_client
from openapi_client.models.commitment_association_list_result import CommitmentAssociationListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommitmentAssociationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    commitment_plan_name = 'commitment_plan_name_example' # str | The Azure ML commitment plan name.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    skip_token = 'skip_token_example' # str | Continuation token for pagination. (optional)

    try:
        api_response = api_instance.commitment_associations_list(subscription_id, resource_group_name, commitment_plan_name, api_version, skip_token=skip_token)
        print("The response of CommitmentAssociationsApi->commitment_associations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentAssociationsApi->commitment_associations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **commitment_plan_name** | **str**| The Azure ML commitment plan name. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **skip_token** | **str**| Continuation token for pagination. | [optional] 

### Return type

[**CommitmentAssociationListResult**](CommitmentAssociationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commitment_associations_move**
> CommitmentAssociation commitment_associations_move(subscription_id, resource_group_name, commitment_plan_name, commitment_association_name, api_version, move_payload)



Re-parent a commitment association from one commitment plan to another.

### Example


```python
import openapi_client
from openapi_client.models.commitment_association import CommitmentAssociation
from openapi_client.models.move_commitment_association_request import MoveCommitmentAssociationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommitmentAssociationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    commitment_plan_name = 'commitment_plan_name_example' # str | The Azure ML commitment plan name.
    commitment_association_name = 'commitment_association_name_example' # str | The commitment association name.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    move_payload = openapi_client.MoveCommitmentAssociationRequest() # MoveCommitmentAssociationRequest | The move request payload.

    try:
        api_response = api_instance.commitment_associations_move(subscription_id, resource_group_name, commitment_plan_name, commitment_association_name, api_version, move_payload)
        print("The response of CommitmentAssociationsApi->commitment_associations_move:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentAssociationsApi->commitment_associations_move: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **commitment_plan_name** | **str**| The Azure ML commitment plan name. | 
 **commitment_association_name** | **str**| The commitment association name. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **move_payload** | [**MoveCommitmentAssociationRequest**](MoveCommitmentAssociationRequest.md)| The move request payload. | 

### Return type

[**CommitmentAssociation**](CommitmentAssociation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


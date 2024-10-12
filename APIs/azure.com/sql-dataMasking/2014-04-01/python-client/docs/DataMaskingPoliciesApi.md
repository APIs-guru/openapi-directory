# openapi_client.DataMaskingPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_masking_policies_create_or_update**](DataMaskingPoliciesApi.md#data_masking_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName} | 
[**data_masking_policies_get**](DataMaskingPoliciesApi.md#data_masking_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName} | 


# **data_masking_policies_create_or_update**
> DataMaskingPolicy data_masking_policies_create_or_update(api_version, subscription_id, resource_group_name, server_name, database_name, data_masking_policy_name, parameters)



Creates or updates a database data masking policy

### Example


```python
import openapi_client
from openapi_client.models.data_masking_policy import DataMaskingPolicy
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
    api_instance = openapi_client.DataMaskingPoliciesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    data_masking_policy_name = 'data_masking_policy_name_example' # str | The name of the database for which the data masking rule applies.
    parameters = openapi_client.DataMaskingPolicy() # DataMaskingPolicy | Parameters for creating or updating a data masking policy.

    try:
        api_response = api_instance.data_masking_policies_create_or_update(api_version, subscription_id, resource_group_name, server_name, database_name, data_masking_policy_name, parameters)
        print("The response of DataMaskingPoliciesApi->data_masking_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataMaskingPoliciesApi->data_masking_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **data_masking_policy_name** | **str**| The name of the database for which the data masking rule applies. | 
 **parameters** | [**DataMaskingPolicy**](DataMaskingPolicy.md)| Parameters for creating or updating a data masking policy. | 

### Return type

[**DataMaskingPolicy**](DataMaskingPolicy.md)

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

# **data_masking_policies_get**
> DataMaskingPolicy data_masking_policies_get(api_version, subscription_id, resource_group_name, server_name, database_name, data_masking_policy_name)



Gets a database data masking policy.

### Example


```python
import openapi_client
from openapi_client.models.data_masking_policy import DataMaskingPolicy
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
    api_instance = openapi_client.DataMaskingPoliciesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    data_masking_policy_name = 'data_masking_policy_name_example' # str | The name of the database for which the data masking rule applies.

    try:
        api_response = api_instance.data_masking_policies_get(api_version, subscription_id, resource_group_name, server_name, database_name, data_masking_policy_name)
        print("The response of DataMaskingPoliciesApi->data_masking_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataMaskingPoliciesApi->data_masking_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **data_masking_policy_name** | **str**| The name of the database for which the data masking rule applies. | 

### Return type

[**DataMaskingPolicy**](DataMaskingPolicy.md)

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


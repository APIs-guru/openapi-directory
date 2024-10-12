# openapi_client.CommitmentPlansApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commitment_plans_create_or_update**](CommitmentPlansApi.md#commitment_plans_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName} | 
[**commitment_plans_get**](CommitmentPlansApi.md#commitment_plans_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName} | 
[**commitment_plans_list**](CommitmentPlansApi.md#commitment_plans_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MachineLearning/commitmentPlans | 
[**commitment_plans_list_in_resource_group**](CommitmentPlansApi.md#commitment_plans_list_in_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans | 
[**commitment_plans_patch**](CommitmentPlansApi.md#commitment_plans_patch) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName} | 
[**commitment_plans_remove**](CommitmentPlansApi.md#commitment_plans_remove) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName} | 
[**usage_history_list**](CommitmentPlansApi.md#usage_history_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}/usageHistory | 


# **commitment_plans_create_or_update**
> CommitmentPlan commitment_plans_create_or_update(subscription_id, resource_group_name, commitment_plan_name, api_version, create_or_update_payload)



Create a new Azure ML commitment plan resource or updates an existing one.

### Example


```python
import openapi_client
from openapi_client.models.commitment_plan import CommitmentPlan
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
    api_instance = openapi_client.CommitmentPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    commitment_plan_name = 'commitment_plan_name_example' # str | The Azure ML commitment plan name.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    create_or_update_payload = openapi_client.CommitmentPlan() # CommitmentPlan | The payload to create or update the Azure ML commitment plan.

    try:
        api_response = api_instance.commitment_plans_create_or_update(subscription_id, resource_group_name, commitment_plan_name, api_version, create_or_update_payload)
        print("The response of CommitmentPlansApi->commitment_plans_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentPlansApi->commitment_plans_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **commitment_plan_name** | **str**| The Azure ML commitment plan name. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **create_or_update_payload** | [**CommitmentPlan**](CommitmentPlan.md)| The payload to create or update the Azure ML commitment plan. | 

### Return type

[**CommitmentPlan**](CommitmentPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commitment_plans_get**
> CommitmentPlan commitment_plans_get(subscription_id, resource_group_name, commitment_plan_name, api_version)



Retrieve an Azure ML commitment plan by its subscription, resource group and name.

### Example


```python
import openapi_client
from openapi_client.models.commitment_plan import CommitmentPlan
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
    api_instance = openapi_client.CommitmentPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    commitment_plan_name = 'commitment_plan_name_example' # str | The Azure ML commitment plan name.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.

    try:
        api_response = api_instance.commitment_plans_get(subscription_id, resource_group_name, commitment_plan_name, api_version)
        print("The response of CommitmentPlansApi->commitment_plans_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentPlansApi->commitment_plans_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **commitment_plan_name** | **str**| The Azure ML commitment plan name. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 

### Return type

[**CommitmentPlan**](CommitmentPlan.md)

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

# **commitment_plans_list**
> CommitmentPlanListResult commitment_plans_list(subscription_id, api_version, skip_token=skip_token)



Retrieve all Azure ML commitment plans in a subscription.

### Example


```python
import openapi_client
from openapi_client.models.commitment_plan_list_result import CommitmentPlanListResult
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
    api_instance = openapi_client.CommitmentPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    skip_token = 'skip_token_example' # str | Continuation token for pagination. (optional)

    try:
        api_response = api_instance.commitment_plans_list(subscription_id, api_version, skip_token=skip_token)
        print("The response of CommitmentPlansApi->commitment_plans_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentPlansApi->commitment_plans_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **skip_token** | **str**| Continuation token for pagination. | [optional] 

### Return type

[**CommitmentPlanListResult**](CommitmentPlanListResult.md)

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

# **commitment_plans_list_in_resource_group**
> CommitmentPlanListResult commitment_plans_list_in_resource_group(subscription_id, resource_group_name, api_version, skip_token=skip_token)



Retrieve all Azure ML commitment plans in a resource group.

### Example


```python
import openapi_client
from openapi_client.models.commitment_plan_list_result import CommitmentPlanListResult
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
    api_instance = openapi_client.CommitmentPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    skip_token = 'skip_token_example' # str | Continuation token for pagination. (optional)

    try:
        api_response = api_instance.commitment_plans_list_in_resource_group(subscription_id, resource_group_name, api_version, skip_token=skip_token)
        print("The response of CommitmentPlansApi->commitment_plans_list_in_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentPlansApi->commitment_plans_list_in_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **skip_token** | **str**| Continuation token for pagination. | [optional] 

### Return type

[**CommitmentPlanListResult**](CommitmentPlanListResult.md)

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

# **commitment_plans_patch**
> CommitmentPlan commitment_plans_patch(subscription_id, resource_group_name, commitment_plan_name, api_version, patch_payload)



Patch an existing Azure ML commitment plan resource.

### Example


```python
import openapi_client
from openapi_client.models.commitment_plan import CommitmentPlan
from openapi_client.models.commitment_plan_patch_payload import CommitmentPlanPatchPayload
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
    api_instance = openapi_client.CommitmentPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    commitment_plan_name = 'commitment_plan_name_example' # str | The Azure ML commitment plan name.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    patch_payload = openapi_client.CommitmentPlanPatchPayload() # CommitmentPlanPatchPayload | The payload to use to patch the Azure ML commitment plan. Only tags and SKU may be modified on an existing commitment plan.

    try:
        api_response = api_instance.commitment_plans_patch(subscription_id, resource_group_name, commitment_plan_name, api_version, patch_payload)
        print("The response of CommitmentPlansApi->commitment_plans_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentPlansApi->commitment_plans_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **commitment_plan_name** | **str**| The Azure ML commitment plan name. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **patch_payload** | [**CommitmentPlanPatchPayload**](CommitmentPlanPatchPayload.md)| The payload to use to patch the Azure ML commitment plan. Only tags and SKU may be modified on an existing commitment plan. | 

### Return type

[**CommitmentPlan**](CommitmentPlan.md)

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

# **commitment_plans_remove**
> commitment_plans_remove(subscription_id, resource_group_name, commitment_plan_name, api_version)



Remove an existing Azure ML commitment plan.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.CommitmentPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    commitment_plan_name = 'commitment_plan_name_example' # str | The Azure ML commitment plan name.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.

    try:
        api_instance.commitment_plans_remove(subscription_id, resource_group_name, commitment_plan_name, api_version)
    except Exception as e:
        print("Exception when calling CommitmentPlansApi->commitment_plans_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **commitment_plan_name** | **str**| The Azure ML commitment plan name. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usage_history_list**
> PlanUsageHistoryListResult usage_history_list(subscription_id, resource_group_name, commitment_plan_name, api_version, skip_token=skip_token)



Retrieve the usage history for an Azure ML commitment plan.

### Example


```python
import openapi_client
from openapi_client.models.plan_usage_history_list_result import PlanUsageHistoryListResult
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
    api_instance = openapi_client.CommitmentPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    commitment_plan_name = 'commitment_plan_name_example' # str | The Azure ML commitment plan name.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    skip_token = 'skip_token_example' # str | Continuation token for pagination. (optional)

    try:
        api_response = api_instance.usage_history_list(subscription_id, resource_group_name, commitment_plan_name, api_version, skip_token=skip_token)
        print("The response of CommitmentPlansApi->usage_history_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentPlansApi->usage_history_list: %s\n" % e)
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

[**PlanUsageHistoryListResult**](PlanUsageHistoryListResult.md)

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


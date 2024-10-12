# openapi_client.HybridRunbookWorkerGroupApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hybrid_runbook_worker_group_delete**](HybridRunbookWorkerGroupApi.md#hybrid_runbook_worker_group_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName} | 
[**hybrid_runbook_worker_group_get**](HybridRunbookWorkerGroupApi.md#hybrid_runbook_worker_group_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName} | 
[**hybrid_runbook_worker_group_list_by_automation_account**](HybridRunbookWorkerGroupApi.md#hybrid_runbook_worker_group_list_by_automation_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups | 
[**hybrid_runbook_worker_group_update**](HybridRunbookWorkerGroupApi.md#hybrid_runbook_worker_group_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName} | 


# **hybrid_runbook_worker_group_delete**
> hybrid_runbook_worker_group_delete(resource_group_name, automation_account_name, hybrid_runbook_worker_group_name, subscription_id, api_version)



Delete a hybrid runbook worker group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HybridRunbookWorkerGroupApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    hybrid_runbook_worker_group_name = 'hybrid_runbook_worker_group_name_example' # str | The hybrid runbook worker group name
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.hybrid_runbook_worker_group_delete(resource_group_name, automation_account_name, hybrid_runbook_worker_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling HybridRunbookWorkerGroupApi->hybrid_runbook_worker_group_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **hybrid_runbook_worker_group_name** | **str**| The hybrid runbook worker group name | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_runbook_worker_group_get**
> HybridRunbookWorkerGroup hybrid_runbook_worker_group_get(resource_group_name, automation_account_name, hybrid_runbook_worker_group_name, subscription_id, api_version)



Retrieve a hybrid runbook worker group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_runbook_worker_group import HybridRunbookWorkerGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HybridRunbookWorkerGroupApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    hybrid_runbook_worker_group_name = 'hybrid_runbook_worker_group_name_example' # str | The hybrid runbook worker group name
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.hybrid_runbook_worker_group_get(resource_group_name, automation_account_name, hybrid_runbook_worker_group_name, subscription_id, api_version)
        print("The response of HybridRunbookWorkerGroupApi->hybrid_runbook_worker_group_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridRunbookWorkerGroupApi->hybrid_runbook_worker_group_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **hybrid_runbook_worker_group_name** | **str**| The hybrid runbook worker group name | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**HybridRunbookWorkerGroup**](HybridRunbookWorkerGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_runbook_worker_group_list_by_automation_account**
> HybridRunbookWorkerGroupsListResult hybrid_runbook_worker_group_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version, filter=filter)



Retrieve a list of hybrid runbook worker groups.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_runbook_worker_groups_list_result import HybridRunbookWorkerGroupsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HybridRunbookWorkerGroupApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.hybrid_runbook_worker_group_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version, filter=filter)
        print("The response of HybridRunbookWorkerGroupApi->hybrid_runbook_worker_group_list_by_automation_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridRunbookWorkerGroupApi->hybrid_runbook_worker_group_list_by_automation_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**HybridRunbookWorkerGroupsListResult**](HybridRunbookWorkerGroupsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_runbook_worker_group_update**
> HybridRunbookWorkerGroup hybrid_runbook_worker_group_update(resource_group_name, automation_account_name, hybrid_runbook_worker_group_name, subscription_id, api_version, parameters)



Update a hybrid runbook worker group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_runbook_worker_group import HybridRunbookWorkerGroup
from openapi_client.models.hybrid_runbook_worker_group_update_parameters import HybridRunbookWorkerGroupUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HybridRunbookWorkerGroupApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    hybrid_runbook_worker_group_name = 'hybrid_runbook_worker_group_name_example' # str | The hybrid runbook worker group name
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.HybridRunbookWorkerGroupUpdateParameters() # HybridRunbookWorkerGroupUpdateParameters | The hybrid runbook worker group

    try:
        api_response = api_instance.hybrid_runbook_worker_group_update(resource_group_name, automation_account_name, hybrid_runbook_worker_group_name, subscription_id, api_version, parameters)
        print("The response of HybridRunbookWorkerGroupApi->hybrid_runbook_worker_group_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridRunbookWorkerGroupApi->hybrid_runbook_worker_group_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **hybrid_runbook_worker_group_name** | **str**| The hybrid runbook worker group name | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**HybridRunbookWorkerGroupUpdateParameters**](HybridRunbookWorkerGroupUpdateParameters.md)| The hybrid runbook worker group | 

### Return type

[**HybridRunbookWorkerGroup**](HybridRunbookWorkerGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


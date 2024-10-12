# openapi_client.ActivityApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activity_get**](ActivityApi.md#activity_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/activities/{activityName} | 
[**activity_list_by_module**](ActivityApi.md#activity_list_by_module) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/activities | 


# **activity_get**
> Activity activity_get(resource_group_name, automation_account_name, module_name, activity_name, subscription_id, api_version)



Retrieve the activity in the module identified by module name and activity name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activity import Activity
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
    api_instance = openapi_client.ActivityApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    module_name = 'module_name_example' # str | The name of module.
    activity_name = 'activity_name_example' # str | The name of activity.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.activity_get(resource_group_name, automation_account_name, module_name, activity_name, subscription_id, api_version)
        print("The response of ActivityApi->activity_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityApi->activity_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **module_name** | **str**| The name of module. | 
 **activity_name** | **str**| The name of activity. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Activity**](Activity.md)

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

# **activity_list_by_module**
> ActivityListResult activity_list_by_module(resource_group_name, automation_account_name, module_name, subscription_id, api_version)



Retrieve a list of activities in the module identified by module name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activity_list_result import ActivityListResult
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
    api_instance = openapi_client.ActivityApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    module_name = 'module_name_example' # str | The name of module.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.activity_list_by_module(resource_group_name, automation_account_name, module_name, subscription_id, api_version)
        print("The response of ActivityApi->activity_list_by_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityApi->activity_list_by_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **module_name** | **str**| The name of module. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ActivityListResult**](ActivityListResult.md)

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


# openapi_client.SoftwareUpdateConfigurationRunApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**software_update_configuration_runs_get_by_id**](SoftwareUpdateConfigurationRunApi.md#software_update_configuration_runs_get_by_id) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationRuns/{softwareUpdateConfigurationRunId} | 
[**software_update_configuration_runs_list**](SoftwareUpdateConfigurationRunApi.md#software_update_configuration_runs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationRuns | 


# **software_update_configuration_runs_get_by_id**
> SoftwareUpdateConfigurationRun software_update_configuration_runs_get_by_id(subscription_id, resource_group_name, automation_account_name, software_update_configuration_run_id, api_version, client_request_id=client_request_id)



Get a single software update configuration Run by Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.software_update_configuration_run import SoftwareUpdateConfigurationRun
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
    api_instance = openapi_client.SoftwareUpdateConfigurationRunApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    software_update_configuration_run_id = 'software_update_configuration_run_id_example' # str | The Id of the software update configuration run.
    api_version = 'api_version_example' # str | Client Api Version.
    client_request_id = 'client_request_id_example' # str | Identifies this specific client request. (optional)

    try:
        api_response = api_instance.software_update_configuration_runs_get_by_id(subscription_id, resource_group_name, automation_account_name, software_update_configuration_run_id, api_version, client_request_id=client_request_id)
        print("The response of SoftwareUpdateConfigurationRunApi->software_update_configuration_runs_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SoftwareUpdateConfigurationRunApi->software_update_configuration_runs_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **software_update_configuration_run_id** | **str**| The Id of the software update configuration run. | 
 **api_version** | **str**| Client Api Version. | 
 **client_request_id** | **str**| Identifies this specific client request. | [optional] 

### Return type

[**SoftwareUpdateConfigurationRun**](SoftwareUpdateConfigurationRun.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A single software update configuration Run. |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **software_update_configuration_runs_list**
> SoftwareUpdateConfigurationRunListResult software_update_configuration_runs_list(subscription_id, resource_group_name, automation_account_name, api_version, client_request_id=client_request_id, filter=filter, skip=skip, top=top)



Return list of software update configuration runs

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.software_update_configuration_run_list_result import SoftwareUpdateConfigurationRunListResult
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
    api_instance = openapi_client.SoftwareUpdateConfigurationRunApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    api_version = 'api_version_example' # str | Client Api Version.
    client_request_id = 'client_request_id_example' # str | Identifies this specific client request. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. You can use the following filters: 'properties/osType', 'properties/status', 'properties/startTime', and 'properties/softwareUpdateConfiguration/name' (optional)
    skip = 'skip_example' # str | Number of entries you skip before returning results (optional)
    top = 'top_example' # str | Maximum number of entries returned in the results collection (optional)

    try:
        api_response = api_instance.software_update_configuration_runs_list(subscription_id, resource_group_name, automation_account_name, api_version, client_request_id=client_request_id, filter=filter, skip=skip, top=top)
        print("The response of SoftwareUpdateConfigurationRunApi->software_update_configuration_runs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SoftwareUpdateConfigurationRunApi->software_update_configuration_runs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **api_version** | **str**| Client Api Version. | 
 **client_request_id** | **str**| Identifies this specific client request. | [optional] 
 **filter** | **str**| The filter to apply on the operation. You can use the following filters: &#39;properties/osType&#39;, &#39;properties/status&#39;, &#39;properties/startTime&#39;, and &#39;properties/softwareUpdateConfiguration/name&#39; | [optional] 
 **skip** | **str**| Number of entries you skip before returning results | [optional] 
 **top** | **str**| Maximum number of entries returned in the results collection | [optional] 

### Return type

[**SoftwareUpdateConfigurationRunListResult**](SoftwareUpdateConfigurationRunListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return list of software update configurations runs. |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


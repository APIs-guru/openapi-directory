# openapi_client.VirtualMachineRunCommandsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machine_run_commands_get**](VirtualMachineRunCommandsApi.md#virtual_machine_run_commands_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands/{commandId} | 
[**virtual_machine_run_commands_list**](VirtualMachineRunCommandsApi.md#virtual_machine_run_commands_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands | 


# **virtual_machine_run_commands_get**
> RunCommandDocument virtual_machine_run_commands_get(location, command_id, api_version, subscription_id)



Gets specific run command for a subscription in a location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_command_document import RunCommandDocument
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
    api_instance = openapi_client.VirtualMachineRunCommandsApi(api_client)
    location = 'location_example' # str | The location upon which run commands is queried.
    command_id = 'command_id_example' # str | The command id.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_run_commands_get(location, command_id, api_version, subscription_id)
        print("The response of VirtualMachineRunCommandsApi->virtual_machine_run_commands_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineRunCommandsApi->virtual_machine_run_commands_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location upon which run commands is queried. | 
 **command_id** | **str**| The command id. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RunCommandDocument**](RunCommandDocument.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_run_commands_list**
> RunCommandListResult virtual_machine_run_commands_list(location, api_version, subscription_id)



Lists all available run commands for a subscription in a location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_command_list_result import RunCommandListResult
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
    api_instance = openapi_client.VirtualMachineRunCommandsApi(api_client)
    location = 'location_example' # str | The location upon which run commands is queried.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_run_commands_list(location, api_version, subscription_id)
        print("The response of VirtualMachineRunCommandsApi->virtual_machine_run_commands_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineRunCommandsApi->virtual_machine_run_commands_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location upon which run commands is queried. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RunCommandListResult**](RunCommandListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


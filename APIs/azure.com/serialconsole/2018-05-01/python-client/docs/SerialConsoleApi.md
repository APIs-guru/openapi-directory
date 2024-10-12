# openapi_client.SerialConsoleApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disable_console**](SerialConsoleApi.md#disable_console) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}/disableConsole | Disable Serial Console for a subscription
[**enable_console**](SerialConsoleApi.md#enable_console) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}/enableConsole | Enable Serial Console for a subscription
[**get_console_status**](SerialConsoleApi.md#get_console_status) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default} | Get the disabled status for a subscription
[**list_operations**](SerialConsoleApi.md#list_operations) | **GET** /providers/Microsoft.SerialConsole/operations | 


# **disable_console**
> DisableSerialConsoleResult disable_console(api_version, subscription_id, default)

Disable Serial Console for a subscription

Disables the Serial Console service for all VMs and VM scale sets in the provided subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disable_serial_console_result import DisableSerialConsoleResult
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
    api_instance = openapi_client.SerialConsoleApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it.
    default = 'default_example' # str | Default parameter. Leave the value as \"default\".

    try:
        # Disable Serial Console for a subscription
        api_response = api_instance.disable_console(api_version, subscription_id, default)
        print("The response of SerialConsoleApi->disable_console:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SerialConsoleApi->disable_console: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it. | 
 **default** | **str**| Default parameter. Leave the value as \&quot;default\&quot;. | 

### Return type

[**DisableSerialConsoleResult**](DisableSerialConsoleResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns a JSON object |  -  |
**404** | Subscription not found - returns a JSON object with error details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enable_console**
> EnableSerialConsoleResult enable_console(api_version, subscription_id, default)

Enable Serial Console for a subscription

Enables the Serial Console service for all VMs and VM scale sets in the provided subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.enable_serial_console_result import EnableSerialConsoleResult
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
    api_instance = openapi_client.SerialConsoleApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it.
    default = 'default_example' # str | Default parameter. Leave the value as \"default\".

    try:
        # Enable Serial Console for a subscription
        api_response = api_instance.enable_console(api_version, subscription_id, default)
        print("The response of SerialConsoleApi->enable_console:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SerialConsoleApi->enable_console: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it. | 
 **default** | **str**| Default parameter. Leave the value as \&quot;default\&quot;. | 

### Return type

[**EnableSerialConsoleResult**](EnableSerialConsoleResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Serial Console disabled |  -  |
**404** | Subscription not found - returns a JSON object with error details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_console_status**
> SerialConsoleStatus get_console_status(api_version, subscription_id, default)

Get the disabled status for a subscription

Gets whether or not Serial Console is disabled for a given subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.serial_console_status import SerialConsoleStatus
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
    api_instance = openapi_client.SerialConsoleApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it.
    default = 'default_example' # str | Default parameter. Leave the value as \"default\".

    try:
        # Get the disabled status for a subscription
        api_response = api_instance.get_console_status(api_version, subscription_id, default)
        print("The response of SerialConsoleApi->get_console_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SerialConsoleApi->get_console_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it. | 
 **default** | **str**| Default parameter. Leave the value as \&quot;default\&quot;. | 

### Return type

[**SerialConsoleStatus**](SerialConsoleStatus.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns a JSON object |  -  |
**404** | Subscription not found - returns a JSON object with error details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_operations**
> SerialConsoleOperations list_operations(api_version)



Gets a list of Serial Console API operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.serial_console_operations import SerialConsoleOperations
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
    api_instance = openapi_client.SerialConsoleApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.list_operations(api_version)
        print("The response of SerialConsoleApi->list_operations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SerialConsoleApi->list_operations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**SerialConsoleOperations**](SerialConsoleOperations.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - returns a JSON object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


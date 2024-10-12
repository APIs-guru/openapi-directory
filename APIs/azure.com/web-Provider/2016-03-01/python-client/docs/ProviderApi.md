# openapi_client.ProviderApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**provider_get_available_stacks**](ProviderApi.md#provider_get_available_stacks) | **GET** /providers/Microsoft.Web/availableStacks | Get available application frameworks and their versions
[**provider_get_available_stacks_on_prem**](ProviderApi.md#provider_get_available_stacks_on_prem) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/availableStacks | Get available application frameworks and their versions
[**provider_list_operations**](ProviderApi.md#provider_list_operations) | **GET** /providers/Microsoft.Web/operations | Gets all available operations for the Microsoft.Web resource provider. Also exposes resource metric definitions


# **provider_get_available_stacks**
> ApplicationStackCollection provider_get_available_stacks(api_version, os_type_selected=os_type_selected)

Get available application frameworks and their versions

Get available application frameworks and their versions

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_stack_collection import ApplicationStackCollection
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
    api_instance = openapi_client.ProviderApi(api_client)
    api_version = 'api_version_example' # str | API Version
    os_type_selected = 'os_type_selected_example' # str |  (optional)

    try:
        # Get available application frameworks and their versions
        api_response = api_instance.provider_get_available_stacks(api_version, os_type_selected=os_type_selected)
        print("The response of ProviderApi->provider_get_available_stacks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_get_available_stacks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API Version | 
 **os_type_selected** | **str**|  | [optional] 

### Return type

[**ApplicationStackCollection**](ApplicationStackCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provider_get_available_stacks_on_prem**
> ApplicationStackCollection provider_get_available_stacks_on_prem(subscription_id, api_version, os_type_selected=os_type_selected)

Get available application frameworks and their versions

Get available application frameworks and their versions

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_stack_collection import ApplicationStackCollection
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
    api_instance = openapi_client.ProviderApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    os_type_selected = 'os_type_selected_example' # str |  (optional)

    try:
        # Get available application frameworks and their versions
        api_response = api_instance.provider_get_available_stacks_on_prem(subscription_id, api_version, os_type_selected=os_type_selected)
        print("The response of ProviderApi->provider_get_available_stacks_on_prem:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_get_available_stacks_on_prem: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **os_type_selected** | **str**|  | [optional] 

### Return type

[**ApplicationStackCollection**](ApplicationStackCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provider_list_operations**
> ProviderListOperations200Response provider_list_operations(api_version)

Gets all available operations for the Microsoft.Web resource provider. Also exposes resource metric definitions

Gets all available operations for the Microsoft.Web resource provider. Also exposes resource metric definitions

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provider_list_operations200_response import ProviderListOperations200Response
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
    api_instance = openapi_client.ProviderApi(api_client)
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets all available operations for the Microsoft.Web resource provider. Also exposes resource metric definitions
        api_response = api_instance.provider_list_operations(api_version)
        print("The response of ProviderApi->provider_list_operations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_list_operations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API Version | 

### Return type

[**ProviderListOperations200Response**](ProviderListOperations200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


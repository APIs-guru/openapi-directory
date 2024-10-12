# openapi_client.DynamicModulesApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dynamic_modules_resource_get_modules_get**](DynamicModulesApi.md#dynamic_modules_resource_get_modules_get) | **GET** /rest/atlassian-connect/1/app/module/dynamic | Get modules
[**dynamic_modules_resource_register_modules_post**](DynamicModulesApi.md#dynamic_modules_resource_register_modules_post) | **POST** /rest/atlassian-connect/1/app/module/dynamic | Register modules
[**dynamic_modules_resource_remove_modules_delete**](DynamicModulesApi.md#dynamic_modules_resource_remove_modules_delete) | **DELETE** /rest/atlassian-connect/1/app/module/dynamic | Remove modules


# **dynamic_modules_resource_get_modules_get**
> ConnectModules dynamic_modules_resource_get_modules_get()

Get modules

Returns all modules registered dynamically by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example


```python
import openapi_client
from openapi_client.models.connect_modules import ConnectModules
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DynamicModulesApi(api_client)

    try:
        # Get modules
        api_response = api_instance.dynamic_modules_resource_get_modules_get()
        print("The response of DynamicModulesApi->dynamic_modules_resource_get_modules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DynamicModulesApi->dynamic_modules_resource_get_modules_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ConnectModules**](ConnectModules.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the call is not from a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dynamic_modules_resource_register_modules_post**
> dynamic_modules_resource_register_modules_post(connect_modules)

Register modules

Registers a list of modules.  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example


```python
import openapi_client
from openapi_client.models.connect_modules import ConnectModules
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DynamicModulesApi(api_client)
    connect_modules = openapi_client.ConnectModules() # ConnectModules | 

    try:
        # Register modules
        api_instance.dynamic_modules_resource_register_modules_post(connect_modules)
    except Exception as e:
        print("Exception when calling DynamicModulesApi->dynamic_modules_resource_register_modules_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connect_modules** | [**ConnectModules**](ConnectModules.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if: * any of the provided modules is invalid. For example, required properties are missing. * any of the modules conflict with registered dynamic modules or modules defined in the app descriptor. For example, there are duplicate keys.  Details of the issues encountered are included in the error message. |  -  |
**401** | Returned if the call is not from a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dynamic_modules_resource_remove_modules_delete**
> dynamic_modules_resource_remove_modules_delete(module_key=module_key)

Remove modules

Remove all or a list of modules registered by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DynamicModulesApi(api_client)
    module_key = ['module_key_example'] # List[str] | The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`. Nonexistent keys are ignored. (optional)

    try:
        # Remove modules
        api_instance.dynamic_modules_resource_remove_modules_delete(module_key=module_key)
    except Exception as e:
        print("Exception when calling DynamicModulesApi->dynamic_modules_resource_remove_modules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **module_key** | [**List[str]**](str.md)| The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, &#x60;moduleKey&#x3D;dynamic-attachment-entity-property&amp;moduleKey&#x3D;dynamic-select-field&#x60;. Nonexistent keys are ignored. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**401** | Returned if the call is not from a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.MachineExtensionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**machine_extensions_create_or_update**](MachineExtensionsApi.md#machine_extensions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName} | 
[**machine_extensions_delete**](MachineExtensionsApi.md#machine_extensions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName} | 
[**machine_extensions_get**](MachineExtensionsApi.md#machine_extensions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName} | 
[**machine_extensions_list**](MachineExtensionsApi.md#machine_extensions_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions | 
[**machine_extensions_update**](MachineExtensionsApi.md#machine_extensions_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName} | 


# **machine_extensions_create_or_update**
> MachineExtension machine_extensions_create_or_update(resource_group_name, name, extension_name, api_version, subscription_id, extension_parameters)



The operation to create or update the extension.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_extension import MachineExtension
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
    api_instance = openapi_client.MachineExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the machine where the extension should be created or updated.
    extension_name = 'extension_name_example' # str | The name of the machine extension.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    extension_parameters = openapi_client.MachineExtension() # MachineExtension | Parameters supplied to the Create Machine Extension operation.

    try:
        api_response = api_instance.machine_extensions_create_or_update(resource_group_name, name, extension_name, api_version, subscription_id, extension_parameters)
        print("The response of MachineExtensionsApi->machine_extensions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineExtensionsApi->machine_extensions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the machine where the extension should be created or updated. | 
 **extension_name** | **str**| The name of the machine extension. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **extension_parameters** | [**MachineExtension**](MachineExtension.md)| Parameters supplied to the Create Machine Extension operation. | 

### Return type

[**MachineExtension**](MachineExtension.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machine_extensions_delete**
> machine_extensions_delete(resource_group_name, name, extension_name, api_version, subscription_id)



The operation to delete the extension.

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
    api_instance = openapi_client.MachineExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the machine where the extension should be deleted.
    extension_name = 'extension_name_example' # str | The name of the machine extension.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.machine_extensions_delete(resource_group_name, name, extension_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling MachineExtensionsApi->machine_extensions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the machine where the extension should be deleted. | 
 **extension_name** | **str**| The name of the machine extension. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machine_extensions_get**
> MachineExtension machine_extensions_get(resource_group_name, name, extension_name, api_version, subscription_id)



The operation to get the extension.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_extension import MachineExtension
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
    api_instance = openapi_client.MachineExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the machine containing the extension.
    extension_name = 'extension_name_example' # str | The name of the machine extension.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.machine_extensions_get(resource_group_name, name, extension_name, api_version, subscription_id)
        print("The response of MachineExtensionsApi->machine_extensions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineExtensionsApi->machine_extensions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the machine containing the extension. | 
 **extension_name** | **str**| The name of the machine extension. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**MachineExtension**](MachineExtension.md)

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

# **machine_extensions_list**
> MachineExtensionsListResult machine_extensions_list(resource_group_name, name, api_version, subscription_id, expand=expand)



The operation to get all extensions of a non-Azure machine

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_extensions_list_result import MachineExtensionsListResult
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
    api_instance = openapi_client.MachineExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the machine containing the extension.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    expand = 'expand_example' # str | The expand expression to apply on the operation. (optional)

    try:
        api_response = api_instance.machine_extensions_list(resource_group_name, name, api_version, subscription_id, expand=expand)
        print("The response of MachineExtensionsApi->machine_extensions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineExtensionsApi->machine_extensions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the machine containing the extension. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **expand** | **str**| The expand expression to apply on the operation. | [optional] 

### Return type

[**MachineExtensionsListResult**](MachineExtensionsListResult.md)

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

# **machine_extensions_update**
> MachineExtension machine_extensions_update(resource_group_name, name, extension_name, api_version, subscription_id, extension_parameters)



The operation to create or update the extension.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_extension import MachineExtension
from openapi_client.models.machine_extension_update import MachineExtensionUpdate
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
    api_instance = openapi_client.MachineExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the machine where the extension should be created or updated.
    extension_name = 'extension_name_example' # str | The name of the machine extension.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    extension_parameters = openapi_client.MachineExtensionUpdate() # MachineExtensionUpdate | Parameters supplied to the Create Machine Extension operation.

    try:
        api_response = api_instance.machine_extensions_update(resource_group_name, name, extension_name, api_version, subscription_id, extension_parameters)
        print("The response of MachineExtensionsApi->machine_extensions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineExtensionsApi->machine_extensions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the machine where the extension should be created or updated. | 
 **extension_name** | **str**| The name of the machine extension. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **extension_parameters** | [**MachineExtensionUpdate**](MachineExtensionUpdate.md)| Parameters supplied to the Create Machine Extension operation. | 

### Return type

[**MachineExtension**](MachineExtension.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


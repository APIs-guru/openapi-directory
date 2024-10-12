# openapi_client.ScopeMapsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scope_maps_create**](ScopeMapsApi.md#scope_maps_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName} | 
[**scope_maps_delete**](ScopeMapsApi.md#scope_maps_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName} | 
[**scope_maps_get**](ScopeMapsApi.md#scope_maps_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName} | 
[**scope_maps_list**](ScopeMapsApi.md#scope_maps_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps | 
[**scope_maps_update**](ScopeMapsApi.md#scope_maps_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName} | 


# **scope_maps_create**
> ScopeMap scope_maps_create(api_version, subscription_id, resource_group_name, registry_name, scope_map_name, scope_map_create_parameters)



Creates a scope map for a container registry with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scope_map import ScopeMap
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
    api_instance = openapi_client.ScopeMapsApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    scope_map_name = 'scope_map_name_example' # str | The name of the scope map.
    scope_map_create_parameters = openapi_client.ScopeMap() # ScopeMap | The parameters for creating a scope map.

    try:
        api_response = api_instance.scope_maps_create(api_version, subscription_id, resource_group_name, registry_name, scope_map_name, scope_map_create_parameters)
        print("The response of ScopeMapsApi->scope_maps_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeMapsApi->scope_maps_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **scope_map_name** | **str**| The name of the scope map. | 
 **scope_map_create_parameters** | [**ScopeMap**](ScopeMap.md)| The parameters for creating a scope map. | 

### Return type

[**ScopeMap**](ScopeMap.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**201** | The request was successful; the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scope_maps_delete**
> scope_maps_delete(api_version, subscription_id, resource_group_name, registry_name, scope_map_name)



Deletes a scope map from a container registry.

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
    api_instance = openapi_client.ScopeMapsApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    scope_map_name = 'scope_map_name_example' # str | The name of the scope map.

    try:
        api_instance.scope_maps_delete(api_version, subscription_id, resource_group_name, registry_name, scope_map_name)
    except Exception as e:
        print("Exception when calling ScopeMapsApi->scope_maps_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **scope_map_name** | **str**| The name of the scope map. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**202** | The request was successful; the operation will complete asynchronously. |  -  |
**204** | The scopemap does not exist in the subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scope_maps_get**
> ScopeMap scope_maps_get(api_version, subscription_id, resource_group_name, registry_name, scope_map_name)



Gets the properties of the specified scope map.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scope_map import ScopeMap
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
    api_instance = openapi_client.ScopeMapsApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    scope_map_name = 'scope_map_name_example' # str | The name of the scope map.

    try:
        api_response = api_instance.scope_maps_get(api_version, subscription_id, resource_group_name, registry_name, scope_map_name)
        print("The response of ScopeMapsApi->scope_maps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeMapsApi->scope_maps_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **scope_map_name** | **str**| The name of the scope map. | 

### Return type

[**ScopeMap**](ScopeMap.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scope_maps_list**
> ScopeMapListResult scope_maps_list(api_version, subscription_id, resource_group_name, registry_name)



Lists all the scope maps for the specified container registry.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scope_map_list_result import ScopeMapListResult
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
    api_instance = openapi_client.ScopeMapsApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.

    try:
        api_response = api_instance.scope_maps_list(api_version, subscription_id, resource_group_name, registry_name)
        print("The response of ScopeMapsApi->scope_maps_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeMapsApi->scope_maps_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 

### Return type

[**ScopeMapListResult**](ScopeMapListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scope_maps_update**
> ScopeMap scope_maps_update(api_version, subscription_id, resource_group_name, registry_name, scope_map_name, scope_map_update_parameters)



Updates a scope map with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scope_map import ScopeMap
from openapi_client.models.scope_map_update_parameters import ScopeMapUpdateParameters
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
    api_instance = openapi_client.ScopeMapsApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    scope_map_name = 'scope_map_name_example' # str | The name of the scope map.
    scope_map_update_parameters = openapi_client.ScopeMapUpdateParameters() # ScopeMapUpdateParameters | The parameters for updating a scope map.

    try:
        api_response = api_instance.scope_maps_update(api_version, subscription_id, resource_group_name, registry_name, scope_map_name, scope_map_update_parameters)
        print("The response of ScopeMapsApi->scope_maps_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeMapsApi->scope_maps_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **scope_map_name** | **str**| The name of the scope map. | 
 **scope_map_update_parameters** | [**ScopeMapUpdateParameters**](ScopeMapUpdateParameters.md)| The parameters for updating a scope map. | 

### Return type

[**ScopeMap**](ScopeMap.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**201** | The request was successful; the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.MeshNetworksApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mesh_network_create_or_update**](MeshNetworksApi.md#mesh_network_create_or_update) | **PUT** /Resources/Networks/{networkResourceName} | Creates or updates a Network resource.
[**mesh_network_delete**](MeshNetworksApi.md#mesh_network_delete) | **DELETE** /Resources/Networks/{networkResourceName} | Deletes the Network resource.
[**mesh_network_get**](MeshNetworksApi.md#mesh_network_get) | **GET** /Resources/Networks/{networkResourceName} | Gets the Network resource with the given name.
[**mesh_network_list**](MeshNetworksApi.md#mesh_network_list) | **GET** /Resources/Networks | Lists all the network resources.


# **mesh_network_create_or_update**
> NetworkResourceDescription mesh_network_create_or_update(api_version, network_resource_name, network_resource_description)

Creates or updates a Network resource.

Creates a Network resource with the specified name, description and properties. If Network resource with the same name exists, then it is updated with the specified description and properties. Network resource provides connectivity between application services.

### Example


```python
import openapi_client
from openapi_client.models.network_resource_description import NetworkResourceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshNetworksApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    network_resource_name = 'network_resource_name_example' # str | The identity of the network.
    network_resource_description = openapi_client.NetworkResourceDescription() # NetworkResourceDescription | Description for creating a Network resource.

    try:
        # Creates or updates a Network resource.
        api_response = api_instance.mesh_network_create_or_update(api_version, network_resource_name, network_resource_description)
        print("The response of MeshNetworksApi->mesh_network_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshNetworksApi->mesh_network_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **network_resource_name** | **str**| The identity of the network. | 
 **network_resource_description** | [**NetworkResourceDescription**](NetworkResourceDescription.md)| Description for creating a Network resource. | 

### Return type

[**NetworkResourceDescription**](NetworkResourceDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_network_delete**
> mesh_network_delete(api_version, network_resource_name)

Deletes the Network resource.

Deletes the Network resource identified by the name.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshNetworksApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    network_resource_name = 'network_resource_name_example' # str | The identity of the network.

    try:
        # Deletes the Network resource.
        api_instance.mesh_network_delete(api_version, network_resource_name)
    except Exception as e:
        print("Exception when calling MeshNetworksApi->mesh_network_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **network_resource_name** | **str**| The identity of the network. | 

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | No Content - the specified network was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_network_get**
> NetworkResourceDescription mesh_network_get(api_version, network_resource_name)

Gets the Network resource with the given name.

Gets the information about the Network resource with the given name. The information include the description and other properties of the Network.

### Example


```python
import openapi_client
from openapi_client.models.network_resource_description import NetworkResourceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshNetworksApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    network_resource_name = 'network_resource_name_example' # str | The identity of the network.

    try:
        # Gets the Network resource with the given name.
        api_response = api_instance.mesh_network_get(api_version, network_resource_name)
        print("The response of MeshNetworksApi->mesh_network_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshNetworksApi->mesh_network_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **network_resource_name** | **str**| The identity of the network. | 

### Return type

[**NetworkResourceDescription**](NetworkResourceDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_network_list**
> PagedNetworkResourceDescriptionList mesh_network_list(api_version)

Lists all the network resources.

Gets the information about all network resources in a given resource group. The information include the description and other properties of the Network.

### Example


```python
import openapi_client
from openapi_client.models.paged_network_resource_description_list import PagedNetworkResourceDescriptionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshNetworksApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)

    try:
        # Lists all the network resources.
        api_response = api_instance.mesh_network_list(api_version)
        print("The response of MeshNetworksApi->mesh_network_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshNetworksApi->mesh_network_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]

### Return type

[**PagedNetworkResourceDescriptionList**](PagedNetworkResourceDescriptionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


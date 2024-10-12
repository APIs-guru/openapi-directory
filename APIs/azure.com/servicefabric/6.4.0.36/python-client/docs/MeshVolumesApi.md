# openapi_client.MeshVolumesApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mesh_volume_create_or_update**](MeshVolumesApi.md#mesh_volume_create_or_update) | **PUT** /Resources/Volumes/{volumeResourceName} | Creates or updates a Volume resource.
[**mesh_volume_delete**](MeshVolumesApi.md#mesh_volume_delete) | **DELETE** /Resources/Volumes/{volumeResourceName} | Deletes the Volume resource.
[**mesh_volume_get**](MeshVolumesApi.md#mesh_volume_get) | **GET** /Resources/Volumes/{volumeResourceName} | Gets the Volume resource with the given name.
[**mesh_volume_list**](MeshVolumesApi.md#mesh_volume_list) | **GET** /Resources/Volumes | Lists all the volume resources.


# **mesh_volume_create_or_update**
> VolumeResourceDescription mesh_volume_create_or_update(api_version, volume_resource_name, volume_resource_description)

Creates or updates a Volume resource.

Creates a Volume resource with the specified name, description and properties. If Volume resource with the same name exists, then it is updated with the specified description and properties.

### Example


```python
import openapi_client
from openapi_client.models.volume_resource_description import VolumeResourceDescription
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
    api_instance = openapi_client.MeshVolumesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    volume_resource_name = 'volume_resource_name_example' # str | The identity of the volume.
    volume_resource_description = openapi_client.VolumeResourceDescription() # VolumeResourceDescription | Description for creating a Volume resource.

    try:
        # Creates or updates a Volume resource.
        api_response = api_instance.mesh_volume_create_or_update(api_version, volume_resource_name, volume_resource_description)
        print("The response of MeshVolumesApi->mesh_volume_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshVolumesApi->mesh_volume_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **volume_resource_name** | **str**| The identity of the volume. | 
 **volume_resource_description** | [**VolumeResourceDescription**](VolumeResourceDescription.md)| Description for creating a Volume resource. | 

### Return type

[**VolumeResourceDescription**](VolumeResourceDescription.md)

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

# **mesh_volume_delete**
> mesh_volume_delete(api_version, volume_resource_name)

Deletes the Volume resource.

Deletes the Volume resource identified by the name.

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
    api_instance = openapi_client.MeshVolumesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    volume_resource_name = 'volume_resource_name_example' # str | The identity of the volume.

    try:
        # Deletes the Volume resource.
        api_instance.mesh_volume_delete(api_version, volume_resource_name)
    except Exception as e:
        print("Exception when calling MeshVolumesApi->mesh_volume_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **volume_resource_name** | **str**| The identity of the volume. | 

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
**204** | No Content - the specified volume was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_volume_get**
> VolumeResourceDescription mesh_volume_get(api_version, volume_resource_name)

Gets the Volume resource with the given name.

Gets the information about the Volume resource with the given name. The information include the description and other properties of the Volume.

### Example


```python
import openapi_client
from openapi_client.models.volume_resource_description import VolumeResourceDescription
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
    api_instance = openapi_client.MeshVolumesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    volume_resource_name = 'volume_resource_name_example' # str | The identity of the volume.

    try:
        # Gets the Volume resource with the given name.
        api_response = api_instance.mesh_volume_get(api_version, volume_resource_name)
        print("The response of MeshVolumesApi->mesh_volume_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshVolumesApi->mesh_volume_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **volume_resource_name** | **str**| The identity of the volume. | 

### Return type

[**VolumeResourceDescription**](VolumeResourceDescription.md)

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

# **mesh_volume_list**
> PagedVolumeResourceDescriptionList mesh_volume_list(api_version)

Lists all the volume resources.

Gets the information about all volume resources in a given resource group. The information include the description and other properties of the Volume.

### Example


```python
import openapi_client
from openapi_client.models.paged_volume_resource_description_list import PagedVolumeResourceDescriptionList
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
    api_instance = openapi_client.MeshVolumesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)

    try:
        # Lists all the volume resources.
        api_response = api_instance.mesh_volume_list(api_version)
        print("The response of MeshVolumesApi->mesh_volume_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshVolumesApi->mesh_volume_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]

### Return type

[**PagedVolumeResourceDescriptionList**](PagedVolumeResourceDescriptionList.md)

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


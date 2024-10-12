# openapi_client.VolumeResourceApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_volume_resource**](VolumeResourceApi.md#create_volume_resource) | **PUT** /Resources/Volumes/{volumeResourceName} | Creates or updates a volume resource.
[**delete_volume_resource**](VolumeResourceApi.md#delete_volume_resource) | **DELETE** /Resources/Volumes/{volumeResourceName} | Deletes the volume resource.
[**get_volume_resource**](VolumeResourceApi.md#get_volume_resource) | **GET** /Resources/Volumes/{volumeResourceName} | Gets the volume resource.


# **create_volume_resource**
> create_volume_resource(api_version, volume_resource_name, volume_resource_description)

Creates or updates a volume resource.

Creates a volume resource with the specified name and description. If a volume with the same name already exists, then its description is updated to the one indicated in this request.

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
    api_instance = openapi_client.VolumeResourceApi(api_client)
    api_version = 6.3-preview # str | The version of the API. This parameter is required and its value must be '6.3-preview'. (default to 6.3-preview)
    volume_resource_name = 'volume_resource_name_example' # str | Service Fabric volume resource name.
    volume_resource_description = openapi_client.VolumeResourceDescription() # VolumeResourceDescription | Description for creating a volume resource.

    try:
        # Creates or updates a volume resource.
        api_instance.create_volume_resource(api_version, volume_resource_name, volume_resource_description)
    except Exception as e:
        print("Exception when calling VolumeResourceApi->create_volume_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.3-preview&#39;. | [default to 6.3-preview]
 **volume_resource_name** | **str**| Service Fabric volume resource name. | 
 **volume_resource_description** | [**VolumeResourceDescription**](VolumeResourceDescription.md)| Description for creating a volume resource. | 

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
**201** | Created |  -  |
**202** | Accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_volume_resource**
> delete_volume_resource(api_version, volume_resource_name)

Deletes the volume resource.

Deletes the volume identified by the name.

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
    api_instance = openapi_client.VolumeResourceApi(api_client)
    api_version = 6.3-preview # str | The version of the API. This parameter is required and its value must be '6.3-preview'. (default to 6.3-preview)
    volume_resource_name = 'volume_resource_name_example' # str | Service Fabric volume resource name.

    try:
        # Deletes the volume resource.
        api_instance.delete_volume_resource(api_version, volume_resource_name)
    except Exception as e:
        print("Exception when calling VolumeResourceApi->delete_volume_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.3-preview&#39;. | [default to 6.3-preview]
 **volume_resource_name** | **str**| Service Fabric volume resource name. | 

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

# **get_volume_resource**
> VolumeResourceDescription get_volume_resource(api_version, volume_resource_name)

Gets the volume resource.

Gets the information about the volume resource with a given name. This information includes the volume description and other runtime information.

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
    api_instance = openapi_client.VolumeResourceApi(api_client)
    api_version = 6.3-preview # str | The version of the API. This parameter is required and its value must be '6.3-preview'. (default to 6.3-preview)
    volume_resource_name = 'volume_resource_name_example' # str | Service Fabric volume resource name.

    try:
        # Gets the volume resource.
        api_response = api_instance.get_volume_resource(api_version, volume_resource_name)
        print("The response of VolumeResourceApi->get_volume_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumeResourceApi->get_volume_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.3-preview&#39;. | [default to 6.3-preview]
 **volume_resource_name** | **str**| Service Fabric volume resource name. | 

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


# openapi_client.GalleryImageVersionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gallery_image_versions_create_or_update**](GalleryImageVersionsApi.md#gallery_image_versions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName} | 
[**gallery_image_versions_delete**](GalleryImageVersionsApi.md#gallery_image_versions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName} | 
[**gallery_image_versions_get**](GalleryImageVersionsApi.md#gallery_image_versions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName} | 
[**gallery_image_versions_list_by_gallery_image**](GalleryImageVersionsApi.md#gallery_image_versions_list_by_gallery_image) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions | 


# **gallery_image_versions_create_or_update**
> GalleryImageVersion gallery_image_versions_create_or_update(subscription_id, resource_group_name, gallery_name, gallery_image_name, gallery_image_version_name, api_version, gallery_image_version)



Create or update a gallery Image Version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_image_version import GalleryImageVersion
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
    api_instance = openapi_client.GalleryImageVersionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Image Gallery in which the Image Definition resides.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the gallery Image Definition in which the Image Version is to be created.
    gallery_image_version_name = 'gallery_image_version_name_example' # str | The name of the gallery Image Version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
    api_version = 'api_version_example' # str | Client Api Version.
    gallery_image_version = openapi_client.GalleryImageVersion() # GalleryImageVersion | Parameters supplied to the create or update gallery Image Version operation.

    try:
        api_response = api_instance.gallery_image_versions_create_or_update(subscription_id, resource_group_name, gallery_name, gallery_image_name, gallery_image_version_name, api_version, gallery_image_version)
        print("The response of GalleryImageVersionsApi->gallery_image_versions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryImageVersionsApi->gallery_image_versions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Image Gallery in which the Image Definition resides. | 
 **gallery_image_name** | **str**| The name of the gallery Image Definition in which the Image Version is to be created. | 
 **gallery_image_version_name** | **str**| The name of the gallery Image Version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: &lt;MajorVersion&gt;.&lt;MinorVersion&gt;.&lt;Patch&gt; | 
 **api_version** | **str**| Client Api Version. | 
 **gallery_image_version** | [**GalleryImageVersion**](GalleryImageVersion.md)| Parameters supplied to the create or update gallery Image Version operation. | 

### Return type

[**GalleryImageVersion**](GalleryImageVersion.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_image_versions_delete**
> gallery_image_versions_delete(subscription_id, resource_group_name, gallery_name, gallery_image_name, gallery_image_version_name, api_version)



Delete a gallery Image Version.

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
    api_instance = openapi_client.GalleryImageVersionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Image Gallery in which the Image Definition resides.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the gallery Image Definition in which the Image Version resides.
    gallery_image_version_name = 'gallery_image_version_name_example' # str | The name of the gallery Image Version to be deleted.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.gallery_image_versions_delete(subscription_id, resource_group_name, gallery_name, gallery_image_name, gallery_image_version_name, api_version)
    except Exception as e:
        print("Exception when calling GalleryImageVersionsApi->gallery_image_versions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Image Gallery in which the Image Definition resides. | 
 **gallery_image_name** | **str**| The name of the gallery Image Definition in which the Image Version resides. | 
 **gallery_image_version_name** | **str**| The name of the gallery Image Version to be deleted. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_image_versions_get**
> GalleryImageVersion gallery_image_versions_get(subscription_id, resource_group_name, gallery_name, gallery_image_name, gallery_image_version_name, api_version, expand=expand)



Retrieves information about a gallery Image Version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_image_version import GalleryImageVersion
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
    api_instance = openapi_client.GalleryImageVersionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Image Gallery in which the Image Definition resides.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the gallery Image Definition in which the Image Version resides.
    gallery_image_version_name = 'gallery_image_version_name_example' # str | The name of the gallery Image Version to be retrieved.
    api_version = 'api_version_example' # str | Client Api Version.
    expand = 'expand_example' # str | The expand expression to apply on the operation. (optional)

    try:
        api_response = api_instance.gallery_image_versions_get(subscription_id, resource_group_name, gallery_name, gallery_image_name, gallery_image_version_name, api_version, expand=expand)
        print("The response of GalleryImageVersionsApi->gallery_image_versions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryImageVersionsApi->gallery_image_versions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Image Gallery in which the Image Definition resides. | 
 **gallery_image_name** | **str**| The name of the gallery Image Definition in which the Image Version resides. | 
 **gallery_image_version_name** | **str**| The name of the gallery Image Version to be retrieved. | 
 **api_version** | **str**| Client Api Version. | 
 **expand** | **str**| The expand expression to apply on the operation. | [optional] 

### Return type

[**GalleryImageVersion**](GalleryImageVersion.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gallery_image_versions_list_by_gallery_image**
> GalleryImageVersionList gallery_image_versions_list_by_gallery_image(subscription_id, resource_group_name, gallery_name, gallery_image_name, api_version)



List gallery Image Versions in a gallery Image Definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_image_version_list import GalleryImageVersionList
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
    api_instance = openapi_client.GalleryImageVersionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Image Gallery in which the Image Definition resides.
    gallery_image_name = 'gallery_image_name_example' # str | The name of the Shared Image Gallery Image Definition from which the Image Versions are to be listed.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.gallery_image_versions_list_by_gallery_image(subscription_id, resource_group_name, gallery_name, gallery_image_name, api_version)
        print("The response of GalleryImageVersionsApi->gallery_image_versions_list_by_gallery_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryImageVersionsApi->gallery_image_versions_list_by_gallery_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Image Gallery in which the Image Definition resides. | 
 **gallery_image_name** | **str**| The name of the Shared Image Gallery Image Definition from which the Image Versions are to be listed. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GalleryImageVersionList**](GalleryImageVersionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.GalleryApplicationVersionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gallery_application_versions_create_or_update**](GalleryApplicationVersionsApi.md#gallery_application_versions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName} | 
[**gallery_application_versions_delete**](GalleryApplicationVersionsApi.md#gallery_application_versions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName} | 
[**gallery_application_versions_get**](GalleryApplicationVersionsApi.md#gallery_application_versions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName} | 
[**gallery_application_versions_list_by_gallery_application**](GalleryApplicationVersionsApi.md#gallery_application_versions_list_by_gallery_application) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions | 
[**gallery_application_versions_update**](GalleryApplicationVersionsApi.md#gallery_application_versions_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName} | 


# **gallery_application_versions_create_or_update**
> GalleryApplicationVersion gallery_application_versions_create_or_update(subscription_id, resource_group_name, gallery_name, gallery_application_name, gallery_application_version_name, api_version, gallery_application_version)



Create or update a gallery Application Version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_application_version import GalleryApplicationVersion
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
    api_instance = openapi_client.GalleryApplicationVersionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Application Gallery in which the Application Definition resides.
    gallery_application_name = 'gallery_application_name_example' # str | The name of the gallery Application Definition in which the Application Version is to be created.
    gallery_application_version_name = 'gallery_application_version_name_example' # str | The name of the gallery Application Version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
    api_version = 'api_version_example' # str | Client Api Version.
    gallery_application_version = openapi_client.GalleryApplicationVersion() # GalleryApplicationVersion | Parameters supplied to the create or update gallery Application Version operation.

    try:
        api_response = api_instance.gallery_application_versions_create_or_update(subscription_id, resource_group_name, gallery_name, gallery_application_name, gallery_application_version_name, api_version, gallery_application_version)
        print("The response of GalleryApplicationVersionsApi->gallery_application_versions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryApplicationVersionsApi->gallery_application_versions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Application Gallery in which the Application Definition resides. | 
 **gallery_application_name** | **str**| The name of the gallery Application Definition in which the Application Version is to be created. | 
 **gallery_application_version_name** | **str**| The name of the gallery Application Version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: &lt;MajorVersion&gt;.&lt;MinorVersion&gt;.&lt;Patch&gt; | 
 **api_version** | **str**| Client Api Version. | 
 **gallery_application_version** | [**GalleryApplicationVersion**](GalleryApplicationVersion.md)| Parameters supplied to the create or update gallery Application Version operation. | 

### Return type

[**GalleryApplicationVersion**](GalleryApplicationVersion.md)

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

# **gallery_application_versions_delete**
> gallery_application_versions_delete(subscription_id, resource_group_name, gallery_name, gallery_application_name, gallery_application_version_name, api_version)



Delete a gallery Application Version.

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
    api_instance = openapi_client.GalleryApplicationVersionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Application Gallery in which the Application Definition resides.
    gallery_application_name = 'gallery_application_name_example' # str | The name of the gallery Application Definition in which the Application Version resides.
    gallery_application_version_name = 'gallery_application_version_name_example' # str | The name of the gallery Application Version to be deleted.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.gallery_application_versions_delete(subscription_id, resource_group_name, gallery_name, gallery_application_name, gallery_application_version_name, api_version)
    except Exception as e:
        print("Exception when calling GalleryApplicationVersionsApi->gallery_application_versions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Application Gallery in which the Application Definition resides. | 
 **gallery_application_name** | **str**| The name of the gallery Application Definition in which the Application Version resides. | 
 **gallery_application_version_name** | **str**| The name of the gallery Application Version to be deleted. | 
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

# **gallery_application_versions_get**
> GalleryApplicationVersion gallery_application_versions_get(subscription_id, resource_group_name, gallery_name, gallery_application_name, gallery_application_version_name, api_version, expand=expand)



Retrieves information about a gallery Application Version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_application_version import GalleryApplicationVersion
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
    api_instance = openapi_client.GalleryApplicationVersionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Application Gallery in which the Application Definition resides.
    gallery_application_name = 'gallery_application_name_example' # str | The name of the gallery Application Definition in which the Application Version resides.
    gallery_application_version_name = 'gallery_application_version_name_example' # str | The name of the gallery Application Version to be retrieved.
    api_version = 'api_version_example' # str | Client Api Version.
    expand = 'expand_example' # str | The expand expression to apply on the operation. (optional)

    try:
        api_response = api_instance.gallery_application_versions_get(subscription_id, resource_group_name, gallery_name, gallery_application_name, gallery_application_version_name, api_version, expand=expand)
        print("The response of GalleryApplicationVersionsApi->gallery_application_versions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryApplicationVersionsApi->gallery_application_versions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Application Gallery in which the Application Definition resides. | 
 **gallery_application_name** | **str**| The name of the gallery Application Definition in which the Application Version resides. | 
 **gallery_application_version_name** | **str**| The name of the gallery Application Version to be retrieved. | 
 **api_version** | **str**| Client Api Version. | 
 **expand** | **str**| The expand expression to apply on the operation. | [optional] 

### Return type

[**GalleryApplicationVersion**](GalleryApplicationVersion.md)

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

# **gallery_application_versions_list_by_gallery_application**
> GalleryApplicationVersionList gallery_application_versions_list_by_gallery_application(subscription_id, resource_group_name, gallery_name, gallery_application_name, api_version)



List gallery Application Versions in a gallery Application Definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_application_version_list import GalleryApplicationVersionList
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
    api_instance = openapi_client.GalleryApplicationVersionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Application Gallery in which the Application Definition resides.
    gallery_application_name = 'gallery_application_name_example' # str | The name of the Shared Application Gallery Application Definition from which the Application Versions are to be listed.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.gallery_application_versions_list_by_gallery_application(subscription_id, resource_group_name, gallery_name, gallery_application_name, api_version)
        print("The response of GalleryApplicationVersionsApi->gallery_application_versions_list_by_gallery_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryApplicationVersionsApi->gallery_application_versions_list_by_gallery_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Application Gallery in which the Application Definition resides. | 
 **gallery_application_name** | **str**| The name of the Shared Application Gallery Application Definition from which the Application Versions are to be listed. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GalleryApplicationVersionList**](GalleryApplicationVersionList.md)

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

# **gallery_application_versions_update**
> GalleryApplicationVersion gallery_application_versions_update(subscription_id, resource_group_name, gallery_name, gallery_application_name, gallery_application_version_name, api_version, gallery_application_version)



Update a gallery Application Version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_application_version import GalleryApplicationVersion
from openapi_client.models.gallery_application_version_update import GalleryApplicationVersionUpdate
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
    api_instance = openapi_client.GalleryApplicationVersionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Application Gallery in which the Application Definition resides.
    gallery_application_name = 'gallery_application_name_example' # str | The name of the gallery Application Definition in which the Application Version is to be updated.
    gallery_application_version_name = 'gallery_application_version_name_example' # str | The name of the gallery Application Version to be updated. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
    api_version = 'api_version_example' # str | Client Api Version.
    gallery_application_version = openapi_client.GalleryApplicationVersionUpdate() # GalleryApplicationVersionUpdate | Parameters supplied to the update gallery Application Version operation.

    try:
        api_response = api_instance.gallery_application_versions_update(subscription_id, resource_group_name, gallery_name, gallery_application_name, gallery_application_version_name, api_version, gallery_application_version)
        print("The response of GalleryApplicationVersionsApi->gallery_application_versions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryApplicationVersionsApi->gallery_application_versions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Application Gallery in which the Application Definition resides. | 
 **gallery_application_name** | **str**| The name of the gallery Application Definition in which the Application Version is to be updated. | 
 **gallery_application_version_name** | **str**| The name of the gallery Application Version to be updated. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: &lt;MajorVersion&gt;.&lt;MinorVersion&gt;.&lt;Patch&gt; | 
 **api_version** | **str**| Client Api Version. | 
 **gallery_application_version** | [**GalleryApplicationVersionUpdate**](GalleryApplicationVersionUpdate.md)| Parameters supplied to the update gallery Application Version operation. | 

### Return type

[**GalleryApplicationVersion**](GalleryApplicationVersion.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.GalleryApplicationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gallery_applications_create_or_update**](GalleryApplicationsApi.md#gallery_applications_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName} | 
[**gallery_applications_delete**](GalleryApplicationsApi.md#gallery_applications_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName} | 
[**gallery_applications_get**](GalleryApplicationsApi.md#gallery_applications_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName} | 
[**gallery_applications_list_by_gallery**](GalleryApplicationsApi.md#gallery_applications_list_by_gallery) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications | 


# **gallery_applications_create_or_update**
> GalleryApplication gallery_applications_create_or_update(subscription_id, resource_group_name, gallery_name, gallery_application_name, api_version, gallery_application)



Create or update a gallery Application Definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_application import GalleryApplication
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
    api_instance = openapi_client.GalleryApplicationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Application Gallery in which the Application Definition is to be created.
    gallery_application_name = 'gallery_application_name_example' # str | The name of the gallery Application Definition to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.
    gallery_application = openapi_client.GalleryApplication() # GalleryApplication | Parameters supplied to the create or update gallery Application operation.

    try:
        api_response = api_instance.gallery_applications_create_or_update(subscription_id, resource_group_name, gallery_name, gallery_application_name, api_version, gallery_application)
        print("The response of GalleryApplicationsApi->gallery_applications_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryApplicationsApi->gallery_applications_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Application Gallery in which the Application Definition is to be created. | 
 **gallery_application_name** | **str**| The name of the gallery Application Definition to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 
 **gallery_application** | [**GalleryApplication**](GalleryApplication.md)| Parameters supplied to the create or update gallery Application operation. | 

### Return type

[**GalleryApplication**](GalleryApplication.md)

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

# **gallery_applications_delete**
> gallery_applications_delete(subscription_id, resource_group_name, gallery_name, gallery_application_name, api_version)



Delete a gallery Application.

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
    api_instance = openapi_client.GalleryApplicationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Application Gallery in which the Application Definition is to be deleted.
    gallery_application_name = 'gallery_application_name_example' # str | The name of the gallery Application Definition to be deleted.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.gallery_applications_delete(subscription_id, resource_group_name, gallery_name, gallery_application_name, api_version)
    except Exception as e:
        print("Exception when calling GalleryApplicationsApi->gallery_applications_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Application Gallery in which the Application Definition is to be deleted. | 
 **gallery_application_name** | **str**| The name of the gallery Application Definition to be deleted. | 
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

# **gallery_applications_get**
> GalleryApplication gallery_applications_get(subscription_id, resource_group_name, gallery_name, gallery_application_name, api_version)



Retrieves information about a gallery Application Definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_application import GalleryApplication
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
    api_instance = openapi_client.GalleryApplicationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Application Gallery from which the Application Definitions are to be retrieved.
    gallery_application_name = 'gallery_application_name_example' # str | The name of the gallery Application Definition to be retrieved.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.gallery_applications_get(subscription_id, resource_group_name, gallery_name, gallery_application_name, api_version)
        print("The response of GalleryApplicationsApi->gallery_applications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryApplicationsApi->gallery_applications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Application Gallery from which the Application Definitions are to be retrieved. | 
 **gallery_application_name** | **str**| The name of the gallery Application Definition to be retrieved. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GalleryApplication**](GalleryApplication.md)

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

# **gallery_applications_list_by_gallery**
> GalleryApplicationList gallery_applications_list_by_gallery(subscription_id, resource_group_name, gallery_name, api_version)



List gallery Application Definitions in a gallery.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gallery_application_list import GalleryApplicationList
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
    api_instance = openapi_client.GalleryApplicationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gallery_name = 'gallery_name_example' # str | The name of the Shared Application Gallery from which Application Definitions are to be listed.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.gallery_applications_list_by_gallery(subscription_id, resource_group_name, gallery_name, api_version)
        print("The response of GalleryApplicationsApi->gallery_applications_list_by_gallery:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GalleryApplicationsApi->gallery_applications_list_by_gallery: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **gallery_name** | **str**| The name of the Shared Application Gallery from which Application Definitions are to be listed. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GalleryApplicationList**](GalleryApplicationList.md)

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


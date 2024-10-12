# openapi_client.MeshApplicationsApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mesh_application_create_or_update**](MeshApplicationsApi.md#mesh_application_create_or_update) | **PUT** /Resources/Applications/{applicationResourceName} | Creates or updates a Application resource.
[**mesh_application_delete**](MeshApplicationsApi.md#mesh_application_delete) | **DELETE** /Resources/Applications/{applicationResourceName} | Deletes the Application resource.
[**mesh_application_get**](MeshApplicationsApi.md#mesh_application_get) | **GET** /Resources/Applications/{applicationResourceName} | Gets the Application resource with the given name.
[**mesh_application_list**](MeshApplicationsApi.md#mesh_application_list) | **GET** /Resources/Applications | Lists all the application resources.


# **mesh_application_create_or_update**
> ApplicationResourceDescription mesh_application_create_or_update(api_version, application_resource_name, application_resource_description)

Creates or updates a Application resource.

Creates a Application resource with the specified name, description and properties. If Application resource with the same name exists, then it is updated with the specified description and properties.

### Example


```python
import openapi_client
from openapi_client.models.application_resource_description import ApplicationResourceDescription
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
    api_instance = openapi_client.MeshApplicationsApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.
    application_resource_description = openapi_client.ApplicationResourceDescription() # ApplicationResourceDescription | Description for creating a Application resource.

    try:
        # Creates or updates a Application resource.
        api_response = api_instance.mesh_application_create_or_update(api_version, application_resource_name, application_resource_description)
        print("The response of MeshApplicationsApi->mesh_application_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshApplicationsApi->mesh_application_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **application_resource_name** | **str**| The identity of the application. | 
 **application_resource_description** | [**ApplicationResourceDescription**](ApplicationResourceDescription.md)| Description for creating a Application resource. | 

### Return type

[**ApplicationResourceDescription**](ApplicationResourceDescription.md)

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

# **mesh_application_delete**
> mesh_application_delete(api_version, application_resource_name)

Deletes the Application resource.

Deletes the Application resource identified by the name.

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
    api_instance = openapi_client.MeshApplicationsApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.

    try:
        # Deletes the Application resource.
        api_instance.mesh_application_delete(api_version, application_resource_name)
    except Exception as e:
        print("Exception when calling MeshApplicationsApi->mesh_application_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **application_resource_name** | **str**| The identity of the application. | 

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
**204** | No Content - the specified application was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_application_get**
> ApplicationResourceDescription mesh_application_get(api_version, application_resource_name)

Gets the Application resource with the given name.

Gets the information about the Application resource with the given name. The information include the description and other properties of the Application.

### Example


```python
import openapi_client
from openapi_client.models.application_resource_description import ApplicationResourceDescription
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
    api_instance = openapi_client.MeshApplicationsApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.

    try:
        # Gets the Application resource with the given name.
        api_response = api_instance.mesh_application_get(api_version, application_resource_name)
        print("The response of MeshApplicationsApi->mesh_application_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshApplicationsApi->mesh_application_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **application_resource_name** | **str**| The identity of the application. | 

### Return type

[**ApplicationResourceDescription**](ApplicationResourceDescription.md)

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

# **mesh_application_list**
> PagedApplicationResourceDescriptionList mesh_application_list(api_version)

Lists all the application resources.

Gets the information about all application resources in a given resource group. The information include the description and other properties of the Application.

### Example


```python
import openapi_client
from openapi_client.models.paged_application_resource_description_list import PagedApplicationResourceDescriptionList
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
    api_instance = openapi_client.MeshApplicationsApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)

    try:
        # Lists all the application resources.
        api_response = api_instance.mesh_application_list(api_version)
        print("The response of MeshApplicationsApi->mesh_application_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshApplicationsApi->mesh_application_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]

### Return type

[**PagedApplicationResourceDescriptionList**](PagedApplicationResourceDescriptionList.md)

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


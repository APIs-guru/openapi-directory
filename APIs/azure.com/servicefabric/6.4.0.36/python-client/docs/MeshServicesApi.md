# openapi_client.MeshServicesApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mesh_service_get**](MeshServicesApi.md#mesh_service_get) | **GET** /Resources/Applications/{applicationResourceName}/Services/{serviceResourceName} | Gets the Service resource with the given name.
[**mesh_service_list**](MeshServicesApi.md#mesh_service_list) | **GET** /Resources/Applications/{applicationResourceName}/Services | Lists all the service resources.


# **mesh_service_get**
> ServiceResourceDescription mesh_service_get(api_version, application_resource_name, service_resource_name)

Gets the Service resource with the given name.

Gets the information about the Service resource with the given name. The information include the description and other properties of the Service.

### Example


```python
import openapi_client
from openapi_client.models.service_resource_description import ServiceResourceDescription
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
    api_instance = openapi_client.MeshServicesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.
    service_resource_name = 'service_resource_name_example' # str | The identity of the service.

    try:
        # Gets the Service resource with the given name.
        api_response = api_instance.mesh_service_get(api_version, application_resource_name, service_resource_name)
        print("The response of MeshServicesApi->mesh_service_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshServicesApi->mesh_service_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **application_resource_name** | **str**| The identity of the application. | 
 **service_resource_name** | **str**| The identity of the service. | 

### Return type

[**ServiceResourceDescription**](ServiceResourceDescription.md)

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

# **mesh_service_list**
> PagedServiceResourceDescriptionList mesh_service_list(api_version, application_resource_name)

Lists all the service resources.

Gets the information about all services of an application resource. The information include the description and other properties of the Service.

### Example


```python
import openapi_client
from openapi_client.models.paged_service_resource_description_list import PagedServiceResourceDescriptionList
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
    api_instance = openapi_client.MeshServicesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.

    try:
        # Lists all the service resources.
        api_response = api_instance.mesh_service_list(api_version, application_resource_name)
        print("The response of MeshServicesApi->mesh_service_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshServicesApi->mesh_service_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **application_resource_name** | **str**| The identity of the application. | 

### Return type

[**PagedServiceResourceDescriptionList**](PagedServiceResourceDescriptionList.md)

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


# openapi_client.MeshServiceReplicasApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mesh_service_replica_get**](MeshServiceReplicasApi.md#mesh_service_replica_get) | **GET** /Resources/Applications/{applicationResourceName}/Services/{serviceResourceName}/Replicas/{replicaName} | Gets the given replica of the service of an application.
[**mesh_service_replica_list**](MeshServiceReplicasApi.md#mesh_service_replica_list) | **GET** /Resources/Applications/{applicationResourceName}/Services/{serviceResourceName}/Replicas | Lists all the replicas of a service.


# **mesh_service_replica_get**
> ServiceReplicaDescription mesh_service_replica_get(api_version, application_resource_name, service_resource_name, replica_name)

Gets the given replica of the service of an application.

Gets the information about the service replica with the given name. The information include the description and other properties of the service replica.

### Example


```python
import openapi_client
from openapi_client.models.service_replica_description import ServiceReplicaDescription
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
    api_instance = openapi_client.MeshServiceReplicasApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.
    service_resource_name = 'service_resource_name_example' # str | The identity of the service.
    replica_name = 'replica_name_example' # str | Service Fabric replica name.

    try:
        # Gets the given replica of the service of an application.
        api_response = api_instance.mesh_service_replica_get(api_version, application_resource_name, service_resource_name, replica_name)
        print("The response of MeshServiceReplicasApi->mesh_service_replica_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshServiceReplicasApi->mesh_service_replica_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **application_resource_name** | **str**| The identity of the application. | 
 **service_resource_name** | **str**| The identity of the service. | 
 **replica_name** | **str**| Service Fabric replica name. | 

### Return type

[**ServiceReplicaDescription**](ServiceReplicaDescription.md)

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

# **mesh_service_replica_list**
> PagedServiceReplicaDescriptionList mesh_service_replica_list(api_version, application_resource_name, service_resource_name)

Lists all the replicas of a service.

Gets the information about all replicas of a service. The information include the description and other properties of the service replica.

### Example


```python
import openapi_client
from openapi_client.models.paged_service_replica_description_list import PagedServiceReplicaDescriptionList
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
    api_instance = openapi_client.MeshServiceReplicasApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.
    service_resource_name = 'service_resource_name_example' # str | The identity of the service.

    try:
        # Lists all the replicas of a service.
        api_response = api_instance.mesh_service_replica_list(api_version, application_resource_name, service_resource_name)
        print("The response of MeshServiceReplicasApi->mesh_service_replica_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshServiceReplicasApi->mesh_service_replica_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **application_resource_name** | **str**| The identity of the application. | 
 **service_resource_name** | **str**| The identity of the service. | 

### Return type

[**PagedServiceReplicaDescriptionList**](PagedServiceReplicaDescriptionList.md)

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


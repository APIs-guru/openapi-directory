# openapi_client.MeshCodePackagesApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mesh_code_package_get_container_logs**](MeshCodePackagesApi.md#mesh_code_package_get_container_logs) | **GET** /Resources/Applications/{applicationResourceName}/Services/{serviceResourceName}/Replicas/{replicaName}/CodePackages/{codePackageName}/Logs | Gets the logs from the container.


# **mesh_code_package_get_container_logs**
> ContainerLogs mesh_code_package_get_container_logs(api_version, application_resource_name, service_resource_name, replica_name, code_package_name, tail=tail)

Gets the logs from the container.

Gets the logs for the container of the specified code package of the service replica.

### Example


```python
import openapi_client
from openapi_client.models.container_logs import ContainerLogs
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
    api_instance = openapi_client.MeshCodePackagesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.
    service_resource_name = 'service_resource_name_example' # str | The identity of the service.
    replica_name = 'replica_name_example' # str | Service Fabric replica name.
    code_package_name = 'code_package_name_example' # str | The name of code package of the service.
    tail = 'tail_example' # str | Number of lines to show from the end of the logs. Default is 100. 'all' to show the complete logs. (optional)

    try:
        # Gets the logs from the container.
        api_response = api_instance.mesh_code_package_get_container_logs(api_version, application_resource_name, service_resource_name, replica_name, code_package_name, tail=tail)
        print("The response of MeshCodePackagesApi->mesh_code_package_get_container_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshCodePackagesApi->mesh_code_package_get_container_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **application_resource_name** | **str**| The identity of the application. | 
 **service_resource_name** | **str**| The identity of the service. | 
 **replica_name** | **str**| Service Fabric replica name. | 
 **code_package_name** | **str**| The name of code package of the service. | 
 **tail** | **str**| Number of lines to show from the end of the logs. Default is 100. &#39;all&#39; to show the complete logs. | [optional] 

### Return type

[**ContainerLogs**](ContainerLogs.md)

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


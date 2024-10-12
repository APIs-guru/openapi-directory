# openapi_client.CodePackagesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**code_package_get_container_logs**](CodePackagesApi.md#code_package_get_container_logs) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/applications/{applicationResourceName}/services/{serviceResourceName}/replicas/{replicaName}/codePackages/{codePackageName}/logs | Gets the logs from the container.


# **code_package_get_container_logs**
> ContainerLogs code_package_get_container_logs(subscription_id, resource_group_name, api_version, application_resource_name, service_resource_name, replica_name, code_package_name, tail=tail)

Gets the logs from the container.

Gets the logs for the container of the specified code package of the service replica.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container_logs import ContainerLogs
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
    api_instance = openapi_client.CodePackagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.
    service_resource_name = 'service_resource_name_example' # str | The identity of the service.
    replica_name = 'replica_name_example' # str | Service Fabric replica name.
    code_package_name = 'code_package_name_example' # str | The name of code package of the service.
    tail = 56 # int | Number of lines to show from the end of the logs. Default is 100. (optional)

    try:
        # Gets the logs from the container.
        api_response = api_instance.code_package_get_container_logs(subscription_id, resource_group_name, api_version, application_resource_name, service_resource_name, replica_name, code_package_name, tail=tail)
        print("The response of CodePackagesApi->code_package_get_container_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodePackagesApi->code_package_get_container_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **resource_group_name** | **str**| Azure resource group name | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **application_resource_name** | **str**| The identity of the application. | 
 **service_resource_name** | **str**| The identity of the service. | 
 **replica_name** | **str**| Service Fabric replica name. | 
 **code_package_name** | **str**| The name of code package of the service. | 
 **tail** | **int**| Number of lines to show from the end of the logs. Default is 100. | [optional] 

### Return type

[**ContainerLogs**](ContainerLogs.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


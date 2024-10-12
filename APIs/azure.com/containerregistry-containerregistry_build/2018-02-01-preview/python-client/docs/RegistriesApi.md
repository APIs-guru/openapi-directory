# openapi_client.RegistriesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registries_get_build_source_upload_url**](RegistriesApi.md#registries_get_build_source_upload_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/getBuildSourceUploadUrl | 
[**registries_queue_build**](RegistriesApi.md#registries_queue_build) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/queueBuild | 


# **registries_get_build_source_upload_url**
> SourceUploadDefinition registries_get_build_source_upload_url(subscription_id, resource_group_name, registry_name, api_version)



Get the upload location for the user to be able to upload the source.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.source_upload_definition import SourceUploadDefinition
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
    api_instance = openapi_client.RegistriesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.registries_get_build_source_upload_url(subscription_id, resource_group_name, registry_name, api_version)
        print("The response of RegistriesApi->registries_get_build_source_upload_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistriesApi->registries_get_build_source_upload_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**SourceUploadDefinition**](SourceUploadDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed. If the registry/build doesn&#39;t exist, 404 (Not found) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registries_queue_build**
> Build registries_queue_build(subscription_id, resource_group_name, registry_name, api_version, build_request)



Creates a new build based on the request parameters and add it to the build queue.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build import Build
from openapi_client.models.queue_build_request import QueueBuildRequest
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
    api_instance = openapi_client.RegistriesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_request = openapi_client.QueueBuildRequest() # QueueBuildRequest | The parameters of a build that needs to queued.

    try:
        api_response = api_instance.registries_queue_build(subscription_id, resource_group_name, registry_name, api_version, build_request)
        print("The response of RegistriesApi->registries_queue_build:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistriesApi->registries_queue_build: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_request** | [**QueueBuildRequest**](QueueBuildRequest.md)| The parameters of a build that needs to queued. | 

### Return type

[**Build**](Build.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**202** | The request was successfully accepted; the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. If the registry/build doesn&#39;t exist, 404 (Not found) is returned. If any of the input parameters is wrong, 400(Bad Request) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.BuildsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**builds_cancel**](BuildsApi.md#builds_cancel) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/builds/{buildId}/cancel | 
[**builds_get**](BuildsApi.md#builds_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/builds/{buildId} | 
[**builds_get_log_link**](BuildsApi.md#builds_get_log_link) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/builds/{buildId}/getLogLink | 
[**builds_list**](BuildsApi.md#builds_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/builds | 
[**builds_update**](BuildsApi.md#builds_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/builds/{buildId} | 


# **builds_cancel**
> builds_cancel(subscription_id, resource_group_name, registry_name, api_version, build_id)



Cancel an existing build.

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
    api_instance = openapi_client.BuildsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_id = 'build_id_example' # str | The build ID.

    try:
        api_instance.builds_cancel(subscription_id, resource_group_name, registry_name, api_version, build_id)
    except Exception as e:
        print("Exception when calling BuildsApi->builds_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_id** | **str**| The build ID. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**202** | The request was successfully accepted; the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. If the registry/build doesn&#39;t exist, 404 (Not found) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_get**
> Build builds_get(subscription_id, resource_group_name, registry_name, api_version, build_id)



Gets the detailed information for a given build.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build import Build
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
    api_instance = openapi_client.BuildsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_id = 'build_id_example' # str | The build ID.

    try:
        api_response = api_instance.builds_get(subscription_id, resource_group_name, registry_name, api_version, build_id)
        print("The response of BuildsApi->builds_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildsApi->builds_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_id** | **str**| The build ID. | 

### Return type

[**Build**](Build.md)

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

# **builds_get_log_link**
> BuildGetLogResult builds_get_log_link(subscription_id, resource_group_name, registry_name, api_version, build_id)



Gets a link to download the build logs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build_get_log_result import BuildGetLogResult
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
    api_instance = openapi_client.BuildsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_id = 'build_id_example' # str | The build ID.

    try:
        api_response = api_instance.builds_get_log_link(subscription_id, resource_group_name, registry_name, api_version, build_id)
        print("The response of BuildsApi->builds_get_log_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildsApi->builds_get_log_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_id** | **str**| The build ID. | 

### Return type

[**BuildGetLogResult**](BuildGetLogResult.md)

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

# **builds_list**
> BuildListResult builds_list(subscription_id, resource_group_name, registry_name, api_version, filter=filter, top=top, skip_token=skip_token)



Gets all the builds for a registry.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build_list_result import BuildListResult
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
    api_instance = openapi_client.BuildsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    filter = 'filter_example' # str | The builds filter to apply on the operation. (optional)
    top = 56 # int | $top is supported for get list of builds, which limits the maximum number of builds to return. (optional)
    skip_token = 'skip_token_example' # str | $skipToken is supported on get list of builds, which provides the next page in the list of builds. (optional)

    try:
        api_response = api_instance.builds_list(subscription_id, resource_group_name, registry_name, api_version, filter=filter, top=top, skip_token=skip_token)
        print("The response of BuildsApi->builds_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildsApi->builds_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **filter** | **str**| The builds filter to apply on the operation. | [optional] 
 **top** | **int**| $top is supported for get list of builds, which limits the maximum number of builds to return. | [optional] 
 **skip_token** | **str**| $skipToken is supported on get list of builds, which provides the next page in the list of builds. | [optional] 

### Return type

[**BuildListResult**](BuildListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_update**
> Build builds_update(subscription_id, resource_group_name, registry_name, api_version, build_id, build_update_parameters)



Patch the build properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build import Build
from openapi_client.models.build_update_parameters import BuildUpdateParameters
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
    api_instance = openapi_client.BuildsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_id = 'build_id_example' # str | The build ID.
    build_update_parameters = openapi_client.BuildUpdateParameters() # BuildUpdateParameters | The build update properties.

    try:
        api_response = api_instance.builds_update(subscription_id, resource_group_name, registry_name, api_version, build_id, build_update_parameters)
        print("The response of BuildsApi->builds_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildsApi->builds_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_id** | **str**| The build ID. | 
 **build_update_parameters** | [**BuildUpdateParameters**](BuildUpdateParameters.md)| The build update properties. | 

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
**201** | The request was successfully accepted; the operation will complete asynchronously. The provisioning state of the resource should indicate the current state of the resource. |  -  |
**0** | Error response describing why the operation failed. If the registry/build doesn&#39;t exist, 404 (Not found) is returned. If any of the input parameters is wrong, 400(Bad Request) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


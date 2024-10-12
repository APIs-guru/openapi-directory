# openapi_client.BuildTasksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**build_tasks_create**](BuildTasksApi.md#build_tasks_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks/{buildTaskName} | 
[**build_tasks_delete**](BuildTasksApi.md#build_tasks_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks/{buildTaskName} | 
[**build_tasks_get**](BuildTasksApi.md#build_tasks_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks/{buildTaskName} | 
[**build_tasks_list**](BuildTasksApi.md#build_tasks_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks | 
[**build_tasks_list_source_repository_properties**](BuildTasksApi.md#build_tasks_list_source_repository_properties) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks/{buildTaskName}/listSourceRepositoryProperties | 
[**build_tasks_update**](BuildTasksApi.md#build_tasks_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks/{buildTaskName} | 


# **build_tasks_create**
> BuildTask build_tasks_create(subscription_id, resource_group_name, registry_name, api_version, build_task_name, build_task_create_parameters)



Creates a build task for a container registry with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build_task import BuildTask
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
    api_instance = openapi_client.BuildTasksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_task_name = 'build_task_name_example' # str | The name of the container registry build task.
    build_task_create_parameters = openapi_client.BuildTask() # BuildTask | The parameters for creating a build task.

    try:
        api_response = api_instance.build_tasks_create(subscription_id, resource_group_name, registry_name, api_version, build_task_name, build_task_create_parameters)
        print("The response of BuildTasksApi->build_tasks_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildTasksApi->build_tasks_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_task_name** | **str**| The name of the container registry build task. | 
 **build_task_create_parameters** | [**BuildTask**](BuildTask.md)| The parameters for creating a build task. | 

### Return type

[**BuildTask**](BuildTask.md)

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
**0** | Error response describing why the operation failed. If the registry doesn&#39;t exist, 404 (Not found) is returned. If any of the input parameters is wrong, 400(Bad Request) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build_tasks_delete**
> build_tasks_delete(subscription_id, resource_group_name, registry_name, api_version, build_task_name)



Deletes a specified build task.

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
    api_instance = openapi_client.BuildTasksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_task_name = 'build_task_name_example' # str | The name of the container registry build task.

    try:
        api_instance.build_tasks_delete(subscription_id, resource_group_name, registry_name, api_version, build_task_name)
    except Exception as e:
        print("Exception when calling BuildTasksApi->build_tasks_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_task_name** | **str**| The name of the container registry build task. | 

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
**204** | No Content - the specified resource was not found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build_tasks_get**
> BuildTask build_tasks_get(subscription_id, resource_group_name, registry_name, api_version, build_task_name)



Get the properties of a specified build task.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build_task import BuildTask
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
    api_instance = openapi_client.BuildTasksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_task_name = 'build_task_name_example' # str | The name of the container registry build task.

    try:
        api_response = api_instance.build_tasks_get(subscription_id, resource_group_name, registry_name, api_version, build_task_name)
        print("The response of BuildTasksApi->build_tasks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildTasksApi->build_tasks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_task_name** | **str**| The name of the container registry build task. | 

### Return type

[**BuildTask**](BuildTask.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed. If the registry doesn&#39;t exist, 404 (Not found) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build_tasks_list**
> BuildTaskListResult build_tasks_list(subscription_id, resource_group_name, registry_name, api_version, filter=filter, skip_token=skip_token)



Lists all the build tasks for a specified container registry.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build_task_list_result import BuildTaskListResult
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
    api_instance = openapi_client.BuildTasksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    filter = 'filter_example' # str | The build task filter to apply on the operation. (optional)
    skip_token = 'skip_token_example' # str | $skipToken is supported on get list of build tasks, which provides the next page in the list of tasks. (optional)

    try:
        api_response = api_instance.build_tasks_list(subscription_id, resource_group_name, registry_name, api_version, filter=filter, skip_token=skip_token)
        print("The response of BuildTasksApi->build_tasks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildTasksApi->build_tasks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **filter** | **str**| The build task filter to apply on the operation. | [optional] 
 **skip_token** | **str**| $skipToken is supported on get list of build tasks, which provides the next page in the list of tasks. | [optional] 

### Return type

[**BuildTaskListResult**](BuildTaskListResult.md)

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

# **build_tasks_list_source_repository_properties**
> SourceRepositoryProperties build_tasks_list_source_repository_properties(subscription_id, resource_group_name, registry_name, api_version, build_task_name)



Get the source control properties for a build task.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.source_repository_properties import SourceRepositoryProperties
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
    api_instance = openapi_client.BuildTasksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_task_name = 'build_task_name_example' # str | The name of the container registry build task.

    try:
        api_response = api_instance.build_tasks_list_source_repository_properties(subscription_id, resource_group_name, registry_name, api_version, build_task_name)
        print("The response of BuildTasksApi->build_tasks_list_source_repository_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildTasksApi->build_tasks_list_source_repository_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_task_name** | **str**| The name of the container registry build task. | 

### Return type

[**SourceRepositoryProperties**](SourceRepositoryProperties.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed. If the registry doesn&#39;t exist, 404 (Not found) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build_tasks_update**
> BuildTask build_tasks_update(subscription_id, resource_group_name, registry_name, api_version, build_task_name, build_task_update_parameters)



Updates a build task with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build_task import BuildTask
from openapi_client.models.build_task_update_parameters import BuildTaskUpdateParameters
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
    api_instance = openapi_client.BuildTasksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_task_name = 'build_task_name_example' # str | The name of the container registry build task.
    build_task_update_parameters = openapi_client.BuildTaskUpdateParameters() # BuildTaskUpdateParameters | The parameters for updating a build task.

    try:
        api_response = api_instance.build_tasks_update(subscription_id, resource_group_name, registry_name, api_version, build_task_name, build_task_update_parameters)
        print("The response of BuildTasksApi->build_tasks_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildTasksApi->build_tasks_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_task_name** | **str**| The name of the container registry build task. | 
 **build_task_update_parameters** | [**BuildTaskUpdateParameters**](BuildTaskUpdateParameters.md)| The parameters for updating a build task. | 

### Return type

[**BuildTask**](BuildTask.md)

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
**0** | Error response describing why the operation failed. If the registry doesn&#39;t exist, 404 (Not found) is returned. If any of the input parameters is wrong, 400(Bad Request) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


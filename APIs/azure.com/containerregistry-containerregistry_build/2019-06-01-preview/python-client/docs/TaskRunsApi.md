# openapi_client.TaskRunsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**task_runs_create**](TaskRunsApi.md#task_runs_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName} | 
[**task_runs_delete**](TaskRunsApi.md#task_runs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName} | 
[**task_runs_get**](TaskRunsApi.md#task_runs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName} | 
[**task_runs_list**](TaskRunsApi.md#task_runs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns | 
[**task_runs_update**](TaskRunsApi.md#task_runs_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName} | 


# **task_runs_create**
> TaskRun task_runs_create(subscription_id, resource_group_name, registry_name, api_version, task_run_name, task_run)



Creates a task run for a container registry with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.task_run import TaskRun
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
    api_instance = openapi_client.TaskRunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    task_run_name = 'task_run_name_example' # str | The name of task run.
    task_run = openapi_client.TaskRun() # TaskRun | The parameters of a run that needs to scheduled.

    try:
        api_response = api_instance.task_runs_create(subscription_id, resource_group_name, registry_name, api_version, task_run_name, task_run)
        print("The response of TaskRunsApi->task_runs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskRunsApi->task_runs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **task_run_name** | **str**| The name of task run. | 
 **task_run** | [**TaskRun**](TaskRun.md)| The parameters of a run that needs to scheduled. | 

### Return type

[**TaskRun**](TaskRun.md)

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

# **task_runs_delete**
> task_runs_delete(subscription_id, resource_group_name, registry_name, api_version, task_run_name)



Deletes a specified task run resource.

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
    api_instance = openapi_client.TaskRunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    task_run_name = 'task_run_name_example' # str | The task run name.

    try:
        api_instance.task_runs_delete(subscription_id, resource_group_name, registry_name, api_version, task_run_name)
    except Exception as e:
        print("Exception when calling TaskRunsApi->task_runs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **task_run_name** | **str**| The task run name. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**202** | The request was successfully accepted; the operation will complete asynchronously. |  -  |
**204** | No Content - the specified resource was not found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **task_runs_get**
> TaskRun task_runs_get(subscription_id, resource_group_name, registry_name, api_version, task_run_name)



Gets the detailed information for a given task run.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.task_run import TaskRun
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
    api_instance = openapi_client.TaskRunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    task_run_name = 'task_run_name_example' # str | The run request name.

    try:
        api_response = api_instance.task_runs_get(subscription_id, resource_group_name, registry_name, api_version, task_run_name)
        print("The response of TaskRunsApi->task_runs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskRunsApi->task_runs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **task_run_name** | **str**| The run request name. | 

### Return type

[**TaskRun**](TaskRun.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed. If the registry/run doesn&#39;t exist, 404 (Not found) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **task_runs_list**
> TaskRunListResult task_runs_list(subscription_id, resource_group_name, registry_name, api_version)



Lists all the task runs for a specified container registry.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.task_run_list_result import TaskRunListResult
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
    api_instance = openapi_client.TaskRunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.task_runs_list(subscription_id, resource_group_name, registry_name, api_version)
        print("The response of TaskRunsApi->task_runs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskRunsApi->task_runs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**TaskRunListResult**](TaskRunListResult.md)

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

# **task_runs_update**
> TaskRun task_runs_update(subscription_id, resource_group_name, registry_name, api_version, task_run_name, update_parameters)



Updates a task run with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.task_run import TaskRun
from openapi_client.models.task_run_update_parameters import TaskRunUpdateParameters
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
    api_instance = openapi_client.TaskRunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    task_run_name = 'task_run_name_example' # str | The task run name.
    update_parameters = openapi_client.TaskRunUpdateParameters() # TaskRunUpdateParameters | The parameters for updating a task run.

    try:
        api_response = api_instance.task_runs_update(subscription_id, resource_group_name, registry_name, api_version, task_run_name, update_parameters)
        print("The response of TaskRunsApi->task_runs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskRunsApi->task_runs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **task_run_name** | **str**| The task run name. | 
 **update_parameters** | [**TaskRunUpdateParameters**](TaskRunUpdateParameters.md)| The parameters for updating a task run. | 

### Return type

[**TaskRun**](TaskRun.md)

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


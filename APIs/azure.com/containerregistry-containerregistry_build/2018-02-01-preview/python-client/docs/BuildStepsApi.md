# openapi_client.BuildStepsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**build_steps_create**](BuildStepsApi.md#build_steps_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks/{buildTaskName}/steps/{stepName} | 
[**build_steps_delete**](BuildStepsApi.md#build_steps_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks/{buildTaskName}/steps/{stepName} | 
[**build_steps_get**](BuildStepsApi.md#build_steps_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks/{buildTaskName}/steps/{stepName} | 
[**build_steps_list**](BuildStepsApi.md#build_steps_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks/{buildTaskName}/steps | 
[**build_steps_list_build_arguments**](BuildStepsApi.md#build_steps_list_build_arguments) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks/{buildTaskName}/steps/{stepName}/listBuildArguments | 
[**build_steps_update**](BuildStepsApi.md#build_steps_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/buildTasks/{buildTaskName}/steps/{stepName} | 


# **build_steps_create**
> BuildStep build_steps_create(subscription_id, resource_group_name, registry_name, api_version, build_task_name, step_name, build_step_create_parameters)



Creates a build step for a build task.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build_step import BuildStep
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
    api_instance = openapi_client.BuildStepsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_task_name = 'build_task_name_example' # str | The name of the container registry build task.
    step_name = 'step_name_example' # str | The name of a build step for a container registry build task.
    build_step_create_parameters = openapi_client.BuildStep() # BuildStep | The parameters for creating a build step.

    try:
        api_response = api_instance.build_steps_create(subscription_id, resource_group_name, registry_name, api_version, build_task_name, step_name, build_step_create_parameters)
        print("The response of BuildStepsApi->build_steps_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildStepsApi->build_steps_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_task_name** | **str**| The name of the container registry build task. | 
 **step_name** | **str**| The name of a build step for a container registry build task. | 
 **build_step_create_parameters** | [**BuildStep**](BuildStep.md)| The parameters for creating a build step. | 

### Return type

[**BuildStep**](BuildStep.md)

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
**0** | Error response describing why the operation failed. If the registry doesn&#39;t exist, 404 (Not found) is returned.If any of the input parameters is wrong, 400(Bad Request) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build_steps_delete**
> build_steps_delete(subscription_id, resource_group_name, registry_name, api_version, build_task_name, step_name)



Deletes a build step from the build task.

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
    api_instance = openapi_client.BuildStepsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_task_name = 'build_task_name_example' # str | The name of the container registry build task.
    step_name = 'step_name_example' # str | The name of a build step for a container registry build task.

    try:
        api_instance.build_steps_delete(subscription_id, resource_group_name, registry_name, api_version, build_task_name, step_name)
    except Exception as e:
        print("Exception when calling BuildStepsApi->build_steps_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_task_name** | **str**| The name of the container registry build task. | 
 **step_name** | **str**| The name of a build step for a container registry build task. | 

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
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build_steps_get**
> BuildStep build_steps_get(subscription_id, resource_group_name, registry_name, api_version, build_task_name, step_name)



Gets the build step for a build task.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build_step import BuildStep
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
    api_instance = openapi_client.BuildStepsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_task_name = 'build_task_name_example' # str | The name of the container registry build task.
    step_name = 'step_name_example' # str | The name of a build step for a container registry build task.

    try:
        api_response = api_instance.build_steps_get(subscription_id, resource_group_name, registry_name, api_version, build_task_name, step_name)
        print("The response of BuildStepsApi->build_steps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildStepsApi->build_steps_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_task_name** | **str**| The name of the container registry build task. | 
 **step_name** | **str**| The name of a build step for a container registry build task. | 

### Return type

[**BuildStep**](BuildStep.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed. If the registry/step doesn&#39;t exist, 404 (Not found) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build_steps_list**
> BuildStepList build_steps_list(subscription_id, resource_group_name, registry_name, api_version, build_task_name)



List all the build steps for a given build task.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build_step_list import BuildStepList
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
    api_instance = openapi_client.BuildStepsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_task_name = 'build_task_name_example' # str | The name of the container registry build task.

    try:
        api_response = api_instance.build_steps_list(subscription_id, resource_group_name, registry_name, api_version, build_task_name)
        print("The response of BuildStepsApi->build_steps_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildStepsApi->build_steps_list: %s\n" % e)
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

[**BuildStepList**](BuildStepList.md)

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

# **build_steps_list_build_arguments**
> BuildArgumentList build_steps_list_build_arguments(subscription_id, resource_group_name, registry_name, api_version, build_task_name, step_name)



List the build arguments for a step including the secret arguments.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build_argument_list import BuildArgumentList
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
    api_instance = openapi_client.BuildStepsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_task_name = 'build_task_name_example' # str | The name of the container registry build task.
    step_name = 'step_name_example' # str | The name of a build step for a container registry build task.

    try:
        api_response = api_instance.build_steps_list_build_arguments(subscription_id, resource_group_name, registry_name, api_version, build_task_name, step_name)
        print("The response of BuildStepsApi->build_steps_list_build_arguments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildStepsApi->build_steps_list_build_arguments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_task_name** | **str**| The name of the container registry build task. | 
 **step_name** | **str**| The name of a build step for a container registry build task. | 

### Return type

[**BuildArgumentList**](BuildArgumentList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed. If the registry/step doesn&#39;t exist, 404 (Not found) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build_steps_update**
> BuildStep build_steps_update(subscription_id, resource_group_name, registry_name, api_version, build_task_name, step_name, build_step_update_parameters)



Updates a build step in a build task.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.build_step import BuildStep
from openapi_client.models.build_step_update_parameters import BuildStepUpdateParameters
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
    api_instance = openapi_client.BuildStepsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    build_task_name = 'build_task_name_example' # str | The name of the container registry build task.
    step_name = 'step_name_example' # str | The name of a build step for a container registry build task.
    build_step_update_parameters = openapi_client.BuildStepUpdateParameters() # BuildStepUpdateParameters | The parameters for updating a build step.

    try:
        api_response = api_instance.build_steps_update(subscription_id, resource_group_name, registry_name, api_version, build_task_name, step_name, build_step_update_parameters)
        print("The response of BuildStepsApi->build_steps_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildStepsApi->build_steps_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **build_task_name** | **str**| The name of the container registry build task. | 
 **step_name** | **str**| The name of a build step for a container registry build task. | 
 **build_step_update_parameters** | [**BuildStepUpdateParameters**](BuildStepUpdateParameters.md)| The parameters for updating a build step. | 

### Return type

[**BuildStep**](BuildStep.md)

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
**0** | Error response describing why the operation failed. If the registry/step doesn&#39;t exist, 404 (Not found) is returned.If any of the input parameters is wrong, 400(Bad Request) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.DELETEApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projects_delete_1**](DELETEApi.md#projects_delete_1) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName} | Delete project
[**services_delete_1**](DELETEApi.md#services_delete_1) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName} | Delete DMS Service Instance
[**tasks_delete_1**](DELETEApi.md#tasks_delete_1) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName} | Delete task


# **projects_delete_1**
> projects_delete_1(subscription_id, group_name, service_name, project_name, api_version, delete_running_tasks=delete_running_tasks)

Delete project

The project resource is a nested resource representing a stored migration project. The DELETE method deletes a project.

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
    api_instance = openapi_client.DELETEApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    api_version = 'api_version_example' # str | Version of the API
    delete_running_tasks = True # bool | Delete the resource even if it contains running tasks (optional)

    try:
        # Delete project
        api_instance.projects_delete_1(subscription_id, group_name, service_name, project_name, api_version, delete_running_tasks=delete_running_tasks)
    except Exception as e:
        print("Exception when calling DELETEApi->projects_delete_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **project_name** | **str**| Name of the project | 
 **api_version** | **str**| Version of the API | 
 **delete_running_tasks** | **bool**| Delete the resource even if it contains running tasks | [optional] 

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
**200** | Project resource deleted |  -  |
**204** | Not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_delete_1**
> services_delete_1(subscription_id, group_name, service_name, api_version, delete_running_tasks=delete_running_tasks)

Delete DMS Service Instance

The services resource is the top-level resource that represents the Data Migration Service. The DELETE method deletes a service. Any running tasks will be canceled.

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
    api_instance = openapi_client.DELETEApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API
    delete_running_tasks = True # bool | Delete the resource even if it contains running tasks (optional)

    try:
        # Delete DMS Service Instance
        api_instance.services_delete_1(subscription_id, group_name, service_name, api_version, delete_running_tasks=delete_running_tasks)
    except Exception as e:
        print("Exception when calling DELETEApi->services_delete_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 
 **delete_running_tasks** | **bool**| Delete the resource even if it contains running tasks | [optional] 

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
**200** | Service resource deleted |  -  |
**202** | Deletion accepted |  -  |
**204** | Service not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_delete_1**
> tasks_delete_1(subscription_id, group_name, service_name, project_name, task_name, api_version, delete_running_tasks=delete_running_tasks)

Delete task

The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The DELETE method deletes a task, canceling it first if it's running.

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
    api_instance = openapi_client.DELETEApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    task_name = 'task_name_example' # str | Name of the Task
    api_version = 'api_version_example' # str | Version of the API
    delete_running_tasks = True # bool | Delete the resource even if it contains running tasks (optional)

    try:
        # Delete task
        api_instance.tasks_delete_1(subscription_id, group_name, service_name, project_name, task_name, api_version, delete_running_tasks=delete_running_tasks)
    except Exception as e:
        print("Exception when calling DELETEApi->tasks_delete_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **project_name** | **str**| Name of the project | 
 **task_name** | **str**| Name of the Task | 
 **api_version** | **str**| Version of the API | 
 **delete_running_tasks** | **bool**| Delete the resource even if it contains running tasks | [optional] 

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
**200** | Task resource deleted |  -  |
**204** | Not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


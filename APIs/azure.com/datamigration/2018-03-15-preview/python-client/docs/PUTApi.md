# openapi_client.PUTApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projects_create_or_update_1**](PUTApi.md#projects_create_or_update_1) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName} | Create or update project
[**services_create_or_update_1**](PUTApi.md#services_create_or_update_1) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName} | Create or update DMS Instance
[**tasks_create_or_update_1**](PUTApi.md#tasks_create_or_update_1) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName} | Create or update task


# **projects_create_or_update_1**
> ProjectsGet200Response projects_create_or_update_1(subscription_id, group_name, service_name, project_name, api_version, parameters)

Create or update project

The project resource is a nested resource representing a stored migration project. The PUT method creates a new project or updates an existing one.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.projects_get200_response import ProjectsGet200Response
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
    api_instance = openapi_client.PUTApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    api_version = 'api_version_example' # str | Version of the API
    parameters = openapi_client.ProjectsGet200Response() # ProjectsGet200Response | Information about the project

    try:
        # Create or update project
        api_response = api_instance.projects_create_or_update_1(subscription_id, group_name, service_name, project_name, api_version, parameters)
        print("The response of PUTApi->projects_create_or_update_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PUTApi->projects_create_or_update_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **project_name** | **str**| Name of the project | 
 **api_version** | **str**| Version of the API | 
 **parameters** | [**ProjectsGet200Response**](ProjectsGet200Response.md)| Information about the project | 

### Return type

[**ProjectsGet200Response**](ProjectsGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project updated |  -  |
**201** | Project created |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_create_or_update_1**
> ServicesGet200Response services_create_or_update_1(subscription_id, group_name, service_name, api_version, parameters)

Create or update DMS Instance

The services resource is the top-level resource that represents the Data Migration Service. The PUT method creates a new service or updates an existing one. When a service is updated, existing child resources (i.e. tasks) are unaffected. Services currently support a single kind, \"vm\", which refers to a VM-based service, although other kinds may be added in the future. This method can change the kind, SKU, and network of the service, but if tasks are currently running (i.e. the service is busy), this will fail with 400 Bad Request (\"ServiceIsBusy\"). The provider will reply when successful with 200 OK or 201 Created. Long-running operations use the provisioningState property.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_get200_response import ServicesGet200Response
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
    api_instance = openapi_client.PUTApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API
    parameters = openapi_client.ServicesGet200Response() # ServicesGet200Response | Information about the service

    try:
        # Create or update DMS Instance
        api_response = api_instance.services_create_or_update_1(subscription_id, group_name, service_name, api_version, parameters)
        print("The response of PUTApi->services_create_or_update_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PUTApi->services_create_or_update_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 
 **parameters** | [**ServicesGet200Response**](ServicesGet200Response.md)| Information about the service | 

### Return type

[**ServicesGet200Response**](ServicesGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Service updated |  -  |
**201** | Service created (use provisioningState) |  -  |
**202** | Update accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_create_or_update_1**
> TasksGet200Response tasks_create_or_update_1(subscription_id, group_name, service_name, project_name, task_name, api_version, parameters)

Create or update task

The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The PUT method creates a new task or updates an existing one, although since tasks have no mutable custom properties, there is little reason to update an exising one.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tasks_get200_response import TasksGet200Response
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
    api_instance = openapi_client.PUTApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    task_name = 'task_name_example' # str | Name of the Task
    api_version = 'api_version_example' # str | Version of the API
    parameters = openapi_client.TasksGet200Response() # TasksGet200Response | Information about the task

    try:
        # Create or update task
        api_response = api_instance.tasks_create_or_update_1(subscription_id, group_name, service_name, project_name, task_name, api_version, parameters)
        print("The response of PUTApi->tasks_create_or_update_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PUTApi->tasks_create_or_update_1: %s\n" % e)
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
 **parameters** | [**TasksGet200Response**](TasksGet200Response.md)| Information about the task | 

### Return type

[**TasksGet200Response**](TasksGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task updated |  -  |
**201** | Task created |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


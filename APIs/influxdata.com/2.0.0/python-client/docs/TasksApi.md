# openapi_client.TasksApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_tasks_id**](TasksApi.md#delete_tasks_id) | **DELETE** /tasks/{taskID} | Delete a task
[**delete_tasks_id_labels_id**](TasksApi.md#delete_tasks_id_labels_id) | **DELETE** /tasks/{taskID}/labels/{labelID} | Delete a label from a task
[**delete_tasks_id_members_id**](TasksApi.md#delete_tasks_id_members_id) | **DELETE** /tasks/{taskID}/members/{userID} | Remove a member from a task
[**delete_tasks_id_owners_id**](TasksApi.md#delete_tasks_id_owners_id) | **DELETE** /tasks/{taskID}/owners/{userID} | Remove an owner from a task
[**delete_tasks_id_runs_id**](TasksApi.md#delete_tasks_id_runs_id) | **DELETE** /tasks/{taskID}/runs/{runID} | Cancel a running task
[**get_tasks**](TasksApi.md#get_tasks) | **GET** /tasks | List all tasks
[**get_tasks_id**](TasksApi.md#get_tasks_id) | **GET** /tasks/{taskID} | Retrieve a task
[**get_tasks_id_labels**](TasksApi.md#get_tasks_id_labels) | **GET** /tasks/{taskID}/labels | List all labels for a task
[**get_tasks_id_logs**](TasksApi.md#get_tasks_id_logs) | **GET** /tasks/{taskID}/logs | Retrieve all logs for a task
[**get_tasks_id_members**](TasksApi.md#get_tasks_id_members) | **GET** /tasks/{taskID}/members | List all task members
[**get_tasks_id_owners**](TasksApi.md#get_tasks_id_owners) | **GET** /tasks/{taskID}/owners | List all owners of a task
[**get_tasks_id_runs**](TasksApi.md#get_tasks_id_runs) | **GET** /tasks/{taskID}/runs | List runs for a task
[**get_tasks_id_runs_id**](TasksApi.md#get_tasks_id_runs_id) | **GET** /tasks/{taskID}/runs/{runID} | Retrieve a single run for a task
[**get_tasks_id_runs_id_logs**](TasksApi.md#get_tasks_id_runs_id_logs) | **GET** /tasks/{taskID}/runs/{runID}/logs | Retrieve all logs for a run
[**patch_tasks_id**](TasksApi.md#patch_tasks_id) | **PATCH** /tasks/{taskID} | Update a task
[**post_tasks**](TasksApi.md#post_tasks) | **POST** /tasks | Create a new task
[**post_tasks_id_labels**](TasksApi.md#post_tasks_id_labels) | **POST** /tasks/{taskID}/labels | Add a label to a task
[**post_tasks_id_members**](TasksApi.md#post_tasks_id_members) | **POST** /tasks/{taskID}/members | Add a member to a task
[**post_tasks_id_owners**](TasksApi.md#post_tasks_id_owners) | **POST** /tasks/{taskID}/owners | Add an owner to a task
[**post_tasks_id_runs**](TasksApi.md#post_tasks_id_runs) | **POST** /tasks/{taskID}/runs | Manually start a task run, overriding the current schedule
[**post_tasks_id_runs_id_retry**](TasksApi.md#post_tasks_id_runs_id_retry) | **POST** /tasks/{taskID}/runs/{runID}/retry | Retry a task run


# **delete_tasks_id**
> delete_tasks_id(task_id, zap_trace_span=zap_trace_span)

Delete a task

Deletes a task and all associated records

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The ID of the task to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a task
        api_instance.delete_tasks_id(task_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling TasksApi->delete_tasks_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The ID of the task to delete. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Task deleted |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tasks_id_labels_id**
> delete_tasks_id_labels_id(task_id, label_id, zap_trace_span=zap_trace_span)

Delete a label from a task

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    label_id = 'label_id_example' # str | The label ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a label from a task
        api_instance.delete_tasks_id_labels_id(task_id, label_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling TasksApi->delete_tasks_id_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **label_id** | **str**| The label ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**404** | Task not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tasks_id_members_id**
> delete_tasks_id_members_id(user_id, task_id, zap_trace_span=zap_trace_span)

Remove a member from a task

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    user_id = 'user_id_example' # str | The ID of the member to remove.
    task_id = 'task_id_example' # str | The task ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove a member from a task
        api_instance.delete_tasks_id_members_id(user_id, task_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling TasksApi->delete_tasks_id_members_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the member to remove. | 
 **task_id** | **str**| The task ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Member removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tasks_id_owners_id**
> delete_tasks_id_owners_id(user_id, task_id, zap_trace_span=zap_trace_span)

Remove an owner from a task

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    user_id = 'user_id_example' # str | The ID of the owner to remove.
    task_id = 'task_id_example' # str | The task ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove an owner from a task
        api_instance.delete_tasks_id_owners_id(user_id, task_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling TasksApi->delete_tasks_id_owners_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the owner to remove. | 
 **task_id** | **str**| The task ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Owner removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tasks_id_runs_id**
> delete_tasks_id_runs_id(task_id, run_id, zap_trace_span=zap_trace_span)

Cancel a running task

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    run_id = 'run_id_example' # str | The run ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Cancel a running task
        api_instance.delete_tasks_id_runs_id(task_id, run_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling TasksApi->delete_tasks_id_runs_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **run_id** | **str**| The run ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tasks**
> Tasks get_tasks(zap_trace_span=zap_trace_span, name=name, after=after, user=user, org=org, org_id=org_id, status=status, limit=limit)

List all tasks

### Example


```python
import openapi_client
from openapi_client.models.tasks import Tasks
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    name = 'name_example' # str | Returns task with a specific name. (optional)
    after = 'after_example' # str | Return tasks after a specified ID. (optional)
    user = 'user_example' # str | Filter tasks to a specific user ID. (optional)
    org = 'org_example' # str | Filter tasks to a specific organization name. (optional)
    org_id = 'org_id_example' # str | Filter tasks to a specific organization ID. (optional)
    status = 'status_example' # str | Filter tasks by a status--\"inactive\" or \"active\". (optional)
    limit = 100 # int | The number of tasks to return (optional) (default to 100)

    try:
        # List all tasks
        api_response = api_instance.get_tasks(zap_trace_span=zap_trace_span, name=name, after=after, user=user, org=org, org_id=org_id, status=status, limit=limit)
        print("The response of TasksApi->get_tasks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_tasks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **name** | **str**| Returns task with a specific name. | [optional] 
 **after** | **str**| Return tasks after a specified ID. | [optional] 
 **user** | **str**| Filter tasks to a specific user ID. | [optional] 
 **org** | **str**| Filter tasks to a specific organization name. | [optional] 
 **org_id** | **str**| Filter tasks to a specific organization ID. | [optional] 
 **status** | **str**| Filter tasks by a status--\&quot;inactive\&quot; or \&quot;active\&quot;. | [optional] 
 **limit** | **int**| The number of tasks to return | [optional] [default to 100]

### Return type

[**Tasks**](Tasks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of tasks |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tasks_id**
> Task get_tasks_id(task_id, zap_trace_span=zap_trace_span)

Retrieve a task

### Example


```python
import openapi_client
from openapi_client.models.task import Task
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a task
        api_response = api_instance.get_tasks_id(task_id, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->get_tasks_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_tasks_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task details |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tasks_id_labels**
> LabelsResponse get_tasks_id_labels(task_id, zap_trace_span=zap_trace_span)

List all labels for a task

### Example


```python
import openapi_client
from openapi_client.models.labels_response import LabelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all labels for a task
        api_response = api_instance.get_tasks_id_labels(task_id, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->get_tasks_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_tasks_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelsResponse**](LabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all labels for a task |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tasks_id_logs**
> Logs get_tasks_id_logs(task_id, zap_trace_span=zap_trace_span)

Retrieve all logs for a task

### Example


```python
import openapi_client
from openapi_client.models.logs import Logs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve all logs for a task
        api_response = api_instance.get_tasks_id_logs(task_id, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->get_tasks_id_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_tasks_id_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Logs**](Logs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All logs for a task |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tasks_id_members**
> ResourceMembers get_tasks_id_members(task_id, zap_trace_span=zap_trace_span)

List all task members

### Example


```python
import openapi_client
from openapi_client.models.resource_members import ResourceMembers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all task members
        api_response = api_instance.get_tasks_id_members(task_id, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->get_tasks_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_tasks_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMembers**](ResourceMembers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of users who have member privileges for a task |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tasks_id_owners**
> ResourceOwners get_tasks_id_owners(task_id, zap_trace_span=zap_trace_span)

List all owners of a task

### Example


```python
import openapi_client
from openapi_client.models.resource_owners import ResourceOwners
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all owners of a task
        api_response = api_instance.get_tasks_id_owners(task_id, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->get_tasks_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_tasks_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwners**](ResourceOwners.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of users who have owner privileges for a task |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tasks_id_runs**
> Runs get_tasks_id_runs(task_id, zap_trace_span=zap_trace_span, after=after, limit=limit, after_time=after_time, before_time=before_time)

List runs for a task

### Example


```python
import openapi_client
from openapi_client.models.runs import Runs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The ID of the task to get runs for.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    after = 'after_example' # str | Returns runs after a specific ID. (optional)
    limit = 100 # int | The number of runs to return (optional) (default to 100)
    after_time = '2013-10-20T19:20:30+01:00' # datetime | Filter runs to those scheduled after this time, RFC3339 (optional)
    before_time = '2013-10-20T19:20:30+01:00' # datetime | Filter runs to those scheduled before this time, RFC3339 (optional)

    try:
        # List runs for a task
        api_response = api_instance.get_tasks_id_runs(task_id, zap_trace_span=zap_trace_span, after=after, limit=limit, after_time=after_time, before_time=before_time)
        print("The response of TasksApi->get_tasks_id_runs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_tasks_id_runs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The ID of the task to get runs for. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **after** | **str**| Returns runs after a specific ID. | [optional] 
 **limit** | **int**| The number of runs to return | [optional] [default to 100]
 **after_time** | **datetime**| Filter runs to those scheduled after this time, RFC3339 | [optional] 
 **before_time** | **datetime**| Filter runs to those scheduled before this time, RFC3339 | [optional] 

### Return type

[**Runs**](Runs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of task runs |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tasks_id_runs_id**
> Run get_tasks_id_runs_id(task_id, run_id, zap_trace_span=zap_trace_span)

Retrieve a single run for a task

### Example


```python
import openapi_client
from openapi_client.models.run import Run
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    run_id = 'run_id_example' # str | The run ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a single run for a task
        api_response = api_instance.get_tasks_id_runs_id(task_id, run_id, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->get_tasks_id_runs_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_tasks_id_runs_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **run_id** | **str**| The run ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Run**](Run.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The run record |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tasks_id_runs_id_logs**
> Logs get_tasks_id_runs_id_logs(task_id, run_id, zap_trace_span=zap_trace_span)

Retrieve all logs for a run

### Example


```python
import openapi_client
from openapi_client.models.logs import Logs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | ID of task to get logs for.
    run_id = 'run_id_example' # str | ID of run to get logs for.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve all logs for a run
        api_response = api_instance.get_tasks_id_runs_id_logs(task_id, run_id, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->get_tasks_id_runs_id_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_tasks_id_runs_id_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| ID of task to get logs for. | 
 **run_id** | **str**| ID of run to get logs for. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Logs**](Logs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All logs for a run |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_tasks_id**
> Task patch_tasks_id(task_id, task_update_request, zap_trace_span=zap_trace_span)

Update a task

Update a task. This will cancel all queued runs.

### Example


```python
import openapi_client
from openapi_client.models.task import Task
from openapi_client.models.task_update_request import TaskUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    task_update_request = openapi_client.TaskUpdateRequest() # TaskUpdateRequest | Task update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a task
        api_response = api_instance.patch_tasks_id(task_id, task_update_request, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->patch_tasks_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->patch_tasks_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **task_update_request** | [**TaskUpdateRequest**](TaskUpdateRequest.md)| Task update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task updated |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_tasks**
> Task post_tasks(task_create_request, zap_trace_span=zap_trace_span)

Create a new task

### Example


```python
import openapi_client
from openapi_client.models.task import Task
from openapi_client.models.task_create_request import TaskCreateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_create_request = openapi_client.TaskCreateRequest() # TaskCreateRequest | Task to create
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create a new task
        api_response = api_instance.post_tasks(task_create_request, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->post_tasks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->post_tasks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_create_request** | [**TaskCreateRequest**](TaskCreateRequest.md)| Task to create | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Task created |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_tasks_id_labels**
> LabelResponse post_tasks_id_labels(task_id, label_mapping, zap_trace_span=zap_trace_span)

Add a label to a task

### Example


```python
import openapi_client
from openapi_client.models.label_mapping import LabelMapping
from openapi_client.models.label_response import LabelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    label_mapping = openapi_client.LabelMapping() # LabelMapping | Label to add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a label to a task
        api_response = api_instance.post_tasks_id_labels(task_id, label_mapping, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->post_tasks_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->post_tasks_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **label_mapping** | [**LabelMapping**](LabelMapping.md)| Label to add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelResponse**](LabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A list of all labels for a task |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_tasks_id_members**
> ResourceMember post_tasks_id_members(task_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add a member to a task

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_member import ResourceMember
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as member
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a member to a task
        api_response = api_instance.post_tasks_id_members(task_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->post_tasks_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->post_tasks_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as member | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMember**](ResourceMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Added to task members |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_tasks_id_owners**
> ResourceOwner post_tasks_id_owners(task_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add an owner to a task

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_owner import ResourceOwner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as owner
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add an owner to a task
        api_response = api_instance.post_tasks_id_owners(task_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of TasksApi->post_tasks_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->post_tasks_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as owner | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwner**](ResourceOwner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Added to task owners |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_tasks_id_runs**
> Run post_tasks_id_runs(task_id, zap_trace_span=zap_trace_span, run_manually=run_manually)

Manually start a task run, overriding the current schedule

### Example


```python
import openapi_client
from openapi_client.models.run import Run
from openapi_client.models.run_manually import RunManually
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | 
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    run_manually = openapi_client.RunManually() # RunManually |  (optional)

    try:
        # Manually start a task run, overriding the current schedule
        api_response = api_instance.post_tasks_id_runs(task_id, zap_trace_span=zap_trace_span, run_manually=run_manually)
        print("The response of TasksApi->post_tasks_id_runs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->post_tasks_id_runs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**|  | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **run_manually** | [**RunManually**](RunManually.md)|  | [optional] 

### Return type

[**Run**](Run.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Run scheduled to start |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_tasks_id_runs_id_retry**
> Run post_tasks_id_runs_id_retry(task_id, run_id, zap_trace_span=zap_trace_span, body=body)

Retry a task run

### Example


```python
import openapi_client
from openapi_client.models.run import Run
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TasksApi(api_client)
    task_id = 'task_id_example' # str | The task ID.
    run_id = 'run_id_example' # str | The run ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    body = None # object |  (optional)

    try:
        # Retry a task run
        api_response = api_instance.post_tasks_id_runs_id_retry(task_id, run_id, zap_trace_span=zap_trace_span, body=body)
        print("The response of TasksApi->post_tasks_id_runs_id_retry:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->post_tasks_id_runs_id_retry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID. | 
 **run_id** | **str**| The run ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **body** | **object**|  | [optional] 

### Return type

[**Run**](Run.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Run that has been queued |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


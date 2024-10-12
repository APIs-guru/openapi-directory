# openapi_client.TaskInstanceApi

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_extra_links**](TaskInstanceApi.md#get_extra_links) | **GET** /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/links | List extra links
[**get_log**](TaskInstanceApi.md#get_log) | **GET** /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/logs/{task_try_number} | Get logs
[**get_mapped_task_instance**](TaskInstanceApi.md#get_mapped_task_instance) | **GET** /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index} | Get a mapped task instance
[**get_mapped_task_instances**](TaskInstanceApi.md#get_mapped_task_instances) | **GET** /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/listMapped | List mapped task instances
[**get_task_instance**](TaskInstanceApi.md#get_task_instance) | **GET** /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id} | Get a task instance
[**get_task_instances**](TaskInstanceApi.md#get_task_instances) | **GET** /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances | List task instances
[**get_task_instances_batch**](TaskInstanceApi.md#get_task_instances_batch) | **POST** /dags/~/dagRuns/~/taskInstances/list | List task instances (batch)
[**patch_mapped_task_instance**](TaskInstanceApi.md#patch_mapped_task_instance) | **PATCH** /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index} | Updates the state of a mapped task instance
[**patch_task_instance**](TaskInstanceApi.md#patch_task_instance) | **PATCH** /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id} | Updates the state of a task instance
[**set_mapped_task_instance_note**](TaskInstanceApi.md#set_mapped_task_instance_note) | **PATCH** /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/setNote | Update the TaskInstance note.
[**set_task_instance_note**](TaskInstanceApi.md#set_task_instance_note) | **PATCH** /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/setNote | Update the TaskInstance note.


# **get_extra_links**
> ExtraLinkCollection get_extra_links(dag_id, dag_run_id, task_id)

List extra links

List extra links for task instance. 

### Example


```python
import openapi_client
from openapi_client.models.extra_link_collection import ExtraLinkCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaskInstanceApi(api_client)
    dag_id = 'dag_id_example' # str | The DAG ID.
    dag_run_id = 'dag_run_id_example' # str | The DAG run ID.
    task_id = 'task_id_example' # str | The task ID.

    try:
        # List extra links
        api_response = api_instance.get_extra_links(dag_id, dag_run_id, task_id)
        print("The response of TaskInstanceApi->get_extra_links:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskInstanceApi->get_extra_links: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| The DAG ID. | 
 **dag_run_id** | **str**| The DAG run ID. | 
 **task_id** | **str**| The task ID. | 

### Return type

[**ExtraLinkCollection**](ExtraLinkCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_log**
> GetLog200Response get_log(dag_id, dag_run_id, task_id, task_try_number, full_content=full_content, map_index=map_index, token=token)

Get logs

Get logs for a specific task instance and its try number.

### Example


```python
import openapi_client
from openapi_client.models.get_log200_response import GetLog200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaskInstanceApi(api_client)
    dag_id = 'dag_id_example' # str | The DAG ID.
    dag_run_id = 'dag_run_id_example' # str | The DAG run ID.
    task_id = 'task_id_example' # str | The task ID.
    task_try_number = 56 # int | The task try number.
    full_content = True # bool | A full content will be returned. By default, only the first fragment will be returned.  (optional)
    map_index = 56 # int | Filter on map index for mapped task. (optional)
    token = 'token_example' # str | A token that allows you to continue fetching logs. If passed, it will specify the location from which the download should be continued.  (optional)

    try:
        # Get logs
        api_response = api_instance.get_log(dag_id, dag_run_id, task_id, task_try_number, full_content=full_content, map_index=map_index, token=token)
        print("The response of TaskInstanceApi->get_log:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskInstanceApi->get_log: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| The DAG ID. | 
 **dag_run_id** | **str**| The DAG run ID. | 
 **task_id** | **str**| The task ID. | 
 **task_try_number** | **int**| The task try number. | 
 **full_content** | **bool**| A full content will be returned. By default, only the first fragment will be returned.  | [optional] 
 **map_index** | **int**| Filter on map index for mapped task. | [optional] 
 **token** | **str**| A token that allows you to continue fetching logs. If passed, it will specify the location from which the download should be continued.  | [optional] 

### Return type

[**GetLog200Response**](GetLog200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**400** | Client specified an invalid argument. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mapped_task_instance**
> TaskInstance get_mapped_task_instance(dag_id, dag_run_id, task_id, map_index)

Get a mapped task instance

Get details of a mapped task instance.  *New in version 2.3.0* 

### Example


```python
import openapi_client
from openapi_client.models.task_instance import TaskInstance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaskInstanceApi(api_client)
    dag_id = 'dag_id_example' # str | The DAG ID.
    dag_run_id = 'dag_run_id_example' # str | The DAG run ID.
    task_id = 'task_id_example' # str | The task ID.
    map_index = 56 # int | The map index.

    try:
        # Get a mapped task instance
        api_response = api_instance.get_mapped_task_instance(dag_id, dag_run_id, task_id, map_index)
        print("The response of TaskInstanceApi->get_mapped_task_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskInstanceApi->get_mapped_task_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| The DAG ID. | 
 **dag_run_id** | **str**| The DAG run ID. | 
 **task_id** | **str**| The task ID. | 
 **map_index** | **int**| The map index. | 

### Return type

[**TaskInstance**](TaskInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mapped_task_instances**
> TaskInstanceCollection get_mapped_task_instances(dag_id, dag_run_id, task_id, limit=limit, offset=offset, execution_date_gte=execution_date_gte, execution_date_lte=execution_date_lte, start_date_gte=start_date_gte, start_date_lte=start_date_lte, end_date_gte=end_date_gte, end_date_lte=end_date_lte, duration_gte=duration_gte, duration_lte=duration_lte, state=state, pool=pool, queue=queue, order_by=order_by)

List mapped task instances

Get details of all mapped task instances.  *New in version 2.3.0* 

### Example


```python
import openapi_client
from openapi_client.models.task_instance_collection import TaskInstanceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaskInstanceApi(api_client)
    dag_id = 'dag_id_example' # str | The DAG ID.
    dag_run_id = 'dag_run_id_example' # str | The DAG run ID.
    task_id = 'task_id_example' # str | The task ID.
    limit = 100 # int | The numbers of items to return. (optional) (default to 100)
    offset = 56 # int | The number of items to skip before starting to collect the result set. (optional)
    execution_date_gte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period.  (optional)
    execution_date_lte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period.  (optional)
    start_date_gte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period.  (optional)
    start_date_lte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period.  (optional)
    end_date_gte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period.  (optional)
    end_date_lte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period.  (optional)
    duration_gte = 3.4 # float | Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period.  (optional)
    duration_lte = 3.4 # float | Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range.  (optional)
    state = ['state_example'] # List[str] | The value can be repeated to retrieve multiple matching values (OR condition). (optional)
    pool = ['pool_example'] # List[str] | The value can be repeated to retrieve multiple matching values (OR condition). (optional)
    queue = ['queue_example'] # List[str] | The value can be repeated to retrieve multiple matching values (OR condition). (optional)
    order_by = 'order_by_example' # str | The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0*  (optional)

    try:
        # List mapped task instances
        api_response = api_instance.get_mapped_task_instances(dag_id, dag_run_id, task_id, limit=limit, offset=offset, execution_date_gte=execution_date_gte, execution_date_lte=execution_date_lte, start_date_gte=start_date_gte, start_date_lte=start_date_lte, end_date_gte=end_date_gte, end_date_lte=end_date_lte, duration_gte=duration_gte, duration_lte=duration_lte, state=state, pool=pool, queue=queue, order_by=order_by)
        print("The response of TaskInstanceApi->get_mapped_task_instances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskInstanceApi->get_mapped_task_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| The DAG ID. | 
 **dag_run_id** | **str**| The DAG run ID. | 
 **task_id** | **str**| The task ID. | 
 **limit** | **int**| The numbers of items to return. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] 
 **execution_date_gte** | **datetime**| Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period.  | [optional] 
 **execution_date_lte** | **datetime**| Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period.  | [optional] 
 **start_date_gte** | **datetime**| Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period.  | [optional] 
 **start_date_lte** | **datetime**| Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period.  | [optional] 
 **end_date_gte** | **datetime**| Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period.  | [optional] 
 **end_date_lte** | **datetime**| Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period.  | [optional] 
 **duration_gte** | **float**| Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period.  | [optional] 
 **duration_lte** | **float**| Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range.  | [optional] 
 **state** | [**List[str]**](str.md)| The value can be repeated to retrieve multiple matching values (OR condition). | [optional] 
 **pool** | [**List[str]**](str.md)| The value can be repeated to retrieve multiple matching values (OR condition). | [optional] 
 **queue** | [**List[str]**](str.md)| The value can be repeated to retrieve multiple matching values (OR condition). | [optional] 
 **order_by** | **str**| The name of the field to order the results by. Prefix a field name with &#x60;-&#x60; to reverse the sort order.  *New in version 2.1.0*  | [optional] 

### Return type

[**TaskInstanceCollection**](TaskInstanceCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_task_instance**
> TaskInstance get_task_instance(dag_id, dag_run_id, task_id)

Get a task instance

### Example


```python
import openapi_client
from openapi_client.models.task_instance import TaskInstance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaskInstanceApi(api_client)
    dag_id = 'dag_id_example' # str | The DAG ID.
    dag_run_id = 'dag_run_id_example' # str | The DAG run ID.
    task_id = 'task_id_example' # str | The task ID.

    try:
        # Get a task instance
        api_response = api_instance.get_task_instance(dag_id, dag_run_id, task_id)
        print("The response of TaskInstanceApi->get_task_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskInstanceApi->get_task_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| The DAG ID. | 
 **dag_run_id** | **str**| The DAG run ID. | 
 **task_id** | **str**| The task ID. | 

### Return type

[**TaskInstance**](TaskInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_task_instances**
> TaskInstanceCollection get_task_instances(dag_id, dag_run_id, execution_date_gte=execution_date_gte, execution_date_lte=execution_date_lte, start_date_gte=start_date_gte, start_date_lte=start_date_lte, end_date_gte=end_date_gte, end_date_lte=end_date_lte, duration_gte=duration_gte, duration_lte=duration_lte, state=state, pool=pool, queue=queue, limit=limit, offset=offset)

List task instances

This endpoint allows specifying `~` as the dag_id, dag_run_id to retrieve DAG runs for all DAGs and DAG runs. 

### Example


```python
import openapi_client
from openapi_client.models.task_instance_collection import TaskInstanceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaskInstanceApi(api_client)
    dag_id = 'dag_id_example' # str | The DAG ID.
    dag_run_id = 'dag_run_id_example' # str | The DAG run ID.
    execution_date_gte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period.  (optional)
    execution_date_lte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period.  (optional)
    start_date_gte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period.  (optional)
    start_date_lte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period.  (optional)
    end_date_gte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period.  (optional)
    end_date_lte = '2013-10-20T19:20:30+01:00' # datetime | Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period.  (optional)
    duration_gte = 3.4 # float | Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period.  (optional)
    duration_lte = 3.4 # float | Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range.  (optional)
    state = ['state_example'] # List[str] | The value can be repeated to retrieve multiple matching values (OR condition). (optional)
    pool = ['pool_example'] # List[str] | The value can be repeated to retrieve multiple matching values (OR condition). (optional)
    queue = ['queue_example'] # List[str] | The value can be repeated to retrieve multiple matching values (OR condition). (optional)
    limit = 100 # int | The numbers of items to return. (optional) (default to 100)
    offset = 56 # int | The number of items to skip before starting to collect the result set. (optional)

    try:
        # List task instances
        api_response = api_instance.get_task_instances(dag_id, dag_run_id, execution_date_gte=execution_date_gte, execution_date_lte=execution_date_lte, start_date_gte=start_date_gte, start_date_lte=start_date_lte, end_date_gte=end_date_gte, end_date_lte=end_date_lte, duration_gte=duration_gte, duration_lte=duration_lte, state=state, pool=pool, queue=queue, limit=limit, offset=offset)
        print("The response of TaskInstanceApi->get_task_instances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskInstanceApi->get_task_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| The DAG ID. | 
 **dag_run_id** | **str**| The DAG run ID. | 
 **execution_date_gte** | **datetime**| Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period.  | [optional] 
 **execution_date_lte** | **datetime**| Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period.  | [optional] 
 **start_date_gte** | **datetime**| Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period.  | [optional] 
 **start_date_lte** | **datetime**| Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period.  | [optional] 
 **end_date_gte** | **datetime**| Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period.  | [optional] 
 **end_date_lte** | **datetime**| Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period.  | [optional] 
 **duration_gte** | **float**| Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period.  | [optional] 
 **duration_lte** | **float**| Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range.  | [optional] 
 **state** | [**List[str]**](str.md)| The value can be repeated to retrieve multiple matching values (OR condition). | [optional] 
 **pool** | [**List[str]**](str.md)| The value can be repeated to retrieve multiple matching values (OR condition). | [optional] 
 **queue** | [**List[str]**](str.md)| The value can be repeated to retrieve multiple matching values (OR condition). | [optional] 
 **limit** | **int**| The numbers of items to return. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] 

### Return type

[**TaskInstanceCollection**](TaskInstanceCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_task_instances_batch**
> TaskInstanceCollection get_task_instances_batch(list_task_instance_form)

List task instances (batch)

List task instances from all DAGs and DAG runs. This endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limits. 

### Example


```python
import openapi_client
from openapi_client.models.list_task_instance_form import ListTaskInstanceForm
from openapi_client.models.task_instance_collection import TaskInstanceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaskInstanceApi(api_client)
    list_task_instance_form = openapi_client.ListTaskInstanceForm() # ListTaskInstanceForm | 

    try:
        # List task instances (batch)
        api_response = api_instance.get_task_instances_batch(list_task_instance_form)
        print("The response of TaskInstanceApi->get_task_instances_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskInstanceApi->get_task_instances_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_task_instance_form** | [**ListTaskInstanceForm**](ListTaskInstanceForm.md)|  | 

### Return type

[**TaskInstanceCollection**](TaskInstanceCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_mapped_task_instance**
> TaskInstanceReference patch_mapped_task_instance(dag_id, dag_run_id, task_id, map_index, update_task_instance=update_task_instance)

Updates the state of a mapped task instance

Updates the state for single mapped task instance. *New in version 2.5.0* 

### Example


```python
import openapi_client
from openapi_client.models.task_instance_reference import TaskInstanceReference
from openapi_client.models.update_task_instance import UpdateTaskInstance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaskInstanceApi(api_client)
    dag_id = 'dag_id_example' # str | The DAG ID.
    dag_run_id = 'dag_run_id_example' # str | The DAG run ID.
    task_id = 'task_id_example' # str | The task ID.
    map_index = 56 # int | The map index.
    update_task_instance = openapi_client.UpdateTaskInstance() # UpdateTaskInstance | Parameters of action (optional)

    try:
        # Updates the state of a mapped task instance
        api_response = api_instance.patch_mapped_task_instance(dag_id, dag_run_id, task_id, map_index, update_task_instance=update_task_instance)
        print("The response of TaskInstanceApi->patch_mapped_task_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskInstanceApi->patch_mapped_task_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| The DAG ID. | 
 **dag_run_id** | **str**| The DAG run ID. | 
 **task_id** | **str**| The task ID. | 
 **map_index** | **int**| The map index. | 
 **update_task_instance** | [**UpdateTaskInstance**](UpdateTaskInstance.md)| Parameters of action | [optional] 

### Return type

[**TaskInstanceReference**](TaskInstanceReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_task_instance**
> TaskInstanceReference patch_task_instance(dag_id, dag_run_id, task_id, update_task_instance)

Updates the state of a task instance

Updates the state for single task instance. *New in version 2.5.0* 

### Example


```python
import openapi_client
from openapi_client.models.task_instance_reference import TaskInstanceReference
from openapi_client.models.update_task_instance import UpdateTaskInstance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaskInstanceApi(api_client)
    dag_id = 'dag_id_example' # str | The DAG ID.
    dag_run_id = 'dag_run_id_example' # str | The DAG run ID.
    task_id = 'task_id_example' # str | The task ID.
    update_task_instance = openapi_client.UpdateTaskInstance() # UpdateTaskInstance | Parameters of action

    try:
        # Updates the state of a task instance
        api_response = api_instance.patch_task_instance(dag_id, dag_run_id, task_id, update_task_instance)
        print("The response of TaskInstanceApi->patch_task_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskInstanceApi->patch_task_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| The DAG ID. | 
 **dag_run_id** | **str**| The DAG run ID. | 
 **task_id** | **str**| The task ID. | 
 **update_task_instance** | [**UpdateTaskInstance**](UpdateTaskInstance.md)| Parameters of action | 

### Return type

[**TaskInstanceReference**](TaskInstanceReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_mapped_task_instance_note**
> TaskInstance set_mapped_task_instance_note(dag_id, dag_run_id, task_id, map_index, set_task_instance_note)

Update the TaskInstance note.

Update the manual user note of a mapped Task Instance.  *New in version 2.5.0* 

### Example


```python
import openapi_client
from openapi_client.models.set_task_instance_note import SetTaskInstanceNote
from openapi_client.models.task_instance import TaskInstance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaskInstanceApi(api_client)
    dag_id = 'dag_id_example' # str | The DAG ID.
    dag_run_id = 'dag_run_id_example' # str | The DAG run ID.
    task_id = 'task_id_example' # str | The task ID.
    map_index = 56 # int | The map index.
    set_task_instance_note = openapi_client.SetTaskInstanceNote() # SetTaskInstanceNote | Parameters of set Task Instance note.

    try:
        # Update the TaskInstance note.
        api_response = api_instance.set_mapped_task_instance_note(dag_id, dag_run_id, task_id, map_index, set_task_instance_note)
        print("The response of TaskInstanceApi->set_mapped_task_instance_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskInstanceApi->set_mapped_task_instance_note: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| The DAG ID. | 
 **dag_run_id** | **str**| The DAG run ID. | 
 **task_id** | **str**| The task ID. | 
 **map_index** | **int**| The map index. | 
 **set_task_instance_note** | [**SetTaskInstanceNote**](SetTaskInstanceNote.md)| Parameters of set Task Instance note. | 

### Return type

[**TaskInstance**](TaskInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**400** | Client specified an invalid argument. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_task_instance_note**
> TaskInstance set_task_instance_note(dag_id, dag_run_id, task_id, set_task_instance_note)

Update the TaskInstance note.

Update the manual user note of a non-mapped Task Instance.  *New in version 2.5.0* 

### Example


```python
import openapi_client
from openapi_client.models.set_task_instance_note import SetTaskInstanceNote
from openapi_client.models.task_instance import TaskInstance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaskInstanceApi(api_client)
    dag_id = 'dag_id_example' # str | The DAG ID.
    dag_run_id = 'dag_run_id_example' # str | The DAG run ID.
    task_id = 'task_id_example' # str | The task ID.
    set_task_instance_note = openapi_client.SetTaskInstanceNote() # SetTaskInstanceNote | Parameters of set Task Instance note.

    try:
        # Update the TaskInstance note.
        api_response = api_instance.set_task_instance_note(dag_id, dag_run_id, task_id, set_task_instance_note)
        print("The response of TaskInstanceApi->set_task_instance_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskInstanceApi->set_task_instance_note: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| The DAG ID. | 
 **dag_run_id** | **str**| The DAG run ID. | 
 **task_id** | **str**| The task ID. | 
 **set_task_instance_note** | [**SetTaskInstanceNote**](SetTaskInstanceNote.md)| Parameters of set Task Instance note. | 

### Return type

[**TaskInstance**](TaskInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**400** | Client specified an invalid argument. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


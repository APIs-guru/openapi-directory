# Task

A unit of scheduled work.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_http_request** | [**AppEngineHttpRequest**](AppEngineHttpRequest.md) |  | [optional] 
**create_time** | **str** | Output only. The time that the task was created. &#x60;create_time&#x60; will be truncated to the nearest second. | [optional] 
**http_request** | [**HttpRequest**](HttpRequest.md) |  | [optional] 
**name** | **str** | Optionally caller-specified in CreateTask. The task name. The task name must have the following format: &#x60;projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID&#x60; * &#x60;PROJECT_ID&#x60; can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * &#x60;LOCATION_ID&#x60; is the canonical ID for the task&#39;s location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * &#x60;QUEUE_ID&#x60; can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters. * &#x60;TASK_ID&#x60; can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters. | [optional] 
**pull_message** | [**PullMessage**](PullMessage.md) |  | [optional] 
**schedule_time** | **str** | The time when the task is scheduled to be attempted. For App Engine queues, this is when the task will be attempted or retried. For pull queues, this is the time when the task is available to be leased; if a task is currently leased, this is the time when the current lease expires, that is, the time that the task was leased plus the lease_duration. &#x60;schedule_time&#x60; will be truncated to the nearest microsecond. | [optional] 
**status** | [**TaskStatus**](TaskStatus.md) |  | [optional] 
**view** | **str** | Output only. The view specifies which subset of the Task has been returned. | [optional] 

## Example

```python
from openapi_client.models.task import Task

# TODO update the JSON string below
json = "{}"
# create an instance of Task from a JSON string
task_instance = Task.from_json(json)
# print the JSON string representation of the object
print(Task.to_json())

# convert the object into a dict
task_dict = task_instance.to_dict()
# create an instance of Task from a dict
task_from_dict = Task.from_dict(task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



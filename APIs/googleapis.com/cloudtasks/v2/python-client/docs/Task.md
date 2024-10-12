# Task

A unit of scheduled work.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_http_request** | [**AppEngineHttpRequest**](AppEngineHttpRequest.md) |  | [optional] 
**create_time** | **str** | Output only. The time that the task was created. &#x60;create_time&#x60; will be truncated to the nearest second. | [optional] 
**dispatch_count** | **int** | Output only. The number of attempts dispatched. This count includes attempts which have been dispatched but haven&#39;t received a response. | [optional] 
**dispatch_deadline** | **str** | The deadline for requests sent to the worker. If the worker does not respond by this deadline then the request is cancelled and the attempt is marked as a &#x60;DEADLINE_EXCEEDED&#x60; failure. Cloud Tasks will retry the task according to the RetryConfig. Note that when the request is cancelled, Cloud Tasks will stop listening for the response, but whether the worker stops processing depends on the worker. For example, if the worker is stuck, it may not react to cancelled requests. The default and maximum values depend on the type of request: * For HTTP tasks, the default is 10 minutes. The deadline must be in the interval [15 seconds, 30 minutes]. * For App Engine tasks, 0 indicates that the request has the default deadline. The default deadline depends on the [scaling type](https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling) of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15 seconds]. Regardless of the task&#39;s &#x60;dispatch_deadline&#x60;, the app handler will not run for longer than than the service&#39;s timeout. We recommend setting the &#x60;dispatch_deadline&#x60; to at most a few seconds more than the app handler&#39;s timeout. For more information see [Timeouts](https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts). The value must be given as a string that indicates the length of time (in seconds) followed by &#x60;s&#x60; (for \&quot;seconds\&quot;). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). &#x60;dispatch_deadline&#x60; will be truncated to the nearest millisecond. The deadline is an approximate deadline. | [optional] 
**first_attempt** | [**Attempt**](Attempt.md) |  | [optional] 
**http_request** | [**HttpRequest**](HttpRequest.md) |  | [optional] 
**last_attempt** | [**Attempt**](Attempt.md) |  | [optional] 
**name** | **str** | Optionally caller-specified in CreateTask. The task name. The task name must have the following format: &#x60;projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID&#x60; * &#x60;PROJECT_ID&#x60; can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * &#x60;LOCATION_ID&#x60; is the canonical ID for the task&#39;s location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * &#x60;QUEUE_ID&#x60; can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters. * &#x60;TASK_ID&#x60; can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters. | [optional] 
**response_count** | **int** | Output only. The number of attempts which have received a response. | [optional] 
**schedule_time** | **str** | The time when the task is scheduled to be attempted or retried. &#x60;schedule_time&#x60; will be truncated to the nearest microsecond. | [optional] 
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



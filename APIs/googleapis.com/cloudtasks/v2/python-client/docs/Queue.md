# Queue

A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_routing_override** | [**AppEngineRouting**](AppEngineRouting.md) |  | [optional] 
**http_target** | [**HttpTarget**](HttpTarget.md) |  | [optional] 
**name** | **str** | Caller-specified and required in CreateQueue, after which it becomes output only. The queue name. The queue name must have the following format: &#x60;projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID&#x60; * &#x60;PROJECT_ID&#x60; can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * &#x60;LOCATION_ID&#x60; is the canonical ID for the queue&#39;s location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * &#x60;QUEUE_ID&#x60; can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters. | [optional] 
**purge_time** | **str** | Output only. The last time this queue was purged. All tasks that were created before this time were purged. A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue). Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged. | [optional] 
**rate_limits** | [**RateLimits**](RateLimits.md) |  | [optional] 
**retry_config** | [**RetryConfig**](RetryConfig.md) |  | [optional] 
**stackdriver_logging_config** | [**StackdriverLoggingConfig**](StackdriverLoggingConfig.md) |  | [optional] 
**state** | **str** | Output only. The state of the queue. &#x60;state&#x60; can only be changed by calling PauseQueue, ResumeQueue, or uploading [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref). UpdateQueue cannot be used to change &#x60;state&#x60;. | [optional] 

## Example

```python
from openapi_client.models.queue import Queue

# TODO update the JSON string below
json = "{}"
# create an instance of Queue from a JSON string
queue_instance = Queue.from_json(json)
# print the JSON string representation of the object
print(Queue.to_json())

# convert the object into a dict
queue_dict = queue_instance.to_dict()
# create an instance of Queue from a dict
queue_from_dict = Queue.from_dict(queue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



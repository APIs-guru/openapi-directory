# Queue

A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, target types, and others.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_http_target** | [**AppEngineHttpTarget**](AppEngineHttpTarget.md) |  | [optional] 
**http_target** | [**HttpTarget**](HttpTarget.md) |  | [optional] 
**name** | **str** | Caller-specified and required in CreateQueue, after which it becomes output only. The queue name. The queue name must have the following format: &#x60;projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID&#x60; * &#x60;PROJECT_ID&#x60; can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * &#x60;LOCATION_ID&#x60; is the canonical ID for the queue&#39;s location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * &#x60;QUEUE_ID&#x60; can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters. | [optional] 
**pull_target** | **object** | Pull target. | [optional] 
**purge_time** | **str** | Output only. The last time this queue was purged. All tasks that were created before this time were purged. A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue). Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged. | [optional] 
**rate_limits** | [**RateLimits**](RateLimits.md) |  | [optional] 
**retry_config** | [**RetryConfig**](RetryConfig.md) |  | [optional] 
**state** | **str** | Output only. The state of the queue. &#x60;state&#x60; can only be changed by called PauseQueue, ResumeQueue, or uploading [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref). UpdateQueue cannot be used to change &#x60;state&#x60;. | [optional] 
**stats** | [**QueueStats**](QueueStats.md) |  | [optional] 
**task_ttl** | **str** | The maximum amount of time that a task will be retained in this queue. Queues created by Cloud Tasks have a default &#x60;task_ttl&#x60; of 31 days. After a task has lived for &#x60;task_ttl&#x60;, the task will be deleted regardless of whether it was dispatched or not. The &#x60;task_ttl&#x60; for queues created via queue.yaml/xml is equal to the maximum duration because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues. To view the maximum valid duration, see the documentation for Duration. | [optional] 
**tombstone_ttl** | **str** | The task tombstone time to live (TTL). After a task is deleted or completed, the task&#39;s tombstone is retained for the length of time specified by &#x60;tombstone_ttl&#x60;. The tombstone is used by task de-duplication; another task with the same name can&#39;t be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest. Queues created by Cloud Tasks have a default &#x60;tombstone_ttl&#x60; of 1 hour. | [optional] 

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



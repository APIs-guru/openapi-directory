# QueueStats

Statistics for a queue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_dispatches_count** | **str** | Output only. The number of requests that the queue has dispatched but has not received a reply for yet. | [optional] [readonly] 
**effective_execution_rate** | **float** | Output only. The current maximum number of tasks per second executed by the queue. The maximum value of this variable is controlled by the RateLimits of the Queue. However, this value could be less to avoid overloading the endpoints tasks in the queue are targeting. | [optional] [readonly] 
**executed_last_minute_count** | **str** | Output only. The number of tasks that the queue has dispatched and received a reply for during the last minute. This variable counts both successful and non-successful executions. | [optional] [readonly] 
**oldest_estimated_arrival_time** | **str** | Output only. An estimation of the nearest time in the future where a task in the queue is scheduled to be executed. | [optional] [readonly] 
**tasks_count** | **str** | Output only. An estimation of the number of tasks in the queue, that is, the tasks in the queue that haven&#39;t been executed, the tasks in the queue which the queue has dispatched but has not yet received a reply for, and the failed tasks that the queue is retrying. | [optional] [readonly] 

## Example

```python
from openapi_client.models.queue_stats import QueueStats

# TODO update the JSON string below
json = "{}"
# create an instance of QueueStats from a JSON string
queue_stats_instance = QueueStats.from_json(json)
# print the JSON string representation of the object
print(QueueStats.to_json())

# convert the object into a dict
queue_stats_dict = queue_stats_instance.to_dict()
# create an instance of QueueStats from a dict
queue_stats_from_dict = QueueStats.from_dict(queue_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



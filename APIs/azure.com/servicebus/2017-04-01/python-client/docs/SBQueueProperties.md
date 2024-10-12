# SBQueueProperties

The Queue Properties definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessed_at** | **datetime** | Last time a message was sent, or the last time there was a receive request to this queue. | [optional] [readonly] 
**auto_delete_on_idle** | **str** | ISO 8061 timeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes. | [optional] 
**count_details** | [**MessageCountDetails**](MessageCountDetails.md) |  | [optional] 
**created_at** | **datetime** | The exact time the message was created. | [optional] [readonly] 
**dead_lettering_on_message_expiration** | **bool** | A value that indicates whether this queue has dead letter support when a message expires. | [optional] 
**default_message_time_to_live** | **str** | ISO 8601 default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. | [optional] 
**duplicate_detection_history_time_window** | **str** | ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. | [optional] 
**enable_batched_operations** | **bool** | Value that indicates whether server-side batched operations are enabled. | [optional] 
**enable_express** | **bool** | A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage. | [optional] 
**enable_partitioning** | **bool** | A value that indicates whether the queue is to be partitioned across multiple message brokers. | [optional] 
**forward_dead_lettered_messages_to** | **str** | Queue/Topic name to forward the Dead Letter message | [optional] 
**forward_to** | **str** | Queue/Topic name to forward the messages | [optional] 
**lock_duration** | **str** | ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute. | [optional] 
**max_delivery_count** | **int** | The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10. | [optional] 
**max_size_in_megabytes** | **int** | The maximum size of the queue in megabytes, which is the size of memory allocated for the queue. Default is 1024. | [optional] 
**message_count** | **int** | The number of messages in the queue. | [optional] [readonly] 
**requires_duplicate_detection** | **bool** | A value indicating if this queue requires duplicate detection. | [optional] 
**requires_session** | **bool** | A value that indicates whether the queue supports the concept of sessions. | [optional] 
**size_in_bytes** | **int** | The size of the queue, in bytes. | [optional] [readonly] 
**status** | [**EntityStatus**](EntityStatus.md) |  | [optional] 
**updated_at** | **datetime** | The exact time the message was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sb_queue_properties import SBQueueProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SBQueueProperties from a JSON string
sb_queue_properties_instance = SBQueueProperties.from_json(json)
# print the JSON string representation of the object
print(SBQueueProperties.to_json())

# convert the object into a dict
sb_queue_properties_dict = sb_queue_properties_instance.to_dict()
# create an instance of SBQueueProperties from a dict
sb_queue_properties_from_dict = SBQueueProperties.from_dict(sb_queue_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TopicProperties

The Topic Properties definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessed_at** | **datetime** | Last time the message was sent, or a request was received, for this topic. | [optional] [readonly] 
**auto_delete_on_idle** | **str** | TimeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. | [optional] 
**count_details** | [**MessageCountDetails**](MessageCountDetails.md) |  | [optional] 
**created_at** | **datetime** | Exact time the message was created. | [optional] [readonly] 
**default_message_time_to_live** | **str** | Default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. | [optional] 
**duplicate_detection_history_time_window** | **str** | TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. | [optional] 
**enable_batched_operations** | **bool** | Value that indicates whether server-side batched operations are enabled. | [optional] 
**enable_express** | **bool** | Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage. | [optional] 
**enable_partitioning** | **bool** | Value that indicates whether the topic to be partitioned across multiple message brokers is enabled. | [optional] 
**entity_availability_status** | [**EntityAvailabilityStatus**](EntityAvailabilityStatus.md) |  | [optional] 
**filtering_messages_before_publishing** | **bool** | Whether messages should be filtered before publishing. | [optional] 
**is_anonymous_accessible** | **bool** | Value that indicates whether the message is accessible anonymously. | [optional] 
**is_express** | **bool** |  | [optional] 
**max_size_in_megabytes** | **int** | Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. | [optional] 
**requires_duplicate_detection** | **bool** | Value indicating if this topic requires duplicate detection. | [optional] 
**size_in_bytes** | **int** | Size of the topic, in bytes. | [optional] [readonly] 
**status** | [**EntityStatus**](EntityStatus.md) |  | [optional] 
**subscription_count** | **int** | Number of subscriptions. | [optional] [readonly] 
**support_ordering** | **bool** | Value that indicates whether the topic supports ordering. | [optional] 
**updated_at** | **datetime** | The exact time the message was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.topic_properties import TopicProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TopicProperties from a JSON string
topic_properties_instance = TopicProperties.from_json(json)
# print the JSON string representation of the object
print(TopicProperties.to_json())

# convert the object into a dict
topic_properties_dict = topic_properties_instance.to_dict()
# create an instance of TopicProperties from a dict
topic_properties_from_dict = TopicProperties.from_dict(topic_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



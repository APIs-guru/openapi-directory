# SBSubscriptionProperties

Description of Subscription Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessed_at** | **datetime** | Last time there was a receive request to this subscription. | [optional] [readonly] 
**auto_delete_on_idle** | **str** | ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. | [optional] 
**count_details** | [**MessageCountDetails**](MessageCountDetails.md) |  | [optional] 
**created_at** | **datetime** | Exact time the message was created. | [optional] [readonly] 
**dead_lettering_on_filter_evaluation_exceptions** | **bool** | Value that indicates whether a subscription has dead letter support on filter evaluation exceptions. | [optional] 
**dead_lettering_on_message_expiration** | **bool** | Value that indicates whether a subscription has dead letter support when a message expires. | [optional] 
**default_message_time_to_live** | **str** | ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. | [optional] 
**duplicate_detection_history_time_window** | **str** | ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. | [optional] 
**enable_batched_operations** | **bool** | Value that indicates whether server-side batched operations are enabled. | [optional] 
**forward_dead_lettered_messages_to** | **str** | Queue/Topic name to forward the Dead Letter message | [optional] 
**forward_to** | **str** | Queue/Topic name to forward the messages | [optional] 
**lock_duration** | **str** | ISO 8061 lock duration timespan for the subscription. The default value is 1 minute. | [optional] 
**max_delivery_count** | **int** | Number of maximum deliveries. | [optional] 
**message_count** | **int** | Number of messages. | [optional] [readonly] 
**requires_session** | **bool** | Value indicating if a subscription supports the concept of sessions. | [optional] 
**status** | [**EntityStatus**](EntityStatus.md) |  | [optional] 
**updated_at** | **datetime** | The exact time the message was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sb_subscription_properties import SBSubscriptionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SBSubscriptionProperties from a JSON string
sb_subscription_properties_instance = SBSubscriptionProperties.from_json(json)
# print the JSON string representation of the object
print(SBSubscriptionProperties.to_json())

# convert the object into a dict
sb_subscription_properties_dict = sb_subscription_properties_instance.to_dict()
# create an instance of SBSubscriptionProperties from a dict
sb_subscription_properties_from_dict = SBSubscriptionProperties.from_dict(sb_subscription_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



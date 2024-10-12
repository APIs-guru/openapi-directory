# ReceivedMessage

A message and its corresponding acknowledgment ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ack_id** | **str** | Optional. This ID can be used to acknowledge the received message. | [optional] 
**delivery_attempt** | **int** | Optional. The approximate number of times that Pub/Sub has attempted to deliver the associated message to a subscriber. More precisely, this is 1 + (number of NACKs) + (number of ack_deadline exceeds) for this message. A NACK is any call to ModifyAckDeadline with a 0 deadline. An ack_deadline exceeds event is whenever a message is not acknowledged within ack_deadline. Note that ack_deadline is initially Subscription.ackDeadlineSeconds, but may get extended automatically by the client library. Upon the first delivery of a given message, &#x60;delivery_attempt&#x60; will have a value of 1. The value is calculated at best effort and is approximate. If a DeadLetterPolicy is not set on the subscription, this will be 0. | [optional] 
**message** | [**PubsubMessage**](PubsubMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.received_message import ReceivedMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivedMessage from a JSON string
received_message_instance = ReceivedMessage.from_json(json)
# print the JSON string representation of the object
print(ReceivedMessage.to_json())

# convert the object into a dict
received_message_dict = received_message_instance.to_dict()
# create an instance of ReceivedMessage from a dict
received_message_from_dict = ReceivedMessage.from_dict(received_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ReceivedMessage

A message and its corresponding acknowledgment ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ack_id** | **str** | This ID can be used to acknowledge the received message. | [optional] 
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



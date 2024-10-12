# PubsubMessage

A message data and its labels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | The message payload. | [optional] 
**label** | [**List[Label]**](Label.md) | Optional list of labels for this message. Keys in this collection must be unique. | [optional] 
**message_id** | **str** | ID of this message assigned by the server at publication time. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a PubsubMessage via a Pull call or a push delivery. It must not be populated by a publisher in a Publish call. | [optional] 
**publish_time** | **str** | The time at which the message was published. The time is milliseconds since the UNIX epoch. | [optional] 

## Example

```python
from openapi_client.models.pubsub_message import PubsubMessage

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubMessage from a JSON string
pubsub_message_instance = PubsubMessage.from_json(json)
# print the JSON string representation of the object
print(PubsubMessage.to_json())

# convert the object into a dict
pubsub_message_dict = pubsub_message_instance.to_dict()
# create an instance of PubsubMessage from a dict
pubsub_message_from_dict = PubsubMessage.from_dict(pubsub_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PubsubMessage

A message data and its attributes. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, str]** | Optional attributes for this message. | [optional] 
**data** | **bytearray** | The message payload. For JSON requests, the value of this field must be [base64-encoded](https://tools.ietf.org/html/rfc4648). | [optional] 
**message_id** | **str** | ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a &#x60;PubsubMessage&#x60; via a &#x60;Pull&#x60; call or a push delivery. It must not be populated by the publisher in a &#x60;Publish&#x60; call. | [optional] 
**publish_time** | **str** | The time at which the message was published, populated by the server when it receives the &#x60;Publish&#x60; call. It must not be populated by the publisher in a &#x60;Publish&#x60; call. | [optional] 

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



# MessageEnvelope

Envelope for messages sent to actors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **object** | Body of the message | [optional] 
**message_id** | **str** | Unique id of the message | [optional] 
**message_type** | **str** | Type of the message | [optional] 

## Example

```python
from openapi_client.models.message_envelope import MessageEnvelope

# TODO update the JSON string below
json = "{}"
# create an instance of MessageEnvelope from a JSON string
message_envelope_instance = MessageEnvelope.from_json(json)
# print the JSON string representation of the object
print(MessageEnvelope.to_json())

# convert the object into a dict
message_envelope_dict = message_envelope_instance.to_dict()
# create an instance of MessageEnvelope from a dict
message_envelope_from_dict = MessageEnvelope.from_dict(message_envelope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# MessageEventPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**ContactIdentifiers**](ContactIdentifiers.md) |  | [optional] 
**error** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.message_event_payload import MessageEventPayload

# TODO update the JSON string below
json = "{}"
# create an instance of MessageEventPayload from a JSON string
message_event_payload_instance = MessageEventPayload.from_json(json)
# print the JSON string representation of the object
print(MessageEventPayload.to_json())

# convert the object into a dict
message_event_payload_dict = message_event_payload_instance.to_dict()
# create an instance of MessageEventPayload from a dict
message_event_payload_from_dict = MessageEventPayload.from_dict(message_event_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



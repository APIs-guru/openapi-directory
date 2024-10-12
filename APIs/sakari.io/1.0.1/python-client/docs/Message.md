# Message


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**ContactIdentifiers**](ContactIdentifiers.md) |  | [optional] 
**conversation** | [**MessageConversation**](MessageConversation.md) |  | [optional] 
**created** | [**Updated**](Updated.md) |  | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**id** | **str** |  | [optional] 
**media** | [**List[MessageMediaInner]**](MessageMediaInner.md) | List of media objects attached to message | [optional] 
**message** | **str** |  | [optional] 
**outgoing** | **bool** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**read** | **bool** |  | [optional] 
**segments** | **float** |  | [optional] 
**status** | **str** |  | [optional] 
**template** | **str** |  | [optional] 
**updated** | [**Updated**](Updated.md) |  | [optional] 

## Example

```python
from openapi_client.models.message import Message

# TODO update the JSON string below
json = "{}"
# create an instance of Message from a JSON string
message_instance = Message.from_json(json)
# print the JSON string representation of the object
print(Message.to_json())

# convert the object into a dict
message_dict = message_instance.to_dict()
# create an instance of Message from a dict
message_from_dict = Message.from_dict(message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



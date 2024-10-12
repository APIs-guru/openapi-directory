# Conversation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed** | **bool** |  | [optional] 
**contact** | [**ContactIdentifiers**](ContactIdentifiers.md) |  | [optional] 
**created** | [**Updated**](Updated.md) |  | [optional] 
**id** | **str** |  | [optional] 
**last_message** | [**Message**](Message.md) |  | [optional] 
**phone_number** | [**PhoneNumber**](PhoneNumber.md) |  | [optional] 
**unread** | **List[str]** |  | [optional] 
**updated** | [**Updated**](Updated.md) |  | [optional] 

## Example

```python
from openapi_client.models.conversation import Conversation

# TODO update the JSON string below
json = "{}"
# create an instance of Conversation from a JSON string
conversation_instance = Conversation.from_json(json)
# print the JSON string representation of the object
print(Conversation.to_json())

# convert the object into a dict
conversation_dict = conversation_instance.to_dict()
# create an instance of Conversation from a dict
conversation_from_dict = Conversation.from_dict(conversation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



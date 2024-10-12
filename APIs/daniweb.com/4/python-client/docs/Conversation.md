# Conversation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_message** | [**ConversationFirstMessage**](ConversationFirstMessage.md) |  | [optional] 
**id** | **float** |  | 
**latest_message** | [**Message**](Message.md) |  | [optional] 
**user_a** | [**User**](User.md) |  | [optional] 
**user_b** | [**User**](User.md) |  | [optional] 

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



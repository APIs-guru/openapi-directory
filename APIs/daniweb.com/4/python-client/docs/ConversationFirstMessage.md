# ConversationFirstMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**User**](User.md) |  | [optional] 
**timestamp** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.conversation_first_message import ConversationFirstMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationFirstMessage from a JSON string
conversation_first_message_instance = ConversationFirstMessage.from_json(json)
# print the JSON string representation of the object
print(ConversationFirstMessage.to_json())

# convert the object into a dict
conversation_first_message_dict = conversation_first_message_instance.to_dict()
# create an instance of ConversationFirstMessage from a dict
conversation_first_message_from_dict = ConversationFirstMessage.from_dict(conversation_first_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



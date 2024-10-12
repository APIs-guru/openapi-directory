# ConversationIMChannelObjectFromConversationsMethodsSharesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_create** | **int** |  | 
**id** | **str** |  | 
**is_active** | **bool** |  | 
**name** | **str** |  | 
**team** | [**ObjsTeam**](ObjsTeam.md) |  | 

## Example

```python
from openapi_client.models.conversation_im_channel_object_from_conversations_methods_shares_inner import ConversationIMChannelObjectFromConversationsMethodsSharesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationIMChannelObjectFromConversationsMethodsSharesInner from a JSON string
conversation_im_channel_object_from_conversations_methods_shares_inner_instance = ConversationIMChannelObjectFromConversationsMethodsSharesInner.from_json(json)
# print the JSON string representation of the object
print(ConversationIMChannelObjectFromConversationsMethodsSharesInner.to_json())

# convert the object into a dict
conversation_im_channel_object_from_conversations_methods_shares_inner_dict = conversation_im_channel_object_from_conversations_methods_shares_inner_instance.to_dict()
# create an instance of ConversationIMChannelObjectFromConversationsMethodsSharesInner from a dict
conversation_im_channel_object_from_conversations_methods_shares_inner_from_dict = ConversationIMChannelObjectFromConversationsMethodsSharesInner.from_dict(conversation_im_channel_object_from_conversations_methods_shares_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



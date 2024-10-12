# ConversationIMChannelObjectFromConversationsMethods


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** |  | 
**has_pins** | **bool** |  | [optional] 
**id** | **str** |  | 
**is_archived** | **bool** |  | [optional] 
**is_ext_shared** | **bool** |  | [optional] 
**is_frozen** | **bool** |  | [optional] 
**is_im** | **bool** |  | 
**is_open** | **bool** |  | [optional] 
**is_org_shared** | **bool** |  | 
**is_shared** | **bool** |  | [optional] 
**is_starred** | **bool** |  | [optional] 
**is_user_deleted** | **bool** |  | [optional] 
**last_read** | **str** |  | [optional] 
**latest** | [**List[ObjsChannelLatestInner]**](ObjsChannelLatestInner.md) |  | [optional] 
**parent_conversation** | [**List[ConversationObjectParentConversationInner]**](ConversationObjectParentConversationInner.md) |  | [optional] 
**pin_count** | **int** |  | [optional] 
**priority** | **float** |  | 
**shares** | [**List[ConversationIMChannelObjectFromConversationsMethodsSharesInner]**](ConversationIMChannelObjectFromConversationsMethodsSharesInner.md) |  | [optional] 
**unread_count** | **int** |  | [optional] 
**unread_count_display** | **int** |  | [optional] 
**user** | **str** |  | 
**version** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.conversation_im_channel_object_from_conversations_methods import ConversationIMChannelObjectFromConversationsMethods

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationIMChannelObjectFromConversationsMethods from a JSON string
conversation_im_channel_object_from_conversations_methods_instance = ConversationIMChannelObjectFromConversationsMethods.from_json(json)
# print the JSON string representation of the object
print(ConversationIMChannelObjectFromConversationsMethods.to_json())

# convert the object into a dict
conversation_im_channel_object_from_conversations_methods_dict = conversation_im_channel_object_from_conversations_methods_instance.to_dict()
# create an instance of ConversationIMChannelObjectFromConversationsMethods from a dict
conversation_im_channel_object_from_conversations_methods_from_dict = ConversationIMChannelObjectFromConversationsMethods.from_dict(conversation_im_channel_object_from_conversations_methods_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



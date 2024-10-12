# ConversationsInviteErrorSchema

Schema for successful response from conversations.invite method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**List[ObjsConversationInner]**](ObjsConversationInner.md) |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_invite_error_schema import ConversationsInviteErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsInviteErrorSchema from a JSON string
conversations_invite_error_schema_instance = ConversationsInviteErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsInviteErrorSchema.to_json())

# convert the object into a dict
conversations_invite_error_schema_dict = conversations_invite_error_schema_instance.to_dict()
# create an instance of ConversationsInviteErrorSchema from a dict
conversations_invite_error_schema_from_dict = ConversationsInviteErrorSchema.from_dict(conversations_invite_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



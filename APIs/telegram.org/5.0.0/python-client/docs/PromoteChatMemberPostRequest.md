# PromoteChatMemberPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_change_info** | **bool** | Pass True, if the administrator can change chat title, photo and other settings | [optional] 
**can_delete_messages** | **bool** | Pass True, if the administrator can delete messages of other users | [optional] 
**can_edit_messages** | **bool** | Pass True, if the administrator can edit messages of other users and can pin messages, channels only | [optional] 
**can_invite_users** | **bool** | Pass True, if the administrator can invite new users to the chat | [optional] 
**can_pin_messages** | **bool** | Pass True, if the administrator can pin messages, supergroups only | [optional] 
**can_post_messages** | **bool** | Pass True, if the administrator can create channel posts, channels only | [optional] 
**can_promote_members** | **bool** | Pass True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him) | [optional] 
**can_restrict_members** | **bool** | Pass True, if the administrator can restrict, ban or unban chat members | [optional] 
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**is_anonymous** | **bool** | Pass *True*, if the administrator&#39;s presence in the chat is hidden | [optional] 
**user_id** | **int** | Unique identifier of the target user | 

## Example

```python
from openapi_client.models.promote_chat_member_post_request import PromoteChatMemberPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PromoteChatMemberPostRequest from a JSON string
promote_chat_member_post_request_instance = PromoteChatMemberPostRequest.from_json(json)
# print the JSON string representation of the object
print(PromoteChatMemberPostRequest.to_json())

# convert the object into a dict
promote_chat_member_post_request_dict = promote_chat_member_post_request_instance.to_dict()
# create an instance of PromoteChatMemberPostRequest from a dict
promote_chat_member_post_request_from_dict = PromoteChatMemberPostRequest.from_dict(promote_chat_member_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



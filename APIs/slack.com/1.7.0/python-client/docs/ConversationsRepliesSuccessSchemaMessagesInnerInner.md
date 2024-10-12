# ConversationsRepliesSuccessSchemaMessagesInnerInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_read** | **str** |  | [optional] 
**latest_reply** | **str** |  | [optional] 
**reply_count** | **int** |  | 
**reply_users** | **List[str]** |  | [optional] 
**reply_users_count** | **int** |  | [optional] 
**source_team** | **str** |  | [optional] 
**subscribed** | **bool** |  | 
**team** | **str** |  | [optional] 
**text** | **str** |  | 
**thread_ts** | **str** |  | 
**ts** | **str** |  | 
**type** | **str** |  | 
**unread_count** | **int** |  | [optional] 
**user** | **str** |  | 
**user_profile** | [**ObjsUserProfileShort**](ObjsUserProfileShort.md) |  | [optional] 
**user_team** | **str** |  | [optional] 
**is_starred** | **bool** |  | [optional] 
**parent_user_id** | **str** |  | 

## Example

```python
from openapi_client.models.conversations_replies_success_schema_messages_inner_inner import ConversationsRepliesSuccessSchemaMessagesInnerInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsRepliesSuccessSchemaMessagesInnerInner from a JSON string
conversations_replies_success_schema_messages_inner_inner_instance = ConversationsRepliesSuccessSchemaMessagesInnerInner.from_json(json)
# print the JSON string representation of the object
print(ConversationsRepliesSuccessSchemaMessagesInnerInner.to_json())

# convert the object into a dict
conversations_replies_success_schema_messages_inner_inner_dict = conversations_replies_success_schema_messages_inner_inner_instance.to_dict()
# create an instance of ConversationsRepliesSuccessSchemaMessagesInnerInner from a dict
conversations_replies_success_schema_messages_inner_inner_from_dict = ConversationsRepliesSuccessSchemaMessagesInnerInner.from_dict(conversations_replies_success_schema_messages_inner_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



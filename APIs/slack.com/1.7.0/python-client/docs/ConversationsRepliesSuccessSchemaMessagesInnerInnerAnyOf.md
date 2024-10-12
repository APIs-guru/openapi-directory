# ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf


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

## Example

```python
from openapi_client.models.conversations_replies_success_schema_messages_inner_inner_any_of import ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf from a JSON string
conversations_replies_success_schema_messages_inner_inner_any_of_instance = ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf.from_json(json)
# print the JSON string representation of the object
print(ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf.to_json())

# convert the object into a dict
conversations_replies_success_schema_messages_inner_inner_any_of_dict = conversations_replies_success_schema_messages_inner_inner_any_of_instance.to_dict()
# create an instance of ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf from a dict
conversations_replies_success_schema_messages_inner_inner_any_of_from_dict = ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf.from_dict(conversations_replies_success_schema_messages_inner_inner_any_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



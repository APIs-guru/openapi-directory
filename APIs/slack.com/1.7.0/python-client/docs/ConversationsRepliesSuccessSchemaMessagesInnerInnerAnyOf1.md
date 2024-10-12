# ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_starred** | **bool** |  | [optional] 
**parent_user_id** | **str** |  | 
**source_team** | **str** |  | [optional] 
**team** | **str** |  | [optional] 
**text** | **str** |  | 
**thread_ts** | **str** |  | 
**ts** | **str** |  | 
**type** | **str** |  | 
**user** | **str** |  | 
**user_profile** | [**ObjsUserProfileShort**](ObjsUserProfileShort.md) |  | [optional] 
**user_team** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.conversations_replies_success_schema_messages_inner_inner_any_of1 import ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf1

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf1 from a JSON string
conversations_replies_success_schema_messages_inner_inner_any_of1_instance = ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf1.from_json(json)
# print the JSON string representation of the object
print(ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf1.to_json())

# convert the object into a dict
conversations_replies_success_schema_messages_inner_inner_any_of1_dict = conversations_replies_success_schema_messages_inner_inner_any_of1_instance.to_dict()
# create an instance of ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf1 from a dict
conversations_replies_success_schema_messages_inner_inner_any_of1_from_dict = ConversationsRepliesSuccessSchemaMessagesInnerInnerAnyOf1.from_dict(conversations_replies_success_schema_messages_inner_inner_any_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



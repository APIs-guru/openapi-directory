# ConversationsRepliesSuccessSchema

Schema for successful response from conversations.replies method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more** | **bool** |  | [optional] 
**messages** | **List[List[ConversationsRepliesSuccessSchemaMessagesInnerInner]]** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_replies_success_schema import ConversationsRepliesSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsRepliesSuccessSchema from a JSON string
conversations_replies_success_schema_instance = ConversationsRepliesSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsRepliesSuccessSchema.to_json())

# convert the object into a dict
conversations_replies_success_schema_dict = conversations_replies_success_schema_instance.to_dict()
# create an instance of ConversationsRepliesSuccessSchema from a dict
conversations_replies_success_schema_from_dict = ConversationsRepliesSuccessSchema.from_dict(conversations_replies_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



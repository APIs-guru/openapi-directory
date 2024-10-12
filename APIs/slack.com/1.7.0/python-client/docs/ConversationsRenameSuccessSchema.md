# ConversationsRenameSuccessSchema

Schema for successful response from conversations.rename method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**List[ObjsConversationInner]**](ObjsConversationInner.md) |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_rename_success_schema import ConversationsRenameSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsRenameSuccessSchema from a JSON string
conversations_rename_success_schema_instance = ConversationsRenameSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsRenameSuccessSchema.to_json())

# convert the object into a dict
conversations_rename_success_schema_dict = conversations_rename_success_schema_instance.to_dict()
# create an instance of ConversationsRenameSuccessSchema from a dict
conversations_rename_success_schema_from_dict = ConversationsRenameSuccessSchema.from_dict(conversations_rename_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



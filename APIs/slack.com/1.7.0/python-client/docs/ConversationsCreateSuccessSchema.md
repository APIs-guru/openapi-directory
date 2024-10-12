# ConversationsCreateSuccessSchema

Schema for successful response conversations.create method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**List[ObjsConversationInner]**](ObjsConversationInner.md) |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_create_success_schema import ConversationsCreateSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsCreateSuccessSchema from a JSON string
conversations_create_success_schema_instance = ConversationsCreateSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsCreateSuccessSchema.to_json())

# convert the object into a dict
conversations_create_success_schema_dict = conversations_create_success_schema_instance.to_dict()
# create an instance of ConversationsCreateSuccessSchema from a dict
conversations_create_success_schema_from_dict = ConversationsCreateSuccessSchema.from_dict(conversations_create_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



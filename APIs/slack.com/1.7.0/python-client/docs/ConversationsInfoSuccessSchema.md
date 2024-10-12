# ConversationsInfoSuccessSchema

Schema for successful response conversations.info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**List[ObjsConversationInner]**](ObjsConversationInner.md) |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_info_success_schema import ConversationsInfoSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsInfoSuccessSchema from a JSON string
conversations_info_success_schema_instance = ConversationsInfoSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsInfoSuccessSchema.to_json())

# convert the object into a dict
conversations_info_success_schema_dict = conversations_info_success_schema_instance.to_dict()
# create an instance of ConversationsInfoSuccessSchema from a dict
conversations_info_success_schema_from_dict = ConversationsInfoSuccessSchema.from_dict(conversations_info_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ConversationsListSuccessSchema

Schema for successful response from conversations.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **List[List[ObjsConversationInner]]** |  | 
**ok** | **bool** |  | 
**response_metadata** | [**AdminConversationsGetTeamsSchemaResponseMetadata**](AdminConversationsGetTeamsSchemaResponseMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.conversations_list_success_schema import ConversationsListSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsListSuccessSchema from a JSON string
conversations_list_success_schema_instance = ConversationsListSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsListSuccessSchema.to_json())

# convert the object into a dict
conversations_list_success_schema_dict = conversations_list_success_schema_instance.to_dict()
# create an instance of ConversationsListSuccessSchema from a dict
conversations_list_success_schema_from_dict = ConversationsListSuccessSchema.from_dict(conversations_list_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ConversationsMembersSuccessSchema

Schema for successful response conversations.members method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | **List[str]** |  | 
**ok** | **bool** |  | 
**response_metadata** | [**AdminConversationsGetTeamsSchemaResponseMetadata**](AdminConversationsGetTeamsSchemaResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.conversations_members_success_schema import ConversationsMembersSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsMembersSuccessSchema from a JSON string
conversations_members_success_schema_instance = ConversationsMembersSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsMembersSuccessSchema.to_json())

# convert the object into a dict
conversations_members_success_schema_dict = conversations_members_success_schema_instance.to_dict()
# create an instance of ConversationsMembersSuccessSchema from a dict
conversations_members_success_schema_from_dict = ConversationsMembersSuccessSchema.from_dict(conversations_members_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



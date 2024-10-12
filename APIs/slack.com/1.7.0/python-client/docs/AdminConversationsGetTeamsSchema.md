# AdminConversationsGetTeamsSchema

Schema for successful response of admin.conversations.getTeams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**response_metadata** | [**AdminConversationsGetTeamsSchemaResponseMetadata**](AdminConversationsGetTeamsSchemaResponseMetadata.md) |  | [optional] 
**team_ids** | **List[str]** |  | 

## Example

```python
from openapi_client.models.admin_conversations_get_teams_schema import AdminConversationsGetTeamsSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsGetTeamsSchema from a JSON string
admin_conversations_get_teams_schema_instance = AdminConversationsGetTeamsSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsGetTeamsSchema.to_json())

# convert the object into a dict
admin_conversations_get_teams_schema_dict = admin_conversations_get_teams_schema_instance.to_dict()
# create an instance of AdminConversationsGetTeamsSchema from a dict
admin_conversations_get_teams_schema_from_dict = AdminConversationsGetTeamsSchema.from_dict(admin_conversations_get_teams_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AdminConversationsCreateSchema

Schema for successful response of admin.conversations.create

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | [optional] 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_create_schema import AdminConversationsCreateSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsCreateSchema from a JSON string
admin_conversations_create_schema_instance = AdminConversationsCreateSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsCreateSchema.to_json())

# convert the object into a dict
admin_conversations_create_schema_dict = admin_conversations_create_schema_instance.to_dict()
# create an instance of AdminConversationsCreateSchema from a dict
admin_conversations_create_schema_from_dict = AdminConversationsCreateSchema.from_dict(admin_conversations_create_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



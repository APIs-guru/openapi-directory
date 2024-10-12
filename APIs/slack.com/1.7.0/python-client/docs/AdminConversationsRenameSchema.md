# AdminConversationsRenameSchema

Schema for successful response of admin.conversations.disconnectShared

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_rename_schema import AdminConversationsRenameSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsRenameSchema from a JSON string
admin_conversations_rename_schema_instance = AdminConversationsRenameSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsRenameSchema.to_json())

# convert the object into a dict
admin_conversations_rename_schema_dict = admin_conversations_rename_schema_instance.to_dict()
# create an instance of AdminConversationsRenameSchema from a dict
admin_conversations_rename_schema_from_dict = AdminConversationsRenameSchema.from_dict(admin_conversations_rename_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



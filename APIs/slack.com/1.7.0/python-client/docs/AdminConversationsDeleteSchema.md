# AdminConversationsDeleteSchema

Schema for successful response of admin.conversations.delete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_delete_schema import AdminConversationsDeleteSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsDeleteSchema from a JSON string
admin_conversations_delete_schema_instance = AdminConversationsDeleteSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsDeleteSchema.to_json())

# convert the object into a dict
admin_conversations_delete_schema_dict = admin_conversations_delete_schema_instance.to_dict()
# create an instance of AdminConversationsDeleteSchema from a dict
admin_conversations_delete_schema_from_dict = AdminConversationsDeleteSchema.from_dict(admin_conversations_delete_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AdminConversationsArchiveSchema

Schema for successful response of admin.conversations.archive

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_archive_schema import AdminConversationsArchiveSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsArchiveSchema from a JSON string
admin_conversations_archive_schema_instance = AdminConversationsArchiveSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsArchiveSchema.to_json())

# convert the object into a dict
admin_conversations_archive_schema_dict = admin_conversations_archive_schema_instance.to_dict()
# create an instance of AdminConversationsArchiveSchema from a dict
admin_conversations_archive_schema_from_dict = AdminConversationsArchiveSchema.from_dict(admin_conversations_archive_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



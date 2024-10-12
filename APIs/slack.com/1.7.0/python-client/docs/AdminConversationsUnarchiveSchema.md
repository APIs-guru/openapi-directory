# AdminConversationsUnarchiveSchema

Schema for successful response of admin.conversations.unarchive

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_unarchive_schema import AdminConversationsUnarchiveSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsUnarchiveSchema from a JSON string
admin_conversations_unarchive_schema_instance = AdminConversationsUnarchiveSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsUnarchiveSchema.to_json())

# convert the object into a dict
admin_conversations_unarchive_schema_dict = admin_conversations_unarchive_schema_instance.to_dict()
# create an instance of AdminConversationsUnarchiveSchema from a dict
admin_conversations_unarchive_schema_from_dict = AdminConversationsUnarchiveSchema.from_dict(admin_conversations_unarchive_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



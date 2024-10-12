# AdminConversationsUnarchiveErrorSchema

Schema for error response from admin.conversations.getConversationPrefs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_unarchive_error_schema import AdminConversationsUnarchiveErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsUnarchiveErrorSchema from a JSON string
admin_conversations_unarchive_error_schema_instance = AdminConversationsUnarchiveErrorSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsUnarchiveErrorSchema.to_json())

# convert the object into a dict
admin_conversations_unarchive_error_schema_dict = admin_conversations_unarchive_error_schema_instance.to_dict()
# create an instance of AdminConversationsUnarchiveErrorSchema from a dict
admin_conversations_unarchive_error_schema_from_dict = AdminConversationsUnarchiveErrorSchema.from_dict(admin_conversations_unarchive_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



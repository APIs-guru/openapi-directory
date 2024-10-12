# AdminConversationsDeleteErrorSchema

Schema for error response from admin.conversations.delete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_delete_error_schema import AdminConversationsDeleteErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsDeleteErrorSchema from a JSON string
admin_conversations_delete_error_schema_instance = AdminConversationsDeleteErrorSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsDeleteErrorSchema.to_json())

# convert the object into a dict
admin_conversations_delete_error_schema_dict = admin_conversations_delete_error_schema_instance.to_dict()
# create an instance of AdminConversationsDeleteErrorSchema from a dict
admin_conversations_delete_error_schema_from_dict = AdminConversationsDeleteErrorSchema.from_dict(admin_conversations_delete_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



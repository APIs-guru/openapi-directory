# AdminConversationsDisconnectSharedErrorSchema

Schema for error response from admin.conversations.disconnectShared

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_disconnect_shared_error_schema import AdminConversationsDisconnectSharedErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsDisconnectSharedErrorSchema from a JSON string
admin_conversations_disconnect_shared_error_schema_instance = AdminConversationsDisconnectSharedErrorSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsDisconnectSharedErrorSchema.to_json())

# convert the object into a dict
admin_conversations_disconnect_shared_error_schema_dict = admin_conversations_disconnect_shared_error_schema_instance.to_dict()
# create an instance of AdminConversationsDisconnectSharedErrorSchema from a dict
admin_conversations_disconnect_shared_error_schema_from_dict = AdminConversationsDisconnectSharedErrorSchema.from_dict(admin_conversations_disconnect_shared_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



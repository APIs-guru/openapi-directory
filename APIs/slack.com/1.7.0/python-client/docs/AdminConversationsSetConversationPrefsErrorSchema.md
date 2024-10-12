# AdminConversationsSetConversationPrefsErrorSchema

Schema for error response from admin.conversations.setConversationPrefs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_set_conversation_prefs_error_schema import AdminConversationsSetConversationPrefsErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsSetConversationPrefsErrorSchema from a JSON string
admin_conversations_set_conversation_prefs_error_schema_instance = AdminConversationsSetConversationPrefsErrorSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsSetConversationPrefsErrorSchema.to_json())

# convert the object into a dict
admin_conversations_set_conversation_prefs_error_schema_dict = admin_conversations_set_conversation_prefs_error_schema_instance.to_dict()
# create an instance of AdminConversationsSetConversationPrefsErrorSchema from a dict
admin_conversations_set_conversation_prefs_error_schema_from_dict = AdminConversationsSetConversationPrefsErrorSchema.from_dict(admin_conversations_set_conversation_prefs_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



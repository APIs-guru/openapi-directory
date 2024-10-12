# AdminConversationsSetConversationPrefsSchema

Schema for successful response of admin.conversations.setConversationPrefs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_set_conversation_prefs_schema import AdminConversationsSetConversationPrefsSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsSetConversationPrefsSchema from a JSON string
admin_conversations_set_conversation_prefs_schema_instance = AdminConversationsSetConversationPrefsSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsSetConversationPrefsSchema.to_json())

# convert the object into a dict
admin_conversations_set_conversation_prefs_schema_dict = admin_conversations_set_conversation_prefs_schema_instance.to_dict()
# create an instance of AdminConversationsSetConversationPrefsSchema from a dict
admin_conversations_set_conversation_prefs_schema_from_dict = AdminConversationsSetConversationPrefsSchema.from_dict(admin_conversations_set_conversation_prefs_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



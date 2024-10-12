# AdminConversationsGetConversationPrefsSchema

Schema for successful response of admin.conversations.getConversationPrefs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**prefs** | [**AdminConversationsGetConversationPrefsSchemaPrefs**](AdminConversationsGetConversationPrefsSchemaPrefs.md) |  | [optional] 

## Example

```python
from openapi_client.models.admin_conversations_get_conversation_prefs_schema import AdminConversationsGetConversationPrefsSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsGetConversationPrefsSchema from a JSON string
admin_conversations_get_conversation_prefs_schema_instance = AdminConversationsGetConversationPrefsSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsGetConversationPrefsSchema.to_json())

# convert the object into a dict
admin_conversations_get_conversation_prefs_schema_dict = admin_conversations_get_conversation_prefs_schema_instance.to_dict()
# create an instance of AdminConversationsGetConversationPrefsSchema from a dict
admin_conversations_get_conversation_prefs_schema_from_dict = AdminConversationsGetConversationPrefsSchema.from_dict(admin_conversations_get_conversation_prefs_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



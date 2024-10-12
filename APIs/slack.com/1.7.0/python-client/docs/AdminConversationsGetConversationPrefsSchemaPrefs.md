# AdminConversationsGetConversationPrefsSchemaPrefs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_thread** | [**AdminConversationsGetConversationPrefsSchemaPrefsCanThread**](AdminConversationsGetConversationPrefsSchemaPrefsCanThread.md) |  | [optional] 
**who_can_post** | [**AdminConversationsGetConversationPrefsSchemaPrefsCanThread**](AdminConversationsGetConversationPrefsSchemaPrefsCanThread.md) |  | [optional] 

## Example

```python
from openapi_client.models.admin_conversations_get_conversation_prefs_schema_prefs import AdminConversationsGetConversationPrefsSchemaPrefs

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsGetConversationPrefsSchemaPrefs from a JSON string
admin_conversations_get_conversation_prefs_schema_prefs_instance = AdminConversationsGetConversationPrefsSchemaPrefs.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsGetConversationPrefsSchemaPrefs.to_json())

# convert the object into a dict
admin_conversations_get_conversation_prefs_schema_prefs_dict = admin_conversations_get_conversation_prefs_schema_prefs_instance.to_dict()
# create an instance of AdminConversationsGetConversationPrefsSchemaPrefs from a dict
admin_conversations_get_conversation_prefs_schema_prefs_from_dict = AdminConversationsGetConversationPrefsSchemaPrefs.from_dict(admin_conversations_get_conversation_prefs_schema_prefs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



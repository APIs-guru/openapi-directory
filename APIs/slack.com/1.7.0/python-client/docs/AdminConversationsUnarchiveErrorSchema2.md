# AdminConversationsUnarchiveErrorSchema2

Schema for error response from admin.conversations.unarchive

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_unarchive_error_schema2 import AdminConversationsUnarchiveErrorSchema2

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsUnarchiveErrorSchema2 from a JSON string
admin_conversations_unarchive_error_schema2_instance = AdminConversationsUnarchiveErrorSchema2.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsUnarchiveErrorSchema2.to_json())

# convert the object into a dict
admin_conversations_unarchive_error_schema2_dict = admin_conversations_unarchive_error_schema2_instance.to_dict()
# create an instance of AdminConversationsUnarchiveErrorSchema2 from a dict
admin_conversations_unarchive_error_schema2_from_dict = AdminConversationsUnarchiveErrorSchema2.from_dict(admin_conversations_unarchive_error_schema2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



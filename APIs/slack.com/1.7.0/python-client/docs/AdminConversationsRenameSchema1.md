# AdminConversationsRenameSchema1

Schema for successful response of admin.conversations.rename

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_rename_schema1 import AdminConversationsRenameSchema1

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsRenameSchema1 from a JSON string
admin_conversations_rename_schema1_instance = AdminConversationsRenameSchema1.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsRenameSchema1.to_json())

# convert the object into a dict
admin_conversations_rename_schema1_dict = admin_conversations_rename_schema1_instance.to_dict()
# create an instance of AdminConversationsRenameSchema1 from a dict
admin_conversations_rename_schema1_from_dict = AdminConversationsRenameSchema1.from_dict(admin_conversations_rename_schema1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



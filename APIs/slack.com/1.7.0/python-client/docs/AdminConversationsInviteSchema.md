# AdminConversationsInviteSchema

Schema for successful response of admin.conversations.invite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_invite_schema import AdminConversationsInviteSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsInviteSchema from a JSON string
admin_conversations_invite_schema_instance = AdminConversationsInviteSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsInviteSchema.to_json())

# convert the object into a dict
admin_conversations_invite_schema_dict = admin_conversations_invite_schema_instance.to_dict()
# create an instance of AdminConversationsInviteSchema from a dict
admin_conversations_invite_schema_from_dict = AdminConversationsInviteSchema.from_dict(admin_conversations_invite_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



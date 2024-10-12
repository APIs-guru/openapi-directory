# AdminConversationsConvertToPrivateSchema

Schema for successful response of admin.conversations.convertToPrivate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_convert_to_private_schema import AdminConversationsConvertToPrivateSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsConvertToPrivateSchema from a JSON string
admin_conversations_convert_to_private_schema_instance = AdminConversationsConvertToPrivateSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsConvertToPrivateSchema.to_json())

# convert the object into a dict
admin_conversations_convert_to_private_schema_dict = admin_conversations_convert_to_private_schema_instance.to_dict()
# create an instance of AdminConversationsConvertToPrivateSchema from a dict
admin_conversations_convert_to_private_schema_from_dict = AdminConversationsConvertToPrivateSchema.from_dict(admin_conversations_convert_to_private_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



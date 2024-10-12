# AdminConversationsConvertToPrivateErrorSchema

Schema for error response from admin.conversations.convertToPrivate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.admin_conversations_convert_to_private_error_schema import AdminConversationsConvertToPrivateErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsConvertToPrivateErrorSchema from a JSON string
admin_conversations_convert_to_private_error_schema_instance = AdminConversationsConvertToPrivateErrorSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsConvertToPrivateErrorSchema.to_json())

# convert the object into a dict
admin_conversations_convert_to_private_error_schema_dict = admin_conversations_convert_to_private_error_schema_instance.to_dict()
# create an instance of AdminConversationsConvertToPrivateErrorSchema from a dict
admin_conversations_convert_to_private_error_schema_from_dict = AdminConversationsConvertToPrivateErrorSchema.from_dict(admin_conversations_convert_to_private_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



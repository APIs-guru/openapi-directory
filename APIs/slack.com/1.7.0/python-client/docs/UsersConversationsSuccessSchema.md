# UsersConversationsSuccessSchema

Schema for successful response from users.conversations method. Returned conversation objects do not include `num_members` or `is_member`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **List[List[ObjsConversationInner]]** |  | 
**ok** | **bool** |  | 
**response_metadata** | [**AdminConversationsGetTeamsSchemaResponseMetadata**](AdminConversationsGetTeamsSchemaResponseMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.users_conversations_success_schema import UsersConversationsSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersConversationsSuccessSchema from a JSON string
users_conversations_success_schema_instance = UsersConversationsSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(UsersConversationsSuccessSchema.to_json())

# convert the object into a dict
users_conversations_success_schema_dict = users_conversations_success_schema_instance.to_dict()
# create an instance of UsersConversationsSuccessSchema from a dict
users_conversations_success_schema_from_dict = UsersConversationsSuccessSchema.from_dict(users_conversations_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



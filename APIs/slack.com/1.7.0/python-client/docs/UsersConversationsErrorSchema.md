# UsersConversationsErrorSchema

Schema for error response from users.conversations method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.users_conversations_error_schema import UsersConversationsErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersConversationsErrorSchema from a JSON string
users_conversations_error_schema_instance = UsersConversationsErrorSchema.from_json(json)
# print the JSON string representation of the object
print(UsersConversationsErrorSchema.to_json())

# convert the object into a dict
users_conversations_error_schema_dict = users_conversations_error_schema_instance.to_dict()
# create an instance of UsersConversationsErrorSchema from a dict
users_conversations_error_schema_from_dict = UsersConversationsErrorSchema.from_dict(users_conversations_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



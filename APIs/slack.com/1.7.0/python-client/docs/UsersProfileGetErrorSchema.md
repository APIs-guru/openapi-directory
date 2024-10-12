# UsersProfileGetErrorSchema

Schema for error response from users.profile.get method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.users_profile_get_error_schema import UsersProfileGetErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersProfileGetErrorSchema from a JSON string
users_profile_get_error_schema_instance = UsersProfileGetErrorSchema.from_json(json)
# print the JSON string representation of the object
print(UsersProfileGetErrorSchema.to_json())

# convert the object into a dict
users_profile_get_error_schema_dict = users_profile_get_error_schema_instance.to_dict()
# create an instance of UsersProfileGetErrorSchema from a dict
users_profile_get_error_schema_from_dict = UsersProfileGetErrorSchema.from_dict(users_profile_get_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



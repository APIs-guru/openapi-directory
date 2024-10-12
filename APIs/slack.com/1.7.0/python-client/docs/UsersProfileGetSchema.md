# UsersProfileGetSchema

Schema for successful response from users.profile.get method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**profile** | [**ObjsUserProfile**](ObjsUserProfile.md) |  | 

## Example

```python
from openapi_client.models.users_profile_get_schema import UsersProfileGetSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersProfileGetSchema from a JSON string
users_profile_get_schema_instance = UsersProfileGetSchema.from_json(json)
# print the JSON string representation of the object
print(UsersProfileGetSchema.to_json())

# convert the object into a dict
users_profile_get_schema_dict = users_profile_get_schema_instance.to_dict()
# create an instance of UsersProfileGetSchema from a dict
users_profile_get_schema_from_dict = UsersProfileGetSchema.from_dict(users_profile_get_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



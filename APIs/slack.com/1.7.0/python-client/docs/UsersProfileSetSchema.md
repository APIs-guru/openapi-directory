# UsersProfileSetSchema

Schema for successful response from users.profile.set method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_pending** | **str** |  | [optional] 
**ok** | **bool** |  | 
**profile** | [**ObjsUserProfile**](ObjsUserProfile.md) |  | 
**username** | **str** |  | 

## Example

```python
from openapi_client.models.users_profile_set_schema import UsersProfileSetSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersProfileSetSchema from a JSON string
users_profile_set_schema_instance = UsersProfileSetSchema.from_json(json)
# print the JSON string representation of the object
print(UsersProfileSetSchema.to_json())

# convert the object into a dict
users_profile_set_schema_dict = users_profile_set_schema_instance.to_dict()
# create an instance of UsersProfileSetSchema from a dict
users_profile_set_schema_from_dict = UsersProfileSetSchema.from_dict(users_profile_set_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



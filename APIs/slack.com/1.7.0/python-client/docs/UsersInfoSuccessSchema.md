# UsersInfoSuccessSchema

Schema for successful response from users.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**user** | [**List[ObjsUserInner]**](ObjsUserInner.md) |  | 

## Example

```python
from openapi_client.models.users_info_success_schema import UsersInfoSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersInfoSuccessSchema from a JSON string
users_info_success_schema_instance = UsersInfoSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(UsersInfoSuccessSchema.to_json())

# convert the object into a dict
users_info_success_schema_dict = users_info_success_schema_instance.to_dict()
# create an instance of UsersInfoSuccessSchema from a dict
users_info_success_schema_from_dict = UsersInfoSuccessSchema.from_dict(users_info_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



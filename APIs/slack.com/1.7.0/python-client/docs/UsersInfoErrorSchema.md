# UsersInfoErrorSchema

Schema for error response from users.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** |  | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.users_info_error_schema import UsersInfoErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersInfoErrorSchema from a JSON string
users_info_error_schema_instance = UsersInfoErrorSchema.from_json(json)
# print the JSON string representation of the object
print(UsersInfoErrorSchema.to_json())

# convert the object into a dict
users_info_error_schema_dict = users_info_error_schema_instance.to_dict()
# create an instance of UsersInfoErrorSchema from a dict
users_info_error_schema_from_dict = UsersInfoErrorSchema.from_dict(users_info_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



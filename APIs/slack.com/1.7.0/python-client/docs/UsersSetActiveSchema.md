# UsersSetActiveSchema

Schema for successful response from users.setActive method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.users_set_active_schema import UsersSetActiveSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersSetActiveSchema from a JSON string
users_set_active_schema_instance = UsersSetActiveSchema.from_json(json)
# print the JSON string representation of the object
print(UsersSetActiveSchema.to_json())

# convert the object into a dict
users_set_active_schema_dict = users_set_active_schema_instance.to_dict()
# create an instance of UsersSetActiveSchema from a dict
users_set_active_schema_from_dict = UsersSetActiveSchema.from_dict(users_set_active_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



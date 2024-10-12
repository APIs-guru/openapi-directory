# UsersListSchema

Schema for successful response from users.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_ts** | **int** |  | 
**members** | **List[List[ObjsUserInner]]** |  | 
**ok** | **bool** |  | 
**response_metadata** | [**List[ObjsResponseMetadataInner]**](ObjsResponseMetadataInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.users_list_schema import UsersListSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersListSchema from a JSON string
users_list_schema_instance = UsersListSchema.from_json(json)
# print the JSON string representation of the object
print(UsersListSchema.to_json())

# convert the object into a dict
users_list_schema_dict = users_list_schema_instance.to_dict()
# create an instance of UsersListSchema from a dict
users_list_schema_from_dict = UsersListSchema.from_dict(users_list_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



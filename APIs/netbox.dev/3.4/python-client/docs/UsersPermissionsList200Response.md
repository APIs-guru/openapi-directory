# UsersPermissionsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[ObjectPermission]**](ObjectPermission.md) |  | 

## Example

```python
from openapi_client.models.users_permissions_list200_response import UsersPermissionsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UsersPermissionsList200Response from a JSON string
users_permissions_list200_response_instance = UsersPermissionsList200Response.from_json(json)
# print the JSON string representation of the object
print(UsersPermissionsList200Response.to_json())

# convert the object into a dict
users_permissions_list200_response_dict = users_permissions_list200_response_instance.to_dict()
# create an instance of UsersPermissionsList200Response from a dict
users_permissions_list200_response_from_dict = UsersPermissionsList200Response.from_dict(users_permissions_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



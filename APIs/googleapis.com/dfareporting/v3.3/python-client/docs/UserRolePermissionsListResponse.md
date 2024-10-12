# UserRolePermissionsListResponse

User Role Permission List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#userRolePermissionsListResponse\&quot;. | [optional] 
**user_role_permissions** | [**List[UserRolePermission]**](UserRolePermission.md) | User role permission collection. | [optional] 

## Example

```python
from openapi_client.models.user_role_permissions_list_response import UserRolePermissionsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserRolePermissionsListResponse from a JSON string
user_role_permissions_list_response_instance = UserRolePermissionsListResponse.from_json(json)
# print the JSON string representation of the object
print(UserRolePermissionsListResponse.to_json())

# convert the object into a dict
user_role_permissions_list_response_dict = user_role_permissions_list_response_instance.to_dict()
# create an instance of UserRolePermissionsListResponse from a dict
user_role_permissions_list_response_from_dict = UserRolePermissionsListResponse.from_dict(user_role_permissions_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



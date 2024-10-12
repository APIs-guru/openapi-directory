# UserRolePermissionGroupsListResponse

User Role Permission Group List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#userRolePermissionGroupsListResponse\&quot;. | [optional] 
**user_role_permission_groups** | [**List[UserRolePermissionGroup]**](UserRolePermissionGroup.md) | User role permission group collection. | [optional] 

## Example

```python
from openapi_client.models.user_role_permission_groups_list_response import UserRolePermissionGroupsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserRolePermissionGroupsListResponse from a JSON string
user_role_permission_groups_list_response_instance = UserRolePermissionGroupsListResponse.from_json(json)
# print the JSON string representation of the object
print(UserRolePermissionGroupsListResponse.to_json())

# convert the object into a dict
user_role_permission_groups_list_response_dict = user_role_permission_groups_list_response_instance.to_dict()
# create an instance of UserRolePermissionGroupsListResponse from a dict
user_role_permission_groups_list_response_from_dict = UserRolePermissionGroupsListResponse.from_dict(user_role_permission_groups_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



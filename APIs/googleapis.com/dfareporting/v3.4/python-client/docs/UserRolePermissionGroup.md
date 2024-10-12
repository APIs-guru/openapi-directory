# UserRolePermissionGroup

Represents a grouping of related user role permissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of this user role permission. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#userRolePermissionGroup\&quot;. | [optional] 
**name** | **str** | Name of this user role permission group. | [optional] 

## Example

```python
from openapi_client.models.user_role_permission_group import UserRolePermissionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of UserRolePermissionGroup from a JSON string
user_role_permission_group_instance = UserRolePermissionGroup.from_json(json)
# print the JSON string representation of the object
print(UserRolePermissionGroup.to_json())

# convert the object into a dict
user_role_permission_group_dict = user_role_permission_group_instance.to_dict()
# create an instance of UserRolePermissionGroup from a dict
user_role_permission_group_from_dict = UserRolePermissionGroup.from_dict(user_role_permission_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



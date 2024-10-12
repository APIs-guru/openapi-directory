# UserRolePermission

Contains properties of a user role permission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | **str** | Levels of availability for a user role permission. | [optional] 
**id** | **str** | ID of this user role permission. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#userRolePermission\&quot;. | [optional] 
**name** | **str** | Name of this user role permission. | [optional] 
**permission_group_id** | **str** | ID of the permission group that this user role permission belongs to. | [optional] 

## Example

```python
from openapi_client.models.user_role_permission import UserRolePermission

# TODO update the JSON string below
json = "{}"
# create an instance of UserRolePermission from a JSON string
user_role_permission_instance = UserRolePermission.from_json(json)
# print the JSON string representation of the object
print(UserRolePermission.to_json())

# convert the object into a dict
user_role_permission_dict = user_role_permission_instance.to_dict()
# create an instance of UserRolePermission from a dict
user_role_permission_from_dict = UserRolePermission.from_dict(user_role_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



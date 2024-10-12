# UserRole

Contains properties of auser role, which is used to manage user access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this user role. This is a read-only field that can be left blank. | [optional] 
**default_user_role** | **bool** | Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions. | [optional] 
**id** | **str** | ID of this user role. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#userRole\&quot;. | [optional] 
**name** | **str** | Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account. | [optional] 
**parent_user_role_id** | **str** | ID of the user role that this user role is based on or copied from. This is a required field. | [optional] 
**permissions** | [**List[UserRolePermission]**](UserRolePermission.md) | List of permissions associated with this user role. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this user role. This is a read-only field that can be left blank. | [optional] 

## Example

```python
from openapi_client.models.user_role import UserRole

# TODO update the JSON string below
json = "{}"
# create an instance of UserRole from a JSON string
user_role_instance = UserRole.from_json(json)
# print the JSON string representation of the object
print(UserRole.to_json())

# convert the object into a dict
user_role_dict = user_role_instance.to_dict()
# create an instance of UserRole from a dict
user_role_from_dict = UserRole.from_dict(user_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



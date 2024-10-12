# RoleRolePrivilegesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privilege_name** | **str** | The name of the privilege. | [optional] 
**service_id** | **str** | The obfuscated ID of the service this privilege is for. This value is returned with [&#x60;Privileges.list()&#x60;](/admin-sdk/directory/v1/reference/privileges/list). | [optional] 

## Example

```python
from openapi_client.models.role_role_privileges_inner import RoleRolePrivilegesInner

# TODO update the JSON string below
json = "{}"
# create an instance of RoleRolePrivilegesInner from a JSON string
role_role_privileges_inner_instance = RoleRolePrivilegesInner.from_json(json)
# print the JSON string representation of the object
print(RoleRolePrivilegesInner.to_json())

# convert the object into a dict
role_role_privileges_inner_dict = role_role_privileges_inner_instance.to_dict()
# create an instance of RoleRolePrivilegesInner from a dict
role_role_privileges_inner_from_dict = RoleRolePrivilegesInner.from_dict(role_role_privileges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



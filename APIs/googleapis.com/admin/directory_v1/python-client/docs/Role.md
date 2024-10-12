# Role


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**is_super_admin_role** | **bool** | Returns &#x60;true&#x60; if the role is a super admin role. | [optional] 
**is_system_role** | **bool** | Returns &#x60;true&#x60; if this is a pre-defined system role. | [optional] 
**kind** | **str** | The type of the API resource. This is always &#x60;admin#directory#role&#x60;. | [optional] [default to 'admin#directory#role']
**role_description** | **str** | A short description of the role. | [optional] 
**role_id** | **str** | ID of the role. | [optional] 
**role_name** | **str** | Name of the role. | [optional] 
**role_privileges** | [**List[RoleRolePrivilegesInner]**](RoleRolePrivilegesInner.md) | The set of privileges that are granted to this role. | [optional] 

## Example

```python
from openapi_client.models.role import Role

# TODO update the JSON string below
json = "{}"
# create an instance of Role from a JSON string
role_instance = Role.from_json(json)
# print the JSON string representation of the object
print(Role.to_json())

# convert the object into a dict
role_dict = role_instance.to_dict()
# create an instance of Role from a dict
role_from_dict = Role.from_dict(role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



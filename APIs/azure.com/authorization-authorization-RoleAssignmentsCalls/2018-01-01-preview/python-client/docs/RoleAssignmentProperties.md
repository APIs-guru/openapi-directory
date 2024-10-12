# RoleAssignmentProperties

Role assignment properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_delegate** | **bool** | The delegation flag used for creating a role assignment | [optional] 
**principal_id** | **str** | The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group. | 
**role_definition_id** | **str** | The role definition ID used in the role assignment. | 

## Example

```python
from openapi_client.models.role_assignment_properties import RoleAssignmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentProperties from a JSON string
role_assignment_properties_instance = RoleAssignmentProperties.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentProperties.to_json())

# convert the object into a dict
role_assignment_properties_dict = role_assignment_properties_instance.to_dict()
# create an instance of RoleAssignmentProperties from a dict
role_assignment_properties_from_dict = RoleAssignmentProperties.from_dict(role_assignment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RoleAssignmentPropertiesWithScope

Role assignment properties with scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal ID. | [optional] 
**role_definition_id** | **str** | The role definition ID. | [optional] 
**scope** | **str** | The role assignment scope. | [optional] 

## Example

```python
from openapi_client.models.role_assignment_properties_with_scope import RoleAssignmentPropertiesWithScope

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentPropertiesWithScope from a JSON string
role_assignment_properties_with_scope_instance = RoleAssignmentPropertiesWithScope.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentPropertiesWithScope.to_json())

# convert the object into a dict
role_assignment_properties_with_scope_dict = role_assignment_properties_with_scope_instance.to_dict()
# create an instance of RoleAssignmentPropertiesWithScope from a dict
role_assignment_properties_with_scope_from_dict = RoleAssignmentPropertiesWithScope.from_dict(role_assignment_properties_with_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



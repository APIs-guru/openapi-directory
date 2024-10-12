# RoleAssignment

Azure role assignment details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ARM Id of the role assignment. | [optional] 
**name** | **str** | The name of the role assignment. | [optional] 
**principal_id** | **str** | Principal Id. | [optional] 
**role_definition_id** | **str** | Role definition id. | [optional] 
**scope** | **str** | Role assignment scope. | [optional] 

## Example

```python
from openapi_client.models.role_assignment import RoleAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignment from a JSON string
role_assignment_instance = RoleAssignment.from_json(json)
# print the JSON string representation of the object
print(RoleAssignment.to_json())

# convert the object into a dict
role_assignment_dict = role_assignment_instance.to_dict()
# create an instance of RoleAssignment from a dict
role_assignment_from_dict = RoleAssignment.from_dict(role_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



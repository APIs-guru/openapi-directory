# RoleAssignment

Role Assignments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The role assignment ID. | [optional] [readonly] 
**name** | **str** | The role assignment name. | [optional] [readonly] 
**properties** | [**RoleAssignmentPropertiesWithScope**](RoleAssignmentPropertiesWithScope.md) |  | [optional] 
**type** | **str** | The role assignment type. | [optional] [readonly] 

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



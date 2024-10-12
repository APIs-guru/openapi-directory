# RoleAssignmentCreateParameters

Role assignment create parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RoleAssignmentProperties**](RoleAssignmentProperties.md) |  | 

## Example

```python
from openapi_client.models.role_assignment_create_parameters import RoleAssignmentCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentCreateParameters from a JSON string
role_assignment_create_parameters_instance = RoleAssignmentCreateParameters.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentCreateParameters.to_json())

# convert the object into a dict
role_assignment_create_parameters_dict = role_assignment_create_parameters_instance.to_dict()
# create an instance of RoleAssignmentCreateParameters from a dict
role_assignment_create_parameters_from_dict = RoleAssignmentCreateParameters.from_dict(role_assignment_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



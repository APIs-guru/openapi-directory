# RoleAssignmentsCreate400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | A human-readable explanation specific to this occurrence of the problem. | [optional] 
**instance** | **str** | A URI reference that identifies the specific occurrence of the problem.  It may or may not yield further information if dereferenced. | [optional] 
**status** | **object** |  | [optional] 
**title** | **object** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.role_assignments_create400_response import RoleAssignmentsCreate400Response

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentsCreate400Response from a JSON string
role_assignments_create400_response_instance = RoleAssignmentsCreate400Response.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentsCreate400Response.to_json())

# convert the object into a dict
role_assignments_create400_response_dict = role_assignments_create400_response_instance.to_dict()
# create an instance of RoleAssignmentsCreate400Response from a dict
role_assignments_create400_response_from_dict = RoleAssignmentsCreate400Response.from_dict(role_assignments_create400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



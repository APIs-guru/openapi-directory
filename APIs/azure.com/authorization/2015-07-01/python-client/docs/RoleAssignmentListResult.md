# RoleAssignmentListResult

Role assignment list operation result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[RoleAssignment]**](RoleAssignment.md) | Role assignment list. | [optional] 

## Example

```python
from openapi_client.models.role_assignment_list_result import RoleAssignmentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentListResult from a JSON string
role_assignment_list_result_instance = RoleAssignmentListResult.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentListResult.to_json())

# convert the object into a dict
role_assignment_list_result_dict = role_assignment_list_result_instance.to_dict()
# create an instance of RoleAssignmentListResult from a dict
role_assignment_list_result_from_dict = RoleAssignmentListResult.from_dict(role_assignment_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



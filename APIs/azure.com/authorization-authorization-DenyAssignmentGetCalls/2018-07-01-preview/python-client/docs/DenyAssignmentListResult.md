# DenyAssignmentListResult

Deny assignment list operation result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[DenyAssignment]**](DenyAssignment.md) | Deny assignment list. | [optional] 

## Example

```python
from openapi_client.models.deny_assignment_list_result import DenyAssignmentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DenyAssignmentListResult from a JSON string
deny_assignment_list_result_instance = DenyAssignmentListResult.from_json(json)
# print the JSON string representation of the object
print(DenyAssignmentListResult.to_json())

# convert the object into a dict
deny_assignment_list_result_dict = deny_assignment_list_result_instance.to_dict()
# create an instance of DenyAssignmentListResult from a dict
deny_assignment_list_result_from_dict = DenyAssignmentListResult.from_dict(deny_assignment_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



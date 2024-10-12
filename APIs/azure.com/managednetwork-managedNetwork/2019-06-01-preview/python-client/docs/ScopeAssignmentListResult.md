# ScopeAssignmentListResult

Result of the request to list ScopeAssignment. It contains a list of groups and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[ScopeAssignment]**](ScopeAssignment.md) | Gets a page of ScopeAssignment | [optional] 

## Example

```python
from openapi_client.models.scope_assignment_list_result import ScopeAssignmentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeAssignmentListResult from a JSON string
scope_assignment_list_result_instance = ScopeAssignmentListResult.from_json(json)
# print the JSON string representation of the object
print(ScopeAssignmentListResult.to_json())

# convert the object into a dict
scope_assignment_list_result_dict = scope_assignment_list_result_instance.to_dict()
# create an instance of ScopeAssignmentListResult from a dict
scope_assignment_list_result_from_dict = ScopeAssignmentListResult.from_dict(scope_assignment_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



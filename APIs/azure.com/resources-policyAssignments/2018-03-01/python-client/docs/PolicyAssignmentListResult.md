# PolicyAssignmentListResult

List of policy assignments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[PolicyAssignment]**](PolicyAssignment.md) | An array of policy assignments. | [optional] 

## Example

```python
from openapi_client.models.policy_assignment_list_result import PolicyAssignmentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyAssignmentListResult from a JSON string
policy_assignment_list_result_instance = PolicyAssignmentListResult.from_json(json)
# print the JSON string representation of the object
print(PolicyAssignmentListResult.to_json())

# convert the object into a dict
policy_assignment_list_result_dict = policy_assignment_list_result_instance.to_dict()
# create an instance of PolicyAssignmentListResult from a dict
policy_assignment_list_result_from_dict = PolicyAssignmentListResult.from_dict(policy_assignment_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



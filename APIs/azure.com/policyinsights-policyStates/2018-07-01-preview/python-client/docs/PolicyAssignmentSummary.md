# PolicyAssignmentSummary

Policy assignment summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_assignment_id** | **str** | Policy assignment ID. | [optional] 
**policy_definitions** | [**List[PolicyDefinitionSummary]**](PolicyDefinitionSummary.md) | Policy definitions summary. | [optional] 
**policy_set_definition_id** | **str** | Policy set definition ID, if the policy assignment is for a policy set. | [optional] 
**results** | [**SummaryResults**](SummaryResults.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_assignment_summary import PolicyAssignmentSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyAssignmentSummary from a JSON string
policy_assignment_summary_instance = PolicyAssignmentSummary.from_json(json)
# print the JSON string representation of the object
print(PolicyAssignmentSummary.to_json())

# convert the object into a dict
policy_assignment_summary_dict = policy_assignment_summary_instance.to_dict()
# create an instance of PolicyAssignmentSummary from a dict
policy_assignment_summary_from_dict = PolicyAssignmentSummary.from_dict(policy_assignment_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



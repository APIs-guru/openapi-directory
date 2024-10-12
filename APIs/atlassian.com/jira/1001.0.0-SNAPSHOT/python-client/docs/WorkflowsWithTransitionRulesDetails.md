# WorkflowsWithTransitionRulesDetails

Details of workflows and their transition rules to delete.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflows** | [**List[WorkflowTransitionRulesDetails]**](WorkflowTransitionRulesDetails.md) | The list of workflows with transition rules to delete. | 

## Example

```python
from openapi_client.models.workflows_with_transition_rules_details import WorkflowsWithTransitionRulesDetails

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowsWithTransitionRulesDetails from a JSON string
workflows_with_transition_rules_details_instance = WorkflowsWithTransitionRulesDetails.from_json(json)
# print the JSON string representation of the object
print(WorkflowsWithTransitionRulesDetails.to_json())

# convert the object into a dict
workflows_with_transition_rules_details_dict = workflows_with_transition_rules_details_instance.to_dict()
# create an instance of WorkflowsWithTransitionRulesDetails from a dict
workflows_with_transition_rules_details_from_dict = WorkflowsWithTransitionRulesDetails.from_dict(workflows_with_transition_rules_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



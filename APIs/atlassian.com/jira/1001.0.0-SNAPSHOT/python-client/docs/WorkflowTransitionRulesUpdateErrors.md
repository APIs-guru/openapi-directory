# WorkflowTransitionRulesUpdateErrors

Details of any errors encountered while updating workflow transition rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_results** | [**List[WorkflowTransitionRulesUpdateErrorDetails]**](WorkflowTransitionRulesUpdateErrorDetails.md) | A list of workflows. | 

## Example

```python
from openapi_client.models.workflow_transition_rules_update_errors import WorkflowTransitionRulesUpdateErrors

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTransitionRulesUpdateErrors from a JSON string
workflow_transition_rules_update_errors_instance = WorkflowTransitionRulesUpdateErrors.from_json(json)
# print the JSON string representation of the object
print(WorkflowTransitionRulesUpdateErrors.to_json())

# convert the object into a dict
workflow_transition_rules_update_errors_dict = workflow_transition_rules_update_errors_instance.to_dict()
# create an instance of WorkflowTransitionRulesUpdateErrors from a dict
workflow_transition_rules_update_errors_from_dict = WorkflowTransitionRulesUpdateErrors.from_dict(workflow_transition_rules_update_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



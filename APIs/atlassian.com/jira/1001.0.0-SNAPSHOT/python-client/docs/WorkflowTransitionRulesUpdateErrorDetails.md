# WorkflowTransitionRulesUpdateErrorDetails

Details of any errors encountered while updating workflow transition rules for a workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule_update_errors** | **Dict[str, List[str]]** | A list of transition rule update errors, indexed by the transition rule ID. Any transition rule that appears here wasn&#39;t updated. | 
**update_errors** | **List[str]** | The list of errors that specify why the workflow update failed. The workflow was not updated if the list contains any entries. | 
**workflow_id** | [**WorkflowId**](WorkflowId.md) |  | 

## Example

```python
from openapi_client.models.workflow_transition_rules_update_error_details import WorkflowTransitionRulesUpdateErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTransitionRulesUpdateErrorDetails from a JSON string
workflow_transition_rules_update_error_details_instance = WorkflowTransitionRulesUpdateErrorDetails.from_json(json)
# print the JSON string representation of the object
print(WorkflowTransitionRulesUpdateErrorDetails.to_json())

# convert the object into a dict
workflow_transition_rules_update_error_details_dict = workflow_transition_rules_update_error_details_instance.to_dict()
# create an instance of WorkflowTransitionRulesUpdateErrorDetails from a dict
workflow_transition_rules_update_error_details_from_dict = WorkflowTransitionRulesUpdateErrorDetails.from_dict(workflow_transition_rules_update_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorkflowTransitionRules

A workflow with transition rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[AppWorkflowTransitionRule]**](AppWorkflowTransitionRule.md) | The list of conditions within the workflow. | [optional] 
**post_functions** | [**List[AppWorkflowTransitionRule]**](AppWorkflowTransitionRule.md) | The list of post functions within the workflow. | [optional] 
**validators** | [**List[AppWorkflowTransitionRule]**](AppWorkflowTransitionRule.md) | The list of validators within the workflow. | [optional] 
**workflow_id** | [**WorkflowId**](WorkflowId.md) |  | 

## Example

```python
from openapi_client.models.workflow_transition_rules import WorkflowTransitionRules

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTransitionRules from a JSON string
workflow_transition_rules_instance = WorkflowTransitionRules.from_json(json)
# print the JSON string representation of the object
print(WorkflowTransitionRules.to_json())

# convert the object into a dict
workflow_transition_rules_dict = workflow_transition_rules_instance.to_dict()
# create an instance of WorkflowTransitionRules from a dict
workflow_transition_rules_from_dict = WorkflowTransitionRules.from_dict(workflow_transition_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



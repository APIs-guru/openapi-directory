# WorkflowTransitionRulesUpdate

Details about a workflow configuration update request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflows** | [**List[WorkflowTransitionRules]**](WorkflowTransitionRules.md) | The list of workflows with transition rules to update. | 

## Example

```python
from openapi_client.models.workflow_transition_rules_update import WorkflowTransitionRulesUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTransitionRulesUpdate from a JSON string
workflow_transition_rules_update_instance = WorkflowTransitionRulesUpdate.from_json(json)
# print the JSON string representation of the object
print(WorkflowTransitionRulesUpdate.to_json())

# convert the object into a dict
workflow_transition_rules_update_dict = workflow_transition_rules_update_instance.to_dict()
# create an instance of WorkflowTransitionRulesUpdate from a dict
workflow_transition_rules_update_from_dict = WorkflowTransitionRulesUpdate.from_dict(workflow_transition_rules_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



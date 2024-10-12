# AppWorkflowTransitionRule

A workflow transition rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**RuleConfiguration**](RuleConfiguration.md) |  | 
**id** | **str** | The ID of the transition rule. | 
**key** | **str** | The key of the rule, as defined in the Connect or the Forge app descriptor. | [readonly] 
**transition** | [**WorkflowTransition**](WorkflowTransition.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_workflow_transition_rule import AppWorkflowTransitionRule

# TODO update the JSON string below
json = "{}"
# create an instance of AppWorkflowTransitionRule from a JSON string
app_workflow_transition_rule_instance = AppWorkflowTransitionRule.from_json(json)
# print the JSON string representation of the object
print(AppWorkflowTransitionRule.to_json())

# convert the object into a dict
app_workflow_transition_rule_dict = app_workflow_transition_rule_instance.to_dict()
# create an instance of AppWorkflowTransitionRule from a dict
app_workflow_transition_rule_from_dict = AppWorkflowTransitionRule.from_dict(app_workflow_transition_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



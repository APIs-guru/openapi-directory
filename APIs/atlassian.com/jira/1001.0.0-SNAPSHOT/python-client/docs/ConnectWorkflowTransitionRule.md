# ConnectWorkflowTransitionRule

A workflow transition rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**RuleConfiguration**](RuleConfiguration.md) |  | 
**id** | **str** | The ID of the transition rule. | 
**key** | **str** | The key of the rule, as defined in the Connect app descriptor. | 
**transition** | [**WorkflowTransition**](WorkflowTransition.md) |  | [optional] 

## Example

```python
from openapi_client.models.connect_workflow_transition_rule import ConnectWorkflowTransitionRule

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectWorkflowTransitionRule from a JSON string
connect_workflow_transition_rule_instance = ConnectWorkflowTransitionRule.from_json(json)
# print the JSON string representation of the object
print(ConnectWorkflowTransitionRule.to_json())

# convert the object into a dict
connect_workflow_transition_rule_dict = connect_workflow_transition_rule_instance.to_dict()
# create an instance of ConnectWorkflowTransitionRule from a dict
connect_workflow_transition_rule_from_dict = ConnectWorkflowTransitionRule.from_dict(connect_workflow_transition_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorkflowTransitionRule

A workflow transition rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | **object** | EXPERIMENTAL. The configuration of the transition rule. | [optional] 
**type** | **str** | The type of the transition rule. | 

## Example

```python
from openapi_client.models.workflow_transition_rule import WorkflowTransitionRule

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTransitionRule from a JSON string
workflow_transition_rule_instance = WorkflowTransitionRule.from_json(json)
# print the JSON string representation of the object
print(WorkflowTransitionRule.to_json())

# convert the object into a dict
workflow_transition_rule_dict = workflow_transition_rule_instance.to_dict()
# create an instance of WorkflowTransitionRule from a dict
workflow_transition_rule_from_dict = WorkflowTransitionRule.from_dict(workflow_transition_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorkflowRules

A collection of transition rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions_tree** | [**WorkflowCondition**](WorkflowCondition.md) |  | [optional] 
**post_functions** | [**List[WorkflowTransitionRule]**](WorkflowTransitionRule.md) | The workflow post functions. | [optional] 
**validators** | [**List[WorkflowTransitionRule]**](WorkflowTransitionRule.md) | The workflow validators. | [optional] 

## Example

```python
from openapi_client.models.workflow_rules import WorkflowRules

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRules from a JSON string
workflow_rules_instance = WorkflowRules.from_json(json)
# print the JSON string representation of the object
print(WorkflowRules.to_json())

# convert the object into a dict
workflow_rules_dict = workflow_rules_instance.to_dict()
# create an instance of WorkflowRules from a dict
workflow_rules_from_dict = WorkflowRules.from_dict(workflow_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



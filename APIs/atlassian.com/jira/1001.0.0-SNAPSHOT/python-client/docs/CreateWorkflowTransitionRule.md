# CreateWorkflowTransitionRule

A workflow transition rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | **Dict[str, object]** | EXPERIMENTAL. The configuration of the transition rule. | [optional] 
**type** | **str** | The type of the transition rule. | 

## Example

```python
from openapi_client.models.create_workflow_transition_rule import CreateWorkflowTransitionRule

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkflowTransitionRule from a JSON string
create_workflow_transition_rule_instance = CreateWorkflowTransitionRule.from_json(json)
# print the JSON string representation of the object
print(CreateWorkflowTransitionRule.to_json())

# convert the object into a dict
create_workflow_transition_rule_dict = create_workflow_transition_rule_instance.to_dict()
# create an instance of CreateWorkflowTransitionRule from a dict
create_workflow_transition_rule_from_dict = CreateWorkflowTransitionRule.from_dict(create_workflow_transition_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorkflowTransitionRulesDetails

Details about a workflow configuration update request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_id** | [**WorkflowId**](WorkflowId.md) |  | 
**workflow_rule_ids** | **List[str]** | The list of connect workflow rule IDs. | 

## Example

```python
from openapi_client.models.workflow_transition_rules_details import WorkflowTransitionRulesDetails

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTransitionRulesDetails from a JSON string
workflow_transition_rules_details_instance = WorkflowTransitionRulesDetails.from_json(json)
# print the JSON string representation of the object
print(WorkflowTransitionRulesDetails.to_json())

# convert the object into a dict
workflow_transition_rules_details_dict = workflow_transition_rules_details_instance.to_dict()
# create an instance of WorkflowTransitionRulesDetails from a dict
workflow_transition_rules_details_from_dict = WorkflowTransitionRulesDetails.from_dict(workflow_transition_rules_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



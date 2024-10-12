# WorkflowRulesSearchDetails

Details of workflow transition rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invalid_rules** | **List[str]** | List of workflow rule IDs that do not belong to the workflow or can not be found. | [optional] 
**valid_rules** | [**List[WorkflowTransitionRules]**](WorkflowTransitionRules.md) | List of valid workflow transition rules. | [optional] 
**workflow_entity_id** | **str** | The workflow ID. | [optional] 

## Example

```python
from openapi_client.models.workflow_rules_search_details import WorkflowRulesSearchDetails

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRulesSearchDetails from a JSON string
workflow_rules_search_details_instance = WorkflowRulesSearchDetails.from_json(json)
# print the JSON string representation of the object
print(WorkflowRulesSearchDetails.to_json())

# convert the object into a dict
workflow_rules_search_details_dict = workflow_rules_search_details_instance.to_dict()
# create an instance of WorkflowRulesSearchDetails from a dict
workflow_rules_search_details_from_dict = WorkflowRulesSearchDetails.from_dict(workflow_rules_search_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorkflowRulesSearch

Details of the workflow and its transition rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expand** | **str** | Use expand to include additional information in the response. This parameter accepts &#x60;transition&#x60; which, for each rule, returns information about the transition the rule is assigned to. | [optional] 
**rule_ids** | **List[str]** | The list of workflow rule IDs. | 
**workflow_entity_id** | **str** | The workflow ID. | 

## Example

```python
from openapi_client.models.workflow_rules_search import WorkflowRulesSearch

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRulesSearch from a JSON string
workflow_rules_search_instance = WorkflowRulesSearch.from_json(json)
# print the JSON string representation of the object
print(WorkflowRulesSearch.to_json())

# convert the object into a dict
workflow_rules_search_dict = workflow_rules_search_instance.to_dict()
# create an instance of WorkflowRulesSearch from a dict
workflow_rules_search_from_dict = WorkflowRulesSearch.from_dict(workflow_rules_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



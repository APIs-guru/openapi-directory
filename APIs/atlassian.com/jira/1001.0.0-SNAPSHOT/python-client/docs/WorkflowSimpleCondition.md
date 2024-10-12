# WorkflowSimpleCondition

A workflow transition rule condition. This object returns `nodeType` as `simple`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | **object** | EXPERIMENTAL. The configuration of the transition rule. | [optional] 
**node_type** | **str** |  | 
**type** | **str** | The type of the transition rule. | 

## Example

```python
from openapi_client.models.workflow_simple_condition import WorkflowSimpleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowSimpleCondition from a JSON string
workflow_simple_condition_instance = WorkflowSimpleCondition.from_json(json)
# print the JSON string representation of the object
print(WorkflowSimpleCondition.to_json())

# convert the object into a dict
workflow_simple_condition_dict = workflow_simple_condition_instance.to_dict()
# create an instance of WorkflowSimpleCondition from a dict
workflow_simple_condition_from_dict = WorkflowSimpleCondition.from_dict(workflow_simple_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



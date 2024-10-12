# WorkflowCondition

The workflow transition rule conditions tree.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | **object** | EXPERIMENTAL. The configuration of the transition rule. | [optional] 
**node_type** | **str** |  | 
**type** | **str** | The type of the transition rule. | 
**conditions** | [**List[WorkflowCondition]**](WorkflowCondition.md) | The list of workflow conditions. | 
**operator** | **str** | The compound condition operator. | 

## Example

```python
from openapi_client.models.workflow_condition import WorkflowCondition

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowCondition from a JSON string
workflow_condition_instance = WorkflowCondition.from_json(json)
# print the JSON string representation of the object
print(WorkflowCondition.to_json())

# convert the object into a dict
workflow_condition_dict = workflow_condition_instance.to_dict()
# create an instance of WorkflowCondition from a dict
workflow_condition_from_dict = WorkflowCondition.from_dict(workflow_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



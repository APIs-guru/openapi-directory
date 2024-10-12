# WorkflowCompoundCondition

A compound workflow transition rule condition. This object returns `nodeType` as `compound`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[WorkflowCondition]**](WorkflowCondition.md) | The list of workflow conditions. | 
**node_type** | **str** |  | 
**operator** | **str** | The compound condition operator. | 

## Example

```python
from openapi_client.models.workflow_compound_condition import WorkflowCompoundCondition

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowCompoundCondition from a JSON string
workflow_compound_condition_instance = WorkflowCompoundCondition.from_json(json)
# print the JSON string representation of the object
print(WorkflowCompoundCondition.to_json())

# convert the object into a dict
workflow_compound_condition_dict = workflow_compound_condition_instance.to_dict()
# create an instance of WorkflowCompoundCondition from a dict
workflow_compound_condition_from_dict = WorkflowCompoundCondition.from_dict(workflow_compound_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorkflowTransition

A workflow transition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The transition ID. | 
**name** | **str** | The transition name. | 

## Example

```python
from openapi_client.models.workflow_transition import WorkflowTransition

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTransition from a JSON string
workflow_transition_instance = WorkflowTransition.from_json(json)
# print the JSON string representation of the object
print(WorkflowTransition.to_json())

# convert the object into a dict
workflow_transition_dict = workflow_transition_instance.to_dict()
# create an instance of WorkflowTransition from a dict
workflow_transition_from_dict = WorkflowTransition.from_dict(workflow_transition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



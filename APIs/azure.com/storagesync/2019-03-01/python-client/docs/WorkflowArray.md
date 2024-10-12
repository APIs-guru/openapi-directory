# WorkflowArray

Array of Workflow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Workflow]**](Workflow.md) | Collection of workflow items. | [optional] 

## Example

```python
from openapi_client.models.workflow_array import WorkflowArray

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowArray from a JSON string
workflow_array_instance = WorkflowArray.from_json(json)
# print the JSON string representation of the object
print(WorkflowArray.to_json())

# convert the object into a dict
workflow_array_dict = workflow_array_instance.to_dict()
# create an instance of WorkflowArray from a dict
workflow_array_from_dict = WorkflowArray.from_dict(workflow_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



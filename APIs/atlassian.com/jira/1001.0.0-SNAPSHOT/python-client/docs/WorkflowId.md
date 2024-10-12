# WorkflowId

Properties that identify a workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**draft** | **bool** | Whether the workflow is in the draft state. | 
**name** | **str** | The name of the workflow. | 

## Example

```python
from openapi_client.models.workflow_id import WorkflowId

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowId from a JSON string
workflow_id_instance = WorkflowId.from_json(json)
# print the JSON string representation of the object
print(WorkflowId.to_json())

# convert the object into a dict
workflow_id_dict = workflow_id_instance.to_dict()
# create an instance of WorkflowId from a dict
workflow_id_from_dict = WorkflowId.from_dict(workflow_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



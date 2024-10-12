# WorkflowOperations

Operations allowed on a workflow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_delete** | **bool** | Whether the workflow can be deleted. | 
**can_edit** | **bool** | Whether the workflow can be updated. | 

## Example

```python
from openapi_client.models.workflow_operations import WorkflowOperations

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowOperations from a JSON string
workflow_operations_instance = WorkflowOperations.from_json(json)
# print the JSON string representation of the object
print(WorkflowOperations.to_json())

# convert the object into a dict
workflow_operations_dict = workflow_operations_instance.to_dict()
# create an instance of WorkflowOperations from a dict
workflow_operations_from_dict = WorkflowOperations.from_dict(workflow_operations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



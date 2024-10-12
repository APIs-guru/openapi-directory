# WorkflowOperationMetadata

Metadata about the operation. Used to lookup the current status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace** | **str** | The namespace that the job was scheduled in. Must be included in the workflow metadata so the workflow status can be retrieved. | [optional] 
**operation_action** | **str** | The type of action the operation is classified as. | [optional] 
**workflow_operation_type** | **str** | Which version of the workflow service this operation came from. | [optional] 

## Example

```python
from openapi_client.models.workflow_operation_metadata import WorkflowOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowOperationMetadata from a JSON string
workflow_operation_metadata_instance = WorkflowOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(WorkflowOperationMetadata.to_json())

# convert the object into a dict
workflow_operation_metadata_dict = workflow_operation_metadata_instance.to_dict()
# create an instance of WorkflowOperationMetadata from a dict
workflow_operation_metadata_from_dict = WorkflowOperationMetadata.from_dict(workflow_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



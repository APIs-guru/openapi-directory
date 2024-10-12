# RunWorkflowCustomOperationMetadata

Represents the custom metadata of the RunWorkflow long-running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | Output only. API version used to start the operation. | [optional] [readonly] 
**create_time** | **str** | Output only. The time the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the operation finished running. | [optional] [readonly] 
**pipeline_run_id** | **str** | Output only. ID of the pipeline run created by RunWorkflow. | [optional] [readonly] 
**requested_cancellation** | **bool** | Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to &#x60;Code.CANCELLED&#x60;. | [optional] [readonly] 
**target** | **str** | Output only. Server-defined resource path for the target of the operation. | [optional] [readonly] 
**verb** | **str** | Output only. Name of the verb executed by the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.run_workflow_custom_operation_metadata import RunWorkflowCustomOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RunWorkflowCustomOperationMetadata from a JSON string
run_workflow_custom_operation_metadata_instance = RunWorkflowCustomOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(RunWorkflowCustomOperationMetadata.to_json())

# convert the object into a dict
run_workflow_custom_operation_metadata_dict = run_workflow_custom_operation_metadata_instance.to_dict()
# create an instance of RunWorkflowCustomOperationMetadata from a dict
run_workflow_custom_operation_metadata_from_dict = RunWorkflowCustomOperationMetadata.from_dict(run_workflow_custom_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



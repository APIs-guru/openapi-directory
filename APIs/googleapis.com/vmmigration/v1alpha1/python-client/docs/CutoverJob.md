# CutoverJob

CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_engine_disks_target_details** | [**ComputeEngineDisksTargetDetails**](ComputeEngineDisksTargetDetails.md) |  | [optional] 
**compute_engine_target_details** | [**ComputeEngineTargetDetails**](ComputeEngineTargetDetails.md) |  | [optional] 
**compute_engine_vm_details** | [**TargetVMDetails**](TargetVMDetails.md) |  | [optional] 
**create_time** | **str** | Output only. The time the cutover job was created (as an API call, not when it was actually created in the target). | [optional] [readonly] 
**end_time** | **str** | Output only. The time the cutover job had finished. | [optional] [readonly] 
**error** | [**Status**](Status.md) |  | [optional] 
**name** | **str** | Output only. The name of the cutover job. | [optional] [readonly] 
**progress** | **int** | Output only. The current progress in percentage of the cutover job. | [optional] [readonly] 
**progress_percent** | **int** | Output only. The current progress in percentage of the cutover job. | [optional] [readonly] 
**state** | **str** | Output only. State of the cutover job. | [optional] [readonly] 
**state_message** | **str** | Output only. A message providing possible extra details about the current state. | [optional] [readonly] 
**state_time** | **str** | Output only. The time the state was last updated. | [optional] [readonly] 
**steps** | [**List[CutoverStep]**](CutoverStep.md) | Output only. The cutover steps list representing its progress. | [optional] [readonly] 
**target_details** | [**TargetVMDetails**](TargetVMDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.cutover_job import CutoverJob

# TODO update the JSON string below
json = "{}"
# create an instance of CutoverJob from a JSON string
cutover_job_instance = CutoverJob.from_json(json)
# print the JSON string representation of the object
print(CutoverJob.to_json())

# convert the object into a dict
cutover_job_dict = cutover_job_instance.to_dict()
# create an instance of CutoverJob from a dict
cutover_job_from_dict = CutoverJob.from_dict(cutover_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



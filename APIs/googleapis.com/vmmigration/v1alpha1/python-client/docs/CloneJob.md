# CloneJob

CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_engine_disks_target_details** | [**ComputeEngineDisksTargetDetails**](ComputeEngineDisksTargetDetails.md) |  | [optional] 
**compute_engine_target_details** | [**ComputeEngineTargetDetails**](ComputeEngineTargetDetails.md) |  | [optional] 
**compute_engine_vm_details** | [**TargetVMDetails**](TargetVMDetails.md) |  | [optional] 
**create_time** | **str** | Output only. The time the clone job was created (as an API call, not when it was actually created in the target). | [optional] [readonly] 
**end_time** | **str** | Output only. The time the clone job was ended. | [optional] [readonly] 
**error** | [**Status**](Status.md) |  | [optional] 
**name** | **str** | Output only. The name of the clone. | [optional] [readonly] 
**state** | **str** | Output only. State of the clone job. | [optional] [readonly] 
**state_time** | **str** | Output only. The time the state was last updated. | [optional] [readonly] 
**steps** | [**List[CloneStep]**](CloneStep.md) | Output only. The clone steps list representing its progress. | [optional] [readonly] 
**target_details** | [**TargetVMDetails**](TargetVMDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.clone_job import CloneJob

# TODO update the JSON string below
json = "{}"
# create an instance of CloneJob from a JSON string
clone_job_instance = CloneJob.from_json(json)
# print the JSON string representation of the object
print(CloneJob.to_json())

# convert the object into a dict
clone_job_dict = clone_job_instance.to_dict()
# create an instance of CloneJob from a dict
clone_job_from_dict = CloneJob.from_dict(clone_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# MigratingVm

MigratingVm describes the VM that will be migrated from a Source environment and its replication state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_source_vm_details** | [**AwsSourceVmDetails**](AwsSourceVmDetails.md) |  | [optional] 
**azure_source_vm_details** | [**AzureSourceVmDetails**](AzureSourceVmDetails.md) |  | [optional] 
**compute_engine_disks_target_defaults** | [**ComputeEngineDisksTargetDefaults**](ComputeEngineDisksTargetDefaults.md) |  | [optional] 
**compute_engine_target_defaults** | [**ComputeEngineTargetDefaults**](ComputeEngineTargetDefaults.md) |  | [optional] 
**compute_engine_vm_defaults** | [**TargetVMDetails**](TargetVMDetails.md) |  | [optional] 
**create_time** | **str** | Output only. The time the migrating VM was created (this refers to this resource and not to the time it was installed in the source). | [optional] [readonly] 
**current_sync_info** | [**ReplicationCycle**](ReplicationCycle.md) |  | [optional] 
**cutover_forecast** | [**CutoverForecast**](CutoverForecast.md) |  | [optional] 
**description** | **str** | The description attached to the migrating VM by the user. | [optional] 
**display_name** | **str** | The display name attached to the MigratingVm by the user. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**group** | **str** | Output only. The group this migrating vm is included in, if any. The group is represented by the full path of the appropriate Group resource. | [optional] [readonly] 
**labels** | **Dict[str, str]** | The labels of the migrating VM. | [optional] 
**last_replication_cycle** | [**ReplicationCycle**](ReplicationCycle.md) |  | [optional] 
**last_sync** | [**ReplicationSync**](ReplicationSync.md) |  | [optional] 
**name** | **str** | Output only. The identifier of the MigratingVm. | [optional] [readonly] 
**policy** | [**SchedulePolicy**](SchedulePolicy.md) |  | [optional] 
**recent_clone_jobs** | [**List[CloneJob]**](CloneJob.md) | Output only. The recent clone jobs performed on the migrating VM. This field holds the vm&#39;s last completed clone job and the vm&#39;s running clone job, if one exists. Note: To have this field populated you need to explicitly request it via the \&quot;view\&quot; parameter of the Get/List request. | [optional] [readonly] 
**recent_cutover_jobs** | [**List[CutoverJob]**](CutoverJob.md) | Output only. The recent cutover jobs performed on the migrating VM. This field holds the vm&#39;s last completed cutover job and the vm&#39;s running cutover job, if one exists. Note: To have this field populated you need to explicitly request it via the \&quot;view\&quot; parameter of the Get/List request. | [optional] [readonly] 
**source_vm_id** | **str** | The unique ID of the VM in the source. The VM&#39;s name in vSphere can be changed, so this is not the VM&#39;s name but rather its moRef id. This id is of the form vm-. | [optional] 
**state** | **str** | Output only. State of the MigratingVm. | [optional] [readonly] 
**state_time** | **str** | Output only. The last time the migrating VM state was updated. | [optional] [readonly] 
**target_defaults** | [**TargetVMDetails**](TargetVMDetails.md) |  | [optional] 
**update_time** | **str** | Output only. The last time the migrating VM resource was updated. | [optional] [readonly] 
**vmware_source_vm_details** | [**VmwareSourceVmDetails**](VmwareSourceVmDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.migrating_vm import MigratingVm

# TODO update the JSON string below
json = "{}"
# create an instance of MigratingVm from a JSON string
migrating_vm_instance = MigratingVm.from_json(json)
# print the JSON string representation of the object
print(MigratingVm.to_json())

# convert the object into a dict
migrating_vm_dict = migrating_vm_instance.to_dict()
# create an instance of MigratingVm from a dict
migrating_vm_from_dict = MigratingVm.from_dict(migrating_vm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



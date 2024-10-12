# ComputeEngineDisksTargetDefaults

ComputeEngineDisksTargetDefaults is a collection of details for creating Persistent Disks in a target Compute Engine project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disks** | [**List[PersistentDiskDefaults]**](PersistentDiskDefaults.md) | The details of each Persistent Disk to create. | [optional] 
**disks_target_defaults** | **object** | Details for a disk only migration. | [optional] 
**target_project** | **str** | The full path of the resource of type TargetProject which represents the Compute Engine project in which to create the Persistent Disks. | [optional] 
**vm_target_defaults** | [**DisksMigrationVmTargetDefaults**](DisksMigrationVmTargetDefaults.md) |  | [optional] 
**zone** | **str** | The zone in which to create the Persistent Disks. | [optional] 

## Example

```python
from openapi_client.models.compute_engine_disks_target_defaults import ComputeEngineDisksTargetDefaults

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeEngineDisksTargetDefaults from a JSON string
compute_engine_disks_target_defaults_instance = ComputeEngineDisksTargetDefaults.from_json(json)
# print the JSON string representation of the object
print(ComputeEngineDisksTargetDefaults.to_json())

# convert the object into a dict
compute_engine_disks_target_defaults_dict = compute_engine_disks_target_defaults_instance.to_dict()
# create an instance of ComputeEngineDisksTargetDefaults from a dict
compute_engine_disks_target_defaults_from_dict = ComputeEngineDisksTargetDefaults.from_dict(compute_engine_disks_target_defaults_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



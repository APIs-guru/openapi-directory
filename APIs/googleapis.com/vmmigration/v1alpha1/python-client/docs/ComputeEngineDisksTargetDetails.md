# ComputeEngineDisksTargetDetails

ComputeEngineDisksTargetDetails is a collection of created Persistent Disks details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disks** | [**List[PersistentDisk]**](PersistentDisk.md) | The details of each created Persistent Disk. | [optional] 
**disks_target_details** | **object** | Details for a disks-only migration. | [optional] 
**vm_target_details** | [**DisksMigrationVmTargetDetails**](DisksMigrationVmTargetDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.compute_engine_disks_target_details import ComputeEngineDisksTargetDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeEngineDisksTargetDetails from a JSON string
compute_engine_disks_target_details_instance = ComputeEngineDisksTargetDetails.from_json(json)
# print the JSON string representation of the object
print(ComputeEngineDisksTargetDetails.to_json())

# convert the object into a dict
compute_engine_disks_target_details_dict = compute_engine_disks_target_details_instance.to_dict()
# create an instance of ComputeEngineDisksTargetDetails from a dict
compute_engine_disks_target_details_from_dict = ComputeEngineDisksTargetDetails.from_dict(compute_engine_disks_target_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



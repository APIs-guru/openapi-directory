# DisksMigrationVmTargetDetails

Details for the VM created VM as part of disks migration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_uri** | **str** | Output only. The URI of the Compute Engine VM. | [optional] [readonly] 

## Example

```python
from openapi_client.models.disks_migration_vm_target_details import DisksMigrationVmTargetDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DisksMigrationVmTargetDetails from a JSON string
disks_migration_vm_target_details_instance = DisksMigrationVmTargetDetails.from_json(json)
# print the JSON string representation of the object
print(DisksMigrationVmTargetDetails.to_json())

# convert the object into a dict
disks_migration_vm_target_details_dict = disks_migration_vm_target_details_instance.to_dict()
# create an instance of DisksMigrationVmTargetDetails from a dict
disks_migration_vm_target_details_from_dict = DisksMigrationVmTargetDetails.from_dict(disks_migration_vm_target_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



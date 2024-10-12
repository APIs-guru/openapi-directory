# DisksMigrationVmTargetDefaults

Details for creation of a VM that migrated data disks will be attached to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_licenses** | **List[str]** | Optional. Additional licenses to assign to the VM. | [optional] 
**boot_disk_defaults** | [**BootDiskDefaults**](BootDiskDefaults.md) |  | [optional] 
**compute_scheduling** | [**ComputeScheduling**](ComputeScheduling.md) |  | [optional] 
**encryption** | [**Encryption**](Encryption.md) |  | [optional] 
**hostname** | **str** | Optional. The hostname to assign to the VM. | [optional] 
**labels** | **Dict[str, str]** | Optional. A map of labels to associate with the VM. | [optional] 
**machine_type** | **str** | Required. The machine type to create the VM with. | [optional] 
**machine_type_series** | **str** | Optional. The machine type series to create the VM with. For presentation only. | [optional] 
**metadata** | **Dict[str, str]** | Optional. The metadata key/value pairs to assign to the VM. | [optional] 
**network_interfaces** | [**List[NetworkInterface]**](NetworkInterface.md) | Optional. NICs to attach to the VM. | [optional] 
**network_tags** | **List[str]** | Optional. A list of network tags to associate with the VM. | [optional] 
**secure_boot** | **bool** | Optional. Defines whether the instance has Secure Boot enabled. This can be set to true only if the VM boot option is EFI. | [optional] 
**service_account** | **str** | Optional. The service account to associate the VM with. | [optional] 
**vm_name** | **str** | Required. The name of the VM to create. | [optional] 

## Example

```python
from openapi_client.models.disks_migration_vm_target_defaults import DisksMigrationVmTargetDefaults

# TODO update the JSON string below
json = "{}"
# create an instance of DisksMigrationVmTargetDefaults from a JSON string
disks_migration_vm_target_defaults_instance = DisksMigrationVmTargetDefaults.from_json(json)
# print the JSON string representation of the object
print(DisksMigrationVmTargetDefaults.to_json())

# convert the object into a dict
disks_migration_vm_target_defaults_dict = disks_migration_vm_target_defaults_instance.to_dict()
# create an instance of DisksMigrationVmTargetDefaults from a dict
disks_migration_vm_target_defaults_from_dict = DisksMigrationVmTargetDefaults.from_dict(disks_migration_vm_target_defaults_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



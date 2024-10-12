# VMwareCbtMigrationDetails

VMwareCbt provider specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_mover_run_as_account_id** | **str** | The data mover RunAs account Id. | [optional] [readonly] 
**last_recovery_point_received** | **datetime** | The last recovery point received time. | [optional] [readonly] 
**license_type** | **str** | License Type of the VM to be used. | [optional] 
**migration_recovery_point_id** | **str** | The recovery point Id to which the VM was migrated. | [optional] [readonly] 
**os_type** | **str** | The type of the OS on the VM. | [optional] [readonly] 
**protected_disks** | [**List[VMwareCbtProtectedDiskDetails]**](VMwareCbtProtectedDiskDetails.md) | The list of protected disks. | [optional] 
**snapshot_run_as_account_id** | **str** | The snapshot RunAs account Id. | [optional] [readonly] 
**target_availability_set_id** | **str** | The target availability set Id. | [optional] 
**target_boot_diagnostics_storage_account_id** | **str** | The target boot diagnostics storage account ARM Id. | [optional] 
**target_location** | **str** | The target location. | [optional] [readonly] 
**target_network_id** | **str** | The target network Id. | [optional] 
**target_resource_group_id** | **str** | The target resource group Id. | [optional] 
**target_vm_name** | **str** | Target VM name. | [optional] 
**target_vm_size** | **str** | The target VM size. | [optional] 
**vm_nics** | [**List[VMwareCbtNicDetails]**](VMwareCbtNicDetails.md) | The network details. | [optional] 
**vmware_machine_id** | **str** | The ARM Id of the VM discovered in VMware. | [optional] [readonly] 

## Example

```python
from openapi_client.models.v_mware_cbt_migration_details import VMwareCbtMigrationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtMigrationDetails from a JSON string
v_mware_cbt_migration_details_instance = VMwareCbtMigrationDetails.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtMigrationDetails.to_json())

# convert the object into a dict
v_mware_cbt_migration_details_dict = v_mware_cbt_migration_details_instance.to_dict()
# create an instance of VMwareCbtMigrationDetails from a dict
v_mware_cbt_migration_details_from_dict = VMwareCbtMigrationDetails.from_dict(v_mware_cbt_migration_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



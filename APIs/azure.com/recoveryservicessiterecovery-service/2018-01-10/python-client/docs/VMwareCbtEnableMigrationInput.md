# VMwareCbtEnableMigrationInput

VMwareCbt specific enable migration input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_mover_run_as_account_id** | **str** | The data mover RunAs account Id. | 
**disks_to_include** | [**List[VMwareCbtDiskInput]**](VMwareCbtDiskInput.md) | The disks to include list. | 
**license_type** | **str** | License type. | [optional] 
**perform_auto_resync** | **str** | A value indicating whether auto resync is to be done. | [optional] 
**snapshot_run_as_account_id** | **str** | The snapshot RunAs account Id. | 
**target_availability_set_id** | **str** | The target availability set ARM Id. | [optional] 
**target_boot_diagnostics_storage_account_id** | **str** | The target boot diagnostics storage account ARM Id. | [optional] 
**target_network_id** | **str** | The target network ARM Id. | 
**target_resource_group_id** | **str** | The target resource group ARM Id. | 
**target_subnet_name** | **str** | The target subnet name. | [optional] 
**target_vm_name** | **str** | The target VM name. | [optional] 
**target_vm_size** | **str** | The target VM size. | [optional] 
**vmware_machine_id** | **str** | The ARM Id of the VM discovered in VMware. | 

## Example

```python
from openapi_client.models.v_mware_cbt_enable_migration_input import VMwareCbtEnableMigrationInput

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtEnableMigrationInput from a JSON string
v_mware_cbt_enable_migration_input_instance = VMwareCbtEnableMigrationInput.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtEnableMigrationInput.to_json())

# convert the object into a dict
v_mware_cbt_enable_migration_input_dict = v_mware_cbt_enable_migration_input_instance.to_dict()
# create an instance of VMwareCbtEnableMigrationInput from a dict
v_mware_cbt_enable_migration_input_from_dict = VMwareCbtEnableMigrationInput.from_dict(v_mware_cbt_enable_migration_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



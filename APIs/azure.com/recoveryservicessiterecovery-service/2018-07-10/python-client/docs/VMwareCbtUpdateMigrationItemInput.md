# VMwareCbtUpdateMigrationItemInput

VMwareCbt specific update migration item input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**license_type** | **str** | The license type. | [optional] 
**target_availability_set_id** | **str** | The target availability set ARM Id. | [optional] 
**target_boot_diagnostics_storage_account_id** | **str** | The target boot diagnostics storage account ARM Id. | [optional] 
**target_network_id** | **str** | The target network ARM Id. | [optional] 
**target_resource_group_id** | **str** | The target resource group ARM Id. | [optional] 
**target_vm_name** | **str** | The target VM name. | [optional] 
**target_vm_size** | **str** | The target VM size. | [optional] 
**vm_nics** | [**List[VMwareCbtNicInput]**](VMwareCbtNicInput.md) | The list of NIC details. | [optional] 

## Example

```python
from openapi_client.models.v_mware_cbt_update_migration_item_input import VMwareCbtUpdateMigrationItemInput

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtUpdateMigrationItemInput from a JSON string
v_mware_cbt_update_migration_item_input_instance = VMwareCbtUpdateMigrationItemInput.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtUpdateMigrationItemInput.to_json())

# convert the object into a dict
v_mware_cbt_update_migration_item_input_dict = v_mware_cbt_update_migration_item_input_instance.to_dict()
# create an instance of VMwareCbtUpdateMigrationItemInput from a dict
v_mware_cbt_update_migration_item_input_from_dict = VMwareCbtUpdateMigrationItemInput.from_dict(v_mware_cbt_update_migration_item_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



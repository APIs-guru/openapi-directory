# VMwareCbtProtectedDiskDetails

VMwareCbt protected disk details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_in_bytes** | **int** | The disk capacity in bytes. | [optional] [readonly] 
**disk_id** | **str** | The disk id. | [optional] [readonly] 
**disk_name** | **str** | The disk name. | [optional] [readonly] 
**disk_path** | **str** | The disk path. | [optional] [readonly] 
**disk_type** | **str** | The disk type. | [optional] 
**is_os_disk** | **str** | A value indicating whether the disk is the OS disk. | [optional] [readonly] 
**log_storage_account_id** | **str** | The log storage account ARM Id. | [optional] [readonly] 
**log_storage_account_sas_secret_name** | **str** | The key vault secret name of the log storage account. | [optional] [readonly] 
**seed_managed_disk_id** | **str** | The ARM Id of the seed managed disk. | [optional] [readonly] 
**target_managed_disk_id** | **str** | The ARM Id of the target managed disk. | [optional] [readonly] 

## Example

```python
from openapi_client.models.v_mware_cbt_protected_disk_details import VMwareCbtProtectedDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtProtectedDiskDetails from a JSON string
v_mware_cbt_protected_disk_details_instance = VMwareCbtProtectedDiskDetails.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtProtectedDiskDetails.to_json())

# convert the object into a dict
v_mware_cbt_protected_disk_details_dict = v_mware_cbt_protected_disk_details_instance.to_dict()
# create an instance of VMwareCbtProtectedDiskDetails from a dict
v_mware_cbt_protected_disk_details_from_dict = VMwareCbtProtectedDiskDetails.from_dict(v_mware_cbt_protected_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VMwareCbtDiskInput

VMwareCbt disk input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_id** | **str** | The disk Id. | 
**disk_type** | **str** | The disk type. | [optional] 
**is_os_disk** | **str** | A value indicating whether the disk is the OS disk. | 
**log_storage_account_id** | **str** | The log storage account ARM Id. | 
**log_storage_account_sas_secret_name** | **str** | The key vault secret name of the log storage account. | 

## Example

```python
from openapi_client.models.v_mware_cbt_disk_input import VMwareCbtDiskInput

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtDiskInput from a JSON string
v_mware_cbt_disk_input_instance = VMwareCbtDiskInput.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtDiskInput.to_json())

# convert the object into a dict
v_mware_cbt_disk_input_dict = v_mware_cbt_disk_input_instance.to_dict()
# create an instance of VMwareCbtDiskInput from a dict
v_mware_cbt_disk_input_from_dict = VMwareCbtDiskInput.from_dict(v_mware_cbt_disk_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



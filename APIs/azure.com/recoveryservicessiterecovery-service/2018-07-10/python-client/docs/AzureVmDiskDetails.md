# AzureVmDiskDetails

Disk details for E2A provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption_set_id** | **str** | The DiskEncryptionSet ARM ID. | [optional] 
**disk_id** | **str** | The disk resource id. | [optional] 
**lun_id** | **str** | Ordinal\\LunId of the disk for the Azure VM. | [optional] 
**max_size_mb** | **str** | Max side in MB. | [optional] 
**target_disk_location** | **str** | Blob uri of the Azure disk. | [optional] 
**target_disk_name** | **str** | The target Azure disk name. | [optional] 
**vhd_id** | **str** | The VHD id. | [optional] 
**vhd_name** | **str** | VHD name. | [optional] 
**vhd_type** | **str** | VHD type. | [optional] 

## Example

```python
from openapi_client.models.azure_vm_disk_details import AzureVmDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVmDiskDetails from a JSON string
azure_vm_disk_details_instance = AzureVmDiskDetails.from_json(json)
# print the JSON string representation of the object
print(AzureVmDiskDetails.to_json())

# convert the object into a dict
azure_vm_disk_details_dict = azure_vm_disk_details_instance.to_dict()
# create an instance of AzureVmDiskDetails from a dict
azure_vm_disk_details_from_dict = AzureVmDiskDetails.from_dict(azure_vm_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



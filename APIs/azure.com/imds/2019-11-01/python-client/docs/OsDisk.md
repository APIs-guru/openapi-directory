# OsDisk

This contains information about the OS disk used by the VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caching** | **str** | This is the caching requirements. | [optional] 
**create_option** | **str** | This is information about how the VM was created. | [optional] 
**diff_disk_settings** | [**DiffDiskSettings**](DiffDiskSettings.md) |  | [optional] 
**disk_size_gb** | **str** | This is the size of the disk in GB. | [optional] 
**encryption_settings** | [**EncryptionSettings**](EncryptionSettings.md) |  | [optional] 
**image** | [**DiskImage**](DiskImage.md) |  | [optional] 
**managed_disk** | [**ManagedDisk**](ManagedDisk.md) |  | [optional] 
**name** | **str** | This is the disk name. | [optional] 
**os_type** | **str** | This is the type of OS included in the disk. | [optional] 
**vhd** | [**VirtualHardDisk**](VirtualHardDisk.md) |  | [optional] 
**write_accelerator_enabled** | **str** | This specifies whether or not writeAccelerator is enabled on the disk. | [optional] 

## Example

```python
from openapi_client.models.os_disk import OsDisk

# TODO update the JSON string below
json = "{}"
# create an instance of OsDisk from a JSON string
os_disk_instance = OsDisk.from_json(json)
# print the JSON string representation of the object
print(OsDisk.to_json())

# convert the object into a dict
os_disk_dict = os_disk_instance.to_dict()
# create an instance of OsDisk from a dict
os_disk_from_dict = OsDisk.from_dict(os_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



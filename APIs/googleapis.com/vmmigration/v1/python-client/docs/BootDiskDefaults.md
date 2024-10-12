# BootDiskDefaults

BootDiskDefaults hold information about the boot disk of a VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_name** | **str** | Optional. Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. | [optional] 
**disk_name** | **str** | Optional. The name of the disk. | [optional] 
**disk_type** | **str** | Optional. The type of disk provisioning to use for the VM. | [optional] 
**encryption** | [**Encryption**](Encryption.md) |  | [optional] 
**image** | [**DiskImageDefaults**](DiskImageDefaults.md) |  | [optional] 

## Example

```python
from openapi_client.models.boot_disk_defaults import BootDiskDefaults

# TODO update the JSON string below
json = "{}"
# create an instance of BootDiskDefaults from a JSON string
boot_disk_defaults_instance = BootDiskDefaults.from_json(json)
# print the JSON string representation of the object
print(BootDiskDefaults.to_json())

# convert the object into a dict
boot_disk_defaults_dict = boot_disk_defaults_instance.to_dict()
# create an instance of BootDiskDefaults from a dict
boot_disk_defaults_from_dict = BootDiskDefaults.from_dict(boot_disk_defaults_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



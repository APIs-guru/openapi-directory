# OSDisk

Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caching** | [**Caching**](Caching.md) |  | [optional] 
**create_option** | [**CreateOption**](CreateOption.md) |  | 
**disk_size_gb** | **int** | Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. &lt;br&gt;&lt;br&gt; This value cannot be larger than 1023 GB | [optional] 
**encryption_settings** | [**DiskEncryptionSettings**](DiskEncryptionSettings.md) |  | [optional] 
**image** | [**VirtualHardDisk**](VirtualHardDisk.md) |  | [optional] 
**managed_disk** | [**ManagedDiskParameters**](ManagedDiskParameters.md) |  | [optional] 
**name** | **str** | The disk name. | [optional] 
**os_type** | **str** | This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Windows** &lt;br&gt;&lt;br&gt; **Linux** | [optional] 
**vhd** | [**VirtualHardDisk**](VirtualHardDisk.md) |  | [optional] 
**write_accelerator_enabled** | **bool** | Specifies whether writeAccelerator should be enabled or disabled on the disk. | [optional] 

## Example

```python
from openapi_client.models.os_disk import OSDisk

# TODO update the JSON string below
json = "{}"
# create an instance of OSDisk from a JSON string
os_disk_instance = OSDisk.from_json(json)
# print the JSON string representation of the object
print(OSDisk.to_json())

# convert the object into a dict
os_disk_dict = os_disk_instance.to_dict()
# create an instance of OSDisk from a dict
os_disk_from_dict = OSDisk.from_dict(os_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



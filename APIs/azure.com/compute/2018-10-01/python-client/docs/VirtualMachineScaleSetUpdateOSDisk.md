# VirtualMachineScaleSetUpdateOSDisk

Describes virtual machine scale set operating system disk Update Object. This should be used for Updating VMSS OS Disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caching** | [**Caching**](Caching.md) |  | [optional] 
**disk_size_gb** | **int** | Specifies the size of the operating system disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. &lt;br&gt;&lt;br&gt; This value cannot be larger than 1023 GB | [optional] 
**image** | [**VirtualHardDisk**](VirtualHardDisk.md) |  | [optional] 
**managed_disk** | [**VirtualMachineScaleSetManagedDiskParameters**](VirtualMachineScaleSetManagedDiskParameters.md) |  | [optional] 
**vhd_containers** | **List[str]** | The list of virtual hard disk container uris. | [optional] 
**write_accelerator_enabled** | **bool** | Specifies whether writeAccelerator should be enabled or disabled on the disk. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_update_os_disk import VirtualMachineScaleSetUpdateOSDisk

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetUpdateOSDisk from a JSON string
virtual_machine_scale_set_update_os_disk_instance = VirtualMachineScaleSetUpdateOSDisk.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetUpdateOSDisk.to_json())

# convert the object into a dict
virtual_machine_scale_set_update_os_disk_dict = virtual_machine_scale_set_update_os_disk_instance.to_dict()
# create an instance of VirtualMachineScaleSetUpdateOSDisk from a dict
virtual_machine_scale_set_update_os_disk_from_dict = VirtualMachineScaleSetUpdateOSDisk.from_dict(virtual_machine_scale_set_update_os_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



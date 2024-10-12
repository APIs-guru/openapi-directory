# VirtualMachineScaleSetOSDisk

Describes a virtual machine scale set operating system disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caching** | [**Caching**](Caching.md) |  | [optional] 
**create_option** | [**CreateOption**](CreateOption.md) |  | 
**image** | [**VirtualHardDisk**](VirtualHardDisk.md) |  | [optional] 
**managed_disk** | [**VirtualMachineScaleSetManagedDiskParameters**](VirtualMachineScaleSetManagedDiskParameters.md) |  | [optional] 
**name** | **str** | The disk name. | [optional] 
**os_type** | **str** | This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Windows** &lt;br&gt;&lt;br&gt; **Linux** | [optional] 
**vhd_containers** | **List[str]** | Specifies the container urls that are used to store operating system disks for the scale set. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_os_disk import VirtualMachineScaleSetOSDisk

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetOSDisk from a JSON string
virtual_machine_scale_set_os_disk_instance = VirtualMachineScaleSetOSDisk.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetOSDisk.to_json())

# convert the object into a dict
virtual_machine_scale_set_os_disk_dict = virtual_machine_scale_set_os_disk_instance.to_dict()
# create an instance of VirtualMachineScaleSetOSDisk from a dict
virtual_machine_scale_set_os_disk_from_dict = VirtualMachineScaleSetOSDisk.from_dict(virtual_machine_scale_set_os_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



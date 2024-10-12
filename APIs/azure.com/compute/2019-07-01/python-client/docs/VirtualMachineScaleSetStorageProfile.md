# VirtualMachineScaleSetStorageProfile

Describes a virtual machine scale set storage profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disks** | [**List[VirtualMachineScaleSetDataDisk]**](VirtualMachineScaleSetDataDisk.md) | Specifies the parameters that are used to add data disks to the virtual machines in the scale set. &lt;br&gt;&lt;br&gt; For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc&#x3D;%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). | [optional] 
**image_reference** | [**ImageReference**](ImageReference.md) |  | [optional] 
**os_disk** | [**VirtualMachineScaleSetOSDisk**](VirtualMachineScaleSetOSDisk.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_storage_profile import VirtualMachineScaleSetStorageProfile

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetStorageProfile from a JSON string
virtual_machine_scale_set_storage_profile_instance = VirtualMachineScaleSetStorageProfile.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetStorageProfile.to_json())

# convert the object into a dict
virtual_machine_scale_set_storage_profile_dict = virtual_machine_scale_set_storage_profile_instance.to_dict()
# create an instance of VirtualMachineScaleSetStorageProfile from a dict
virtual_machine_scale_set_storage_profile_from_dict = VirtualMachineScaleSetStorageProfile.from_dict(virtual_machine_scale_set_storage_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



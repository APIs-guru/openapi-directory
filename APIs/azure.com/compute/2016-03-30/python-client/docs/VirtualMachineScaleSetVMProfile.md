# VirtualMachineScaleSetVMProfile

Describes a virtual machine scale set virtual machine profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension_profile** | [**VirtualMachineScaleSetExtensionProfile**](VirtualMachineScaleSetExtensionProfile.md) |  | [optional] 
**network_profile** | [**VirtualMachineScaleSetNetworkProfile**](VirtualMachineScaleSetNetworkProfile.md) |  | [optional] 
**os_profile** | [**VirtualMachineScaleSetOSProfile**](VirtualMachineScaleSetOSProfile.md) |  | [optional] 
**storage_profile** | [**VirtualMachineScaleSetStorageProfile**](VirtualMachineScaleSetStorageProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_vm_profile import VirtualMachineScaleSetVMProfile

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetVMProfile from a JSON string
virtual_machine_scale_set_vm_profile_instance = VirtualMachineScaleSetVMProfile.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetVMProfile.to_json())

# convert the object into a dict
virtual_machine_scale_set_vm_profile_dict = virtual_machine_scale_set_vm_profile_instance.to_dict()
# create an instance of VirtualMachineScaleSetVMProfile from a dict
virtual_machine_scale_set_vm_profile_from_dict = VirtualMachineScaleSetVMProfile.from_dict(virtual_machine_scale_set_vm_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



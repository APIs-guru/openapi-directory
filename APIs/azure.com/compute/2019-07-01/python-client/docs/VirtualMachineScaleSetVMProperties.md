# VirtualMachineScaleSetVMProperties

Describes the properties of a virtual machine scale set virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_capabilities** | [**AdditionalCapabilities**](AdditionalCapabilities.md) |  | [optional] 
**availability_set** | [**SubResource**](SubResource.md) |  | [optional] 
**diagnostics_profile** | [**DiagnosticsProfile**](DiagnosticsProfile.md) |  | [optional] 
**hardware_profile** | [**HardwareProfile**](HardwareProfile.md) |  | [optional] 
**instance_view** | [**VirtualMachineScaleSetVMInstanceView**](VirtualMachineScaleSetVMInstanceView.md) |  | [optional] 
**latest_model_applied** | **bool** | Specifies whether the latest model has been applied to the virtual machine. | [optional] [readonly] 
**license_type** | **str** | Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; Windows_Client &lt;br&gt;&lt;br&gt; Windows_Server &lt;br&gt;&lt;br&gt; If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. &lt;br&gt;&lt;br&gt; For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc&#x3D;%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) &lt;br&gt;&lt;br&gt; Minimum api-version: 2015-06-15 | [optional] 
**model_definition_applied** | **str** | Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine. | [optional] [readonly] 
**network_profile** | [**NetworkProfile**](NetworkProfile.md) |  | [optional] 
**network_profile_configuration** | [**VirtualMachineScaleSetVMNetworkProfileConfiguration**](VirtualMachineScaleSetVMNetworkProfileConfiguration.md) |  | [optional] 
**os_profile** | [**OSProfile**](OSProfile.md) |  | [optional] 
**protection_policy** | [**VirtualMachineScaleSetVMProtectionPolicy**](VirtualMachineScaleSetVMProtectionPolicy.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] [readonly] 
**storage_profile** | [**StorageProfile**](StorageProfile.md) |  | [optional] 
**vm_id** | **str** | Azure VM unique ID. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_vm_properties import VirtualMachineScaleSetVMProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetVMProperties from a JSON string
virtual_machine_scale_set_vm_properties_instance = VirtualMachineScaleSetVMProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetVMProperties.to_json())

# convert the object into a dict
virtual_machine_scale_set_vm_properties_dict = virtual_machine_scale_set_vm_properties_instance.to_dict()
# create an instance of VirtualMachineScaleSetVMProperties from a dict
virtual_machine_scale_set_vm_properties_from_dict = VirtualMachineScaleSetVMProperties.from_dict(virtual_machine_scale_set_vm_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



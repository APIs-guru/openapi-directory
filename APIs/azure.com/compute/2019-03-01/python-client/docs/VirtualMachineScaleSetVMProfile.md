# VirtualMachineScaleSetVMProfile

Describes a virtual machine scale set virtual machine profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_profile** | [**BillingProfile**](BillingProfile.md) |  | [optional] 
**diagnostics_profile** | [**DiagnosticsProfile**](DiagnosticsProfile.md) |  | [optional] 
**eviction_policy** | **str** | Specifies the eviction policy for virtual machines in a low priority scale set. &lt;br&gt;&lt;br&gt;Minimum api-version: 2017-10-30-preview | [optional] 
**extension_profile** | [**VirtualMachineScaleSetExtensionProfile**](VirtualMachineScaleSetExtensionProfile.md) |  | [optional] 
**license_type** | **str** | Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; Windows_Client &lt;br&gt;&lt;br&gt; Windows_Server &lt;br&gt;&lt;br&gt; If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. &lt;br&gt;&lt;br&gt; For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc&#x3D;%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) &lt;br&gt;&lt;br&gt; Minimum api-version: 2015-06-15 | [optional] 
**network_profile** | [**VirtualMachineScaleSetNetworkProfile**](VirtualMachineScaleSetNetworkProfile.md) |  | [optional] 
**os_profile** | [**VirtualMachineScaleSetOSProfile**](VirtualMachineScaleSetOSProfile.md) |  | [optional] 
**priority** | **str** | Specifies the priority for the virtual machines in the scale set. &lt;br&gt;&lt;br&gt;Minimum api-version: 2017-10-30-preview | [optional] 
**scheduled_events_profile** | [**ScheduledEventsProfile**](ScheduledEventsProfile.md) |  | [optional] 
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



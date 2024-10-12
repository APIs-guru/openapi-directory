# VirtualMachineScaleSetUpdateVMProfile

Describes a virtual machine scale set virtual machine profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_profile** | [**BillingProfile**](BillingProfile.md) |  | [optional] 
**diagnostics_profile** | [**DiagnosticsProfile**](DiagnosticsProfile.md) |  | [optional] 
**extension_profile** | [**VirtualMachineScaleSetExtensionProfile**](VirtualMachineScaleSetExtensionProfile.md) |  | [optional] 
**license_type** | **str** | The license type, which is for bring your own license scenario. | [optional] 
**network_profile** | [**VirtualMachineScaleSetUpdateNetworkProfile**](VirtualMachineScaleSetUpdateNetworkProfile.md) |  | [optional] 
**os_profile** | [**VirtualMachineScaleSetUpdateOSProfile**](VirtualMachineScaleSetUpdateOSProfile.md) |  | [optional] 
**scheduled_events_profile** | [**ScheduledEventsProfile**](ScheduledEventsProfile.md) |  | [optional] 
**storage_profile** | [**VirtualMachineScaleSetUpdateStorageProfile**](VirtualMachineScaleSetUpdateStorageProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_update_vm_profile import VirtualMachineScaleSetUpdateVMProfile

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetUpdateVMProfile from a JSON string
virtual_machine_scale_set_update_vm_profile_instance = VirtualMachineScaleSetUpdateVMProfile.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetUpdateVMProfile.to_json())

# convert the object into a dict
virtual_machine_scale_set_update_vm_profile_dict = virtual_machine_scale_set_update_vm_profile_instance.to_dict()
# create an instance of VirtualMachineScaleSetUpdateVMProfile from a dict
virtual_machine_scale_set_update_vm_profile_from_dict = VirtualMachineScaleSetUpdateVMProfile.from_dict(virtual_machine_scale_set_update_vm_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



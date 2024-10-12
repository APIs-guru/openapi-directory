# VirtualMachineScaleSetUpdateOSProfile

Describes a virtual machine scale set OS profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_data** | **str** | A base-64 encoded string of custom data. | [optional] 
**linux_configuration** | [**LinuxConfiguration**](LinuxConfiguration.md) |  | [optional] 
**secrets** | [**List[VaultSecretGroup]**](VaultSecretGroup.md) | The List of certificates for addition to the VM. | [optional] 
**windows_configuration** | [**WindowsConfiguration**](WindowsConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_update_os_profile import VirtualMachineScaleSetUpdateOSProfile

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetUpdateOSProfile from a JSON string
virtual_machine_scale_set_update_os_profile_instance = VirtualMachineScaleSetUpdateOSProfile.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetUpdateOSProfile.to_json())

# convert the object into a dict
virtual_machine_scale_set_update_os_profile_dict = virtual_machine_scale_set_update_os_profile_instance.to_dict()
# create an instance of VirtualMachineScaleSetUpdateOSProfile from a dict
virtual_machine_scale_set_update_os_profile_from_dict = VirtualMachineScaleSetUpdateOSProfile.from_dict(virtual_machine_scale_set_update_os_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



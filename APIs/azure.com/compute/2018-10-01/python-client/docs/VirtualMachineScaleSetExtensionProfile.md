# VirtualMachineScaleSetExtensionProfile

Describes a virtual machine scale set extension profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extensions** | [**List[VirtualMachineScaleSetExtension]**](VirtualMachineScaleSetExtension.md) | The virtual machine scale set child extension resources. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_extension_profile import VirtualMachineScaleSetExtensionProfile

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetExtensionProfile from a JSON string
virtual_machine_scale_set_extension_profile_instance = VirtualMachineScaleSetExtensionProfile.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetExtensionProfile.to_json())

# convert the object into a dict
virtual_machine_scale_set_extension_profile_dict = virtual_machine_scale_set_extension_profile_instance.to_dict()
# create an instance of VirtualMachineScaleSetExtensionProfile from a dict
virtual_machine_scale_set_extension_profile_from_dict = VirtualMachineScaleSetExtensionProfile.from_dict(virtual_machine_scale_set_extension_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



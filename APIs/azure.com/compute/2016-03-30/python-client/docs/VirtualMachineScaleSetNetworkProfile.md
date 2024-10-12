# VirtualMachineScaleSetNetworkProfile

Describes a virtual machine scale set network profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_interface_configurations** | [**List[VirtualMachineScaleSetNetworkConfiguration]**](VirtualMachineScaleSetNetworkConfiguration.md) | The list of network configurations. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_network_profile import VirtualMachineScaleSetNetworkProfile

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetNetworkProfile from a JSON string
virtual_machine_scale_set_network_profile_instance = VirtualMachineScaleSetNetworkProfile.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetNetworkProfile.to_json())

# convert the object into a dict
virtual_machine_scale_set_network_profile_dict = virtual_machine_scale_set_network_profile_instance.to_dict()
# create an instance of VirtualMachineScaleSetNetworkProfile from a dict
virtual_machine_scale_set_network_profile_from_dict = VirtualMachineScaleSetNetworkProfile.from_dict(virtual_machine_scale_set_network_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



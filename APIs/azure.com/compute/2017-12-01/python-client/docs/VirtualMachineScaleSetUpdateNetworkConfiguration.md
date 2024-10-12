# VirtualMachineScaleSetUpdateNetworkConfiguration

Describes a virtual machine scale set network profile's network configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The network configuration name. | [optional] 
**properties** | [**VirtualMachineScaleSetUpdateNetworkConfigurationProperties**](VirtualMachineScaleSetUpdateNetworkConfigurationProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_update_network_configuration import VirtualMachineScaleSetUpdateNetworkConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetUpdateNetworkConfiguration from a JSON string
virtual_machine_scale_set_update_network_configuration_instance = VirtualMachineScaleSetUpdateNetworkConfiguration.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetUpdateNetworkConfiguration.to_json())

# convert the object into a dict
virtual_machine_scale_set_update_network_configuration_dict = virtual_machine_scale_set_update_network_configuration_instance.to_dict()
# create an instance of VirtualMachineScaleSetUpdateNetworkConfiguration from a dict
virtual_machine_scale_set_update_network_configuration_from_dict = VirtualMachineScaleSetUpdateNetworkConfiguration.from_dict(virtual_machine_scale_set_update_network_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



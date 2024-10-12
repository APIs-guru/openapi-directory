# VirtualMachineScaleSetIPConfiguration

Describes a virtual machine scale set network profile's IP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The IP configuration name. | 
**properties** | [**VirtualMachineScaleSetIPConfigurationProperties**](VirtualMachineScaleSetIPConfigurationProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_ip_configuration import VirtualMachineScaleSetIPConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetIPConfiguration from a JSON string
virtual_machine_scale_set_ip_configuration_instance = VirtualMachineScaleSetIPConfiguration.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetIPConfiguration.to_json())

# convert the object into a dict
virtual_machine_scale_set_ip_configuration_dict = virtual_machine_scale_set_ip_configuration_instance.to_dict()
# create an instance of VirtualMachineScaleSetIPConfiguration from a dict
virtual_machine_scale_set_ip_configuration_from_dict = VirtualMachineScaleSetIPConfiguration.from_dict(virtual_machine_scale_set_ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



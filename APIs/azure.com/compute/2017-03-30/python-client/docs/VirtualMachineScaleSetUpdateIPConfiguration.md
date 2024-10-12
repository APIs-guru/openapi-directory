# VirtualMachineScaleSetUpdateIPConfiguration

Describes a virtual machine scale set network profile's IP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The IP configuration name. | [optional] 
**properties** | [**VirtualMachineScaleSetUpdateIPConfigurationProperties**](VirtualMachineScaleSetUpdateIPConfigurationProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_update_ip_configuration import VirtualMachineScaleSetUpdateIPConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetUpdateIPConfiguration from a JSON string
virtual_machine_scale_set_update_ip_configuration_instance = VirtualMachineScaleSetUpdateIPConfiguration.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetUpdateIPConfiguration.to_json())

# convert the object into a dict
virtual_machine_scale_set_update_ip_configuration_dict = virtual_machine_scale_set_update_ip_configuration_instance.to_dict()
# create an instance of VirtualMachineScaleSetUpdateIPConfiguration from a dict
virtual_machine_scale_set_update_ip_configuration_from_dict = VirtualMachineScaleSetUpdateIPConfiguration.from_dict(virtual_machine_scale_set_update_ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



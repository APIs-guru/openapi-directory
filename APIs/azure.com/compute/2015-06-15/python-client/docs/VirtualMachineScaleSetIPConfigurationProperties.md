# VirtualMachineScaleSetIPConfigurationProperties

Describes a virtual machine scale set network profile's IP configuration properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**load_balancer_backend_address_pools** | [**List[SubResource]**](SubResource.md) | The load balancer backend address pools. | [optional] 
**load_balancer_inbound_nat_pools** | [**List[SubResource]**](SubResource.md) | The load balancer inbound nat pools. | [optional] 
**subnet** | [**ApiEntityReference**](ApiEntityReference.md) |  | 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_ip_configuration_properties import VirtualMachineScaleSetIPConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetIPConfigurationProperties from a JSON string
virtual_machine_scale_set_ip_configuration_properties_instance = VirtualMachineScaleSetIPConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetIPConfigurationProperties.to_json())

# convert the object into a dict
virtual_machine_scale_set_ip_configuration_properties_dict = virtual_machine_scale_set_ip_configuration_properties_instance.to_dict()
# create an instance of VirtualMachineScaleSetIPConfigurationProperties from a dict
virtual_machine_scale_set_ip_configuration_properties_from_dict = VirtualMachineScaleSetIPConfigurationProperties.from_dict(virtual_machine_scale_set_ip_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



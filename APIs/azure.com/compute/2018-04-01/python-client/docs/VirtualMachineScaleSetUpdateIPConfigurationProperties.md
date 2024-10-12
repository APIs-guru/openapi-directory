# VirtualMachineScaleSetUpdateIPConfigurationProperties

Describes a virtual machine scale set network profile's IP configuration properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_gateway_backend_address_pools** | [**List[SubResource]**](SubResource.md) | The application gateway backend address pools. | [optional] 
**load_balancer_backend_address_pools** | [**List[SubResource]**](SubResource.md) | The load balancer backend address pools. | [optional] 
**load_balancer_inbound_nat_pools** | [**List[SubResource]**](SubResource.md) | The load balancer inbound nat pools. | [optional] 
**primary** | **bool** | Specifies the primary IP Configuration in case the network interface has more than one IP Configuration. | [optional] 
**private_ip_address_version** | **str** | Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: &#39;IPv4&#39; and &#39;IPv6&#39;. | [optional] 
**public_ip_address_configuration** | [**VirtualMachineScaleSetUpdatePublicIPAddressConfiguration**](VirtualMachineScaleSetUpdatePublicIPAddressConfiguration.md) |  | [optional] 
**subnet** | [**ApiEntityReference**](ApiEntityReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_update_ip_configuration_properties import VirtualMachineScaleSetUpdateIPConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetUpdateIPConfigurationProperties from a JSON string
virtual_machine_scale_set_update_ip_configuration_properties_instance = VirtualMachineScaleSetUpdateIPConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetUpdateIPConfigurationProperties.to_json())

# convert the object into a dict
virtual_machine_scale_set_update_ip_configuration_properties_dict = virtual_machine_scale_set_update_ip_configuration_properties_instance.to_dict()
# create an instance of VirtualMachineScaleSetUpdateIPConfigurationProperties from a dict
virtual_machine_scale_set_update_ip_configuration_properties_from_dict = VirtualMachineScaleSetUpdateIPConfigurationProperties.from_dict(virtual_machine_scale_set_update_ip_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



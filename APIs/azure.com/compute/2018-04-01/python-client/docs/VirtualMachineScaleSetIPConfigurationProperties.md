# VirtualMachineScaleSetIPConfigurationProperties

Describes a virtual machine scale set network profile's IP configuration properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_gateway_backend_address_pools** | [**List[SubResource]**](SubResource.md) | Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway. | [optional] 
**load_balancer_backend_address_pools** | [**List[SubResource]**](SubResource.md) | Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer. | [optional] 
**load_balancer_inbound_nat_pools** | [**List[SubResource]**](SubResource.md) | Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer | [optional] 
**primary** | **bool** | Specifies the primary network interface in case the virtual machine has more than 1 network interface. | [optional] 
**private_ip_address_version** | **str** | Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: &#39;IPv4&#39; and &#39;IPv6&#39;. | [optional] 
**public_ip_address_configuration** | [**VirtualMachineScaleSetPublicIPAddressConfiguration**](VirtualMachineScaleSetPublicIPAddressConfiguration.md) |  | [optional] 
**subnet** | [**ApiEntityReference**](ApiEntityReference.md) |  | [optional] 

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



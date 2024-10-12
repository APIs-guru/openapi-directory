# VirtualMachineScaleSetPublicIPAddressConfigurationProperties

Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_settings** | [**VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings**](VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings.md) |  | [optional] 
**idle_timeout_in_minutes** | **int** | The idle timeout of the public IP address. | [optional] 
**ip_tags** | [**List[VirtualMachineScaleSetIpTag]**](VirtualMachineScaleSetIpTag.md) | The list of IP tags associated with the public IP address. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_public_ip_address_configuration_properties import VirtualMachineScaleSetPublicIPAddressConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetPublicIPAddressConfigurationProperties from a JSON string
virtual_machine_scale_set_public_ip_address_configuration_properties_instance = VirtualMachineScaleSetPublicIPAddressConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetPublicIPAddressConfigurationProperties.to_json())

# convert the object into a dict
virtual_machine_scale_set_public_ip_address_configuration_properties_dict = virtual_machine_scale_set_public_ip_address_configuration_properties_instance.to_dict()
# create an instance of VirtualMachineScaleSetPublicIPAddressConfigurationProperties from a dict
virtual_machine_scale_set_public_ip_address_configuration_properties_from_dict = VirtualMachineScaleSetPublicIPAddressConfigurationProperties.from_dict(virtual_machine_scale_set_public_ip_address_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



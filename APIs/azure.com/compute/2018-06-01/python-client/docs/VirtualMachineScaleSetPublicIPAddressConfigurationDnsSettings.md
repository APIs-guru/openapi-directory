# VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings

Describes a virtual machines scale sets network configuration's DNS settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name_label** | **str** | The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created | 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_public_ip_address_configuration_dns_settings import VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings from a JSON string
virtual_machine_scale_set_public_ip_address_configuration_dns_settings_instance = VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings.to_json())

# convert the object into a dict
virtual_machine_scale_set_public_ip_address_configuration_dns_settings_dict = virtual_machine_scale_set_public_ip_address_configuration_dns_settings_instance.to_dict()
# create an instance of VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings from a dict
virtual_machine_scale_set_public_ip_address_configuration_dns_settings_from_dict = VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings.from_dict(virtual_machine_scale_set_public_ip_address_configuration_dns_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



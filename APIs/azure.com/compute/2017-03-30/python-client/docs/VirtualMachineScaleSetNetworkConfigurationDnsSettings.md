# VirtualMachineScaleSetNetworkConfigurationDnsSettings

Describes a virtual machines scale sets network configuration's DNS settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_servers** | **List[str]** | List of DNS servers IP addresses | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_network_configuration_dns_settings import VirtualMachineScaleSetNetworkConfigurationDnsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetNetworkConfigurationDnsSettings from a JSON string
virtual_machine_scale_set_network_configuration_dns_settings_instance = VirtualMachineScaleSetNetworkConfigurationDnsSettings.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetNetworkConfigurationDnsSettings.to_json())

# convert the object into a dict
virtual_machine_scale_set_network_configuration_dns_settings_dict = virtual_machine_scale_set_network_configuration_dns_settings_instance.to_dict()
# create an instance of VirtualMachineScaleSetNetworkConfigurationDnsSettings from a dict
virtual_machine_scale_set_network_configuration_dns_settings_from_dict = VirtualMachineScaleSetNetworkConfigurationDnsSettings.from_dict(virtual_machine_scale_set_network_configuration_dns_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



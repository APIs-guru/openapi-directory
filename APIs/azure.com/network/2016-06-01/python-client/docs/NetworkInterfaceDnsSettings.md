# NetworkInterfaceDnsSettings

Dns settings of a network interface

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_dns_servers** | **List[str]** | Gets or sets list of Applied DNS servers IP addresses | [optional] 
**dns_servers** | **List[str]** | Gets or sets list of DNS servers IP addresses | [optional] 
**internal_dns_name_label** | **str** | Gets or sets the internal DNS name | [optional] 
**internal_domain_name_suffix** | **str** | Gets or sets internal domain name suffix of the NIC. | [optional] 
**internal_fqdn** | **str** | Gets or sets the internal fqdn. | [optional] 

## Example

```python
from openapi_client.models.network_interface_dns_settings import NetworkInterfaceDnsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceDnsSettings from a JSON string
network_interface_dns_settings_instance = NetworkInterfaceDnsSettings.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceDnsSettings.to_json())

# convert the object into a dict
network_interface_dns_settings_dict = network_interface_dns_settings_instance.to_dict()
# create an instance of NetworkInterfaceDnsSettings from a dict
network_interface_dns_settings_from_dict = NetworkInterfaceDnsSettings.from_dict(network_interface_dns_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



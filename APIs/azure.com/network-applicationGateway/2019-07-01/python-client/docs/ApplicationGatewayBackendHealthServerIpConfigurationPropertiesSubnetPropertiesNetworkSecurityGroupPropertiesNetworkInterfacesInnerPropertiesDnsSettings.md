# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesDnsSettings

DNS settings of a network interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_dns_servers** | **List[str]** | If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs. | [optional] 
**dns_servers** | **List[str]** | List of DNS servers IP addresses. Use &#39;AzureProvidedDNS&#39; to switch to azure provided DNS resolution. &#39;AzureProvidedDNS&#39; value cannot be combined with other IPs, it must be the only value in dnsServers collection. | [optional] 
**internal_dns_name_label** | **str** | Relative DNS name for this NIC used for internal communications between VMs in the same virtual network. | [optional] 
**internal_domain_name_suffix** | **str** | Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix. | [optional] 
**internal_fqdn** | **str** | Fully qualified DNS name supporting internal communications between VMs in the same virtual network. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_dns_settings import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesDnsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesDnsSettings from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_dns_settings_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesDnsSettings.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesDnsSettings.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_dns_settings_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_dns_settings_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesDnsSettings from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_dns_settings_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesDnsSettings.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_dns_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



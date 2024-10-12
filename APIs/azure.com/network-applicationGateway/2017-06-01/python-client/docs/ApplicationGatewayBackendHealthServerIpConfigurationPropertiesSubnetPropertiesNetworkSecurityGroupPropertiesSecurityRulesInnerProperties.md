# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesSecurityRulesInnerProperties

Security rule resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | The network traffic is allowed or denied. Possible values are: &#39;Allow&#39; and &#39;Deny&#39;. | 
**description** | **str** | A description for this rule. Restricted to 140 chars. | [optional] 
**destination_address_prefix** | **str** | The destination address prefix. CIDR or destination IP range. Asterisk &#39;*&#39; can also be used to match all source IPs. Default tags such as &#39;VirtualNetwork&#39;, &#39;AzureLoadBalancer&#39; and &#39;Internet&#39; can also be used. | [optional] 
**destination_address_prefixes** | **List[str]** | The destination address prefixes. CIDR or destination IP ranges. | [optional] 
**destination_port_range** | **str** | The destination port or range. Integer or range between 0 and 65535. Asterisk &#39;*&#39; can also be used to match all ports. | [optional] 
**destination_port_ranges** | **List[str]** | The destination port ranges. | [optional] 
**direction** | **str** | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are: &#39;Inbound&#39; and &#39;Outbound&#39;. | 
**priority** | **int** | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | [optional] 
**protocol** | **str** | Network protocol this rule applies to. Possible values are &#39;Tcp&#39;, &#39;Udp&#39;, and &#39;*&#39;. | 
**provisioning_state** | **str** | The provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**source_address_prefix** | **str** | The CIDR or source IP range. Asterisk &#39;*&#39; can also be used to match all source IPs. Default tags such as &#39;VirtualNetwork&#39;, &#39;AzureLoadBalancer&#39; and &#39;Internet&#39; can also be used. If this is an ingress rule, specifies where network traffic originates from.  | [optional] 
**source_address_prefixes** | **List[str]** | The CIDR or source IP ranges. | [optional] 
**source_port_range** | **str** | The source port or range. Integer or range between 0 and 65535. Asterisk &#39;*&#39; can also be used to match all ports. | [optional] 
**source_port_ranges** | **List[str]** | The source port ranges. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_security_rules_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesSecurityRulesInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesSecurityRulesInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_security_rules_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesSecurityRulesInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesSecurityRulesInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_security_rules_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_security_rules_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesSecurityRulesInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_security_rules_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesSecurityRulesInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_security_rules_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



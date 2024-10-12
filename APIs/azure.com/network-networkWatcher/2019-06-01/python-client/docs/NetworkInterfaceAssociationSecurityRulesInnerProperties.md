# NetworkInterfaceAssociationSecurityRulesInnerProperties

Security rule resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Whether network traffic is allowed or denied. | 
**description** | **str** | A description for this rule. Restricted to 140 chars. | [optional] 
**destination_address_prefix** | **str** | The destination address prefix. CIDR or destination IP range. Asterisk &#39;*&#39; can also be used to match all source IPs. Default tags such as &#39;VirtualNetwork&#39;, &#39;AzureLoadBalancer&#39; and &#39;Internet&#39; can also be used. | [optional] 
**destination_address_prefixes** | **List[str]** | The destination address prefixes. CIDR or destination IP ranges. | [optional] 
**destination_application_security_groups** | [**List[NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInner]**](NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInner.md) | The application security group specified as destination. | [optional] 
**destination_port_range** | **str** | The destination port or range. Integer or range between 0 and 65535. Asterisk &#39;*&#39; can also be used to match all ports. | [optional] 
**destination_port_ranges** | **List[str]** | The destination port ranges. | [optional] 
**direction** | **str** | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 
**priority** | **int** | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | [optional] 
**protocol** | **str** | Network protocol this rule applies to. | 
**provisioning_state** | **str** | The provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**source_address_prefix** | **str** | The CIDR or source IP range. Asterisk &#39;*&#39; can also be used to match all source IPs. Default tags such as &#39;VirtualNetwork&#39;, &#39;AzureLoadBalancer&#39; and &#39;Internet&#39; can also be used. If this is an ingress rule, specifies where network traffic originates from. | [optional] 
**source_address_prefixes** | **List[str]** | The CIDR or source IP ranges. | [optional] 
**source_application_security_groups** | [**List[NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInner]**](NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInner.md) | The application security group specified as source. | [optional] 
**source_port_range** | **str** | The source port or range. Integer or range between 0 and 65535. Asterisk &#39;*&#39; can also be used to match all ports. | [optional] 
**source_port_ranges** | **List[str]** | The source port ranges. | [optional] 

## Example

```python
from openapi_client.models.network_interface_association_security_rules_inner_properties import NetworkInterfaceAssociationSecurityRulesInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceAssociationSecurityRulesInnerProperties from a JSON string
network_interface_association_security_rules_inner_properties_instance = NetworkInterfaceAssociationSecurityRulesInnerProperties.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceAssociationSecurityRulesInnerProperties.to_json())

# convert the object into a dict
network_interface_association_security_rules_inner_properties_dict = network_interface_association_security_rules_inner_properties_instance.to_dict()
# create an instance of NetworkInterfaceAssociationSecurityRulesInnerProperties from a dict
network_interface_association_security_rules_inner_properties_from_dict = NetworkInterfaceAssociationSecurityRulesInnerProperties.from_dict(network_interface_association_security_rules_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



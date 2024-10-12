# SecurityRulePropertiesFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Gets or sets network traffic is allowed or denied. Possible values are &#39;Allow&#39; and &#39;Deny&#39; | 
**description** | **str** | Gets or sets a description for this rule. Restricted to 140 chars. | [optional] 
**destination_address_prefix** | **str** | Gets or sets destination address prefix. CIDR or source IP range. Asterisk &#39;*&#39; can also be used to match all source IPs. Default tags such as &#39;VirtualNetwork&#39;, &#39;AzureLoadBalancer&#39; and &#39;Internet&#39; can also be used.  | 
**destination_port_range** | **str** | Gets or sets Destination Port or Range. Integer or range between 0 and 65535. Asterisk &#39;*&#39; can also be used to match all ports. | [optional] 
**direction** | **str** | Gets or sets the direction of the rule.InBound or Outbound. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 
**priority** | **int** | Gets or sets the priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | [optional] 
**protocol** | **str** | Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*). | 
**provisioning_state** | **str** | Gets provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**source_address_prefix** | **str** | Gets or sets source address prefix. CIDR or source IP range. Asterisk &#39;*&#39; can also be used to match all source IPs. Default tags such as &#39;VirtualNetwork&#39;, &#39;AzureLoadBalancer&#39; and &#39;Internet&#39; can also be used. If this is an ingress rule, specifies where network traffic originates from.  | 
**source_port_range** | **str** | Gets or sets Source Port or Range. Integer or range between 0 and 65535. Asterisk &#39;*&#39; can also be used to match all ports. | [optional] 

## Example

```python
from openapi_client.models.security_rule_properties_format import SecurityRulePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityRulePropertiesFormat from a JSON string
security_rule_properties_format_instance = SecurityRulePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(SecurityRulePropertiesFormat.to_json())

# convert the object into a dict
security_rule_properties_format_dict = security_rule_properties_format_instance.to_dict()
# create an instance of SecurityRulePropertiesFormat from a dict
security_rule_properties_format_from_dict = SecurityRulePropertiesFormat.from_dict(security_rule_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



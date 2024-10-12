# ApplicationGatewayFirewallRuleSetPropertiesFormat

Properties of the web application firewall rule set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the web application firewall rule set. | [optional] 
**rule_groups** | [**List[ApplicationGatewayFirewallRuleGroup]**](ApplicationGatewayFirewallRuleGroup.md) | The rule groups of the web application firewall rule set. | 
**rule_set_type** | **str** | The type of the web application firewall rule set. | 
**rule_set_version** | **str** | The version of the web application firewall rule set type. | 

## Example

```python
from openapi_client.models.application_gateway_firewall_rule_set_properties_format import ApplicationGatewayFirewallRuleSetPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayFirewallRuleSetPropertiesFormat from a JSON string
application_gateway_firewall_rule_set_properties_format_instance = ApplicationGatewayFirewallRuleSetPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayFirewallRuleSetPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_firewall_rule_set_properties_format_dict = application_gateway_firewall_rule_set_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayFirewallRuleSetPropertiesFormat from a dict
application_gateway_firewall_rule_set_properties_format_from_dict = ApplicationGatewayFirewallRuleSetPropertiesFormat.from_dict(application_gateway_firewall_rule_set_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



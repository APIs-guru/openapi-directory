# ApplicationGatewayFirewallRuleGroup

A web application firewall rule group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the web application firewall rule group. | [optional] 
**rule_group_name** | **str** | The name of the web application firewall rule group. | 
**rules** | [**List[ApplicationGatewayFirewallRule]**](ApplicationGatewayFirewallRule.md) | The rules of the web application firewall rule group. | 

## Example

```python
from openapi_client.models.application_gateway_firewall_rule_group import ApplicationGatewayFirewallRuleGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayFirewallRuleGroup from a JSON string
application_gateway_firewall_rule_group_instance = ApplicationGatewayFirewallRuleGroup.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayFirewallRuleGroup.to_json())

# convert the object into a dict
application_gateway_firewall_rule_group_dict = application_gateway_firewall_rule_group_instance.to_dict()
# create an instance of ApplicationGatewayFirewallRuleGroup from a dict
application_gateway_firewall_rule_group_from_dict = ApplicationGatewayFirewallRuleGroup.from_dict(application_gateway_firewall_rule_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



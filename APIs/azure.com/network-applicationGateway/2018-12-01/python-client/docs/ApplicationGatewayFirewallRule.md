# ApplicationGatewayFirewallRule

A web application firewall rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the web application firewall rule. | [optional] 
**rule_id** | **int** | The identifier of the web application firewall rule. | 

## Example

```python
from openapi_client.models.application_gateway_firewall_rule import ApplicationGatewayFirewallRule

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayFirewallRule from a JSON string
application_gateway_firewall_rule_instance = ApplicationGatewayFirewallRule.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayFirewallRule.to_json())

# convert the object into a dict
application_gateway_firewall_rule_dict = application_gateway_firewall_rule_instance.to_dict()
# create an instance of ApplicationGatewayFirewallRule from a dict
application_gateway_firewall_rule_from_dict = ApplicationGatewayFirewallRule.from_dict(application_gateway_firewall_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



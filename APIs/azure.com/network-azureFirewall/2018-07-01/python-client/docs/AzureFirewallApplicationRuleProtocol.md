# AzureFirewallApplicationRuleProtocol

Properties of the application rule protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | Port number for the protocol, cannot be greater than 64000. This field is optional. | [optional] 
**protocol_type** | [**AzureFirewallApplicationRuleProtocolType**](AzureFirewallApplicationRuleProtocolType.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_application_rule_protocol import AzureFirewallApplicationRuleProtocol

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallApplicationRuleProtocol from a JSON string
azure_firewall_application_rule_protocol_instance = AzureFirewallApplicationRuleProtocol.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallApplicationRuleProtocol.to_json())

# convert the object into a dict
azure_firewall_application_rule_protocol_dict = azure_firewall_application_rule_protocol_instance.to_dict()
# create an instance of AzureFirewallApplicationRuleProtocol from a dict
azure_firewall_application_rule_protocol_from_dict = AzureFirewallApplicationRuleProtocol.from_dict(azure_firewall_application_rule_protocol_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



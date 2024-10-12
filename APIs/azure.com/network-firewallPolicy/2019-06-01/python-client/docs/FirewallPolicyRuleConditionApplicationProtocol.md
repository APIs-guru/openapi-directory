# FirewallPolicyRuleConditionApplicationProtocol

Properties of the application rule protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | Port number for the protocol, cannot be greater than 64000. | [optional] 
**protocol_type** | [**FirewallPolicyRuleConditionApplicationProtocolType**](FirewallPolicyRuleConditionApplicationProtocolType.md) |  | [optional] 

## Example

```python
from openapi_client.models.firewall_policy_rule_condition_application_protocol import FirewallPolicyRuleConditionApplicationProtocol

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyRuleConditionApplicationProtocol from a JSON string
firewall_policy_rule_condition_application_protocol_instance = FirewallPolicyRuleConditionApplicationProtocol.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyRuleConditionApplicationProtocol.to_json())

# convert the object into a dict
firewall_policy_rule_condition_application_protocol_dict = firewall_policy_rule_condition_application_protocol_instance.to_dict()
# create an instance of FirewallPolicyRuleConditionApplicationProtocol from a dict
firewall_policy_rule_condition_application_protocol_from_dict = FirewallPolicyRuleConditionApplicationProtocol.from_dict(firewall_policy_rule_condition_application_protocol_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



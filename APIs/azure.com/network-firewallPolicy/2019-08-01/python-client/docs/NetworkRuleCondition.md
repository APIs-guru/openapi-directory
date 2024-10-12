# NetworkRuleCondition

Rule condition of type network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_addresses** | **List[str]** | List of destination IP addresses or Service Tags. | [optional] 
**destination_ports** | **List[str]** | List of destination ports. | [optional] 
**ip_protocols** | [**List[FirewallPolicyRuleConditionNetworkProtocol]**](FirewallPolicyRuleConditionNetworkProtocol.md) | Array of FirewallPolicyRuleConditionNetworkProtocols. | [optional] 
**source_addresses** | **List[str]** | List of source IP addresses for this rule. | [optional] 

## Example

```python
from openapi_client.models.network_rule_condition import NetworkRuleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkRuleCondition from a JSON string
network_rule_condition_instance = NetworkRuleCondition.from_json(json)
# print the JSON string representation of the object
print(NetworkRuleCondition.to_json())

# convert the object into a dict
network_rule_condition_dict = network_rule_condition_instance.to_dict()
# create an instance of NetworkRuleCondition from a dict
network_rule_condition_from_dict = NetworkRuleCondition.from_dict(network_rule_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



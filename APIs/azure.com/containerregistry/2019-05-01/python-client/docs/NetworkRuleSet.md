# NetworkRuleSet

The network rule set for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_action** | **str** | The default action of allow or deny when no other rules match. | [default to 'Allow']
**ip_rules** | [**List[IPRule]**](IPRule.md) | The IP ACL rules. | [optional] 
**virtual_network_rules** | [**List[VirtualNetworkRule]**](VirtualNetworkRule.md) | The virtual network rules. | [optional] 

## Example

```python
from openapi_client.models.network_rule_set import NetworkRuleSet

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkRuleSet from a JSON string
network_rule_set_instance = NetworkRuleSet.from_json(json)
# print the JSON string representation of the object
print(NetworkRuleSet.to_json())

# convert the object into a dict
network_rule_set_dict = network_rule_set_instance.to_dict()
# create an instance of NetworkRuleSet from a dict
network_rule_set_from_dict = NetworkRuleSet.from_dict(network_rule_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



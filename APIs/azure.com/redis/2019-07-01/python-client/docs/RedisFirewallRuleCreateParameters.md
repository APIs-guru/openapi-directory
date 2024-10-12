# RedisFirewallRuleCreateParameters

Parameters required for creating a firewall rule on redis cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RedisFirewallRuleProperties**](RedisFirewallRuleProperties.md) |  | 

## Example

```python
from openapi_client.models.redis_firewall_rule_create_parameters import RedisFirewallRuleCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RedisFirewallRuleCreateParameters from a JSON string
redis_firewall_rule_create_parameters_instance = RedisFirewallRuleCreateParameters.from_json(json)
# print the JSON string representation of the object
print(RedisFirewallRuleCreateParameters.to_json())

# convert the object into a dict
redis_firewall_rule_create_parameters_dict = redis_firewall_rule_create_parameters_instance.to_dict()
# create an instance of RedisFirewallRuleCreateParameters from a dict
redis_firewall_rule_create_parameters_from_dict = RedisFirewallRuleCreateParameters.from_dict(redis_firewall_rule_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



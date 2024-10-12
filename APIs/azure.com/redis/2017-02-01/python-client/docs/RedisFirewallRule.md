# RedisFirewallRule

A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RedisFirewallRuleProperties**](RedisFirewallRuleProperties.md) |  | 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.redis_firewall_rule import RedisFirewallRule

# TODO update the JSON string below
json = "{}"
# create an instance of RedisFirewallRule from a JSON string
redis_firewall_rule_instance = RedisFirewallRule.from_json(json)
# print the JSON string representation of the object
print(RedisFirewallRule.to_json())

# convert the object into a dict
redis_firewall_rule_dict = redis_firewall_rule_instance.to_dict()
# create an instance of RedisFirewallRule from a dict
redis_firewall_rule_from_dict = RedisFirewallRule.from_dict(redis_firewall_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RedisFirewallRuleProperties

Specifies a range of IP addresses permitted to connect to the cache

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_ip** | **str** | highest IP address included in the range | 
**start_ip** | **str** | lowest IP address included in the range | 

## Example

```python
from openapi_client.models.redis_firewall_rule_properties import RedisFirewallRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RedisFirewallRuleProperties from a JSON string
redis_firewall_rule_properties_instance = RedisFirewallRuleProperties.from_json(json)
# print the JSON string representation of the object
print(RedisFirewallRuleProperties.to_json())

# convert the object into a dict
redis_firewall_rule_properties_dict = redis_firewall_rule_properties_instance.to_dict()
# create an instance of RedisFirewallRuleProperties from a dict
redis_firewall_rule_properties_from_dict = RedisFirewallRuleProperties.from_dict(redis_firewall_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



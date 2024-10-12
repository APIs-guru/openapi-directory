# RedisFirewallRuleListResult

The response of list firewall rules Redis operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of locations. | [optional] [readonly] 
**value** | [**List[RedisFirewallRule]**](RedisFirewallRule.md) | Results of the list firewall rules operation. | [optional] 

## Example

```python
from openapi_client.models.redis_firewall_rule_list_result import RedisFirewallRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RedisFirewallRuleListResult from a JSON string
redis_firewall_rule_list_result_instance = RedisFirewallRuleListResult.from_json(json)
# print the JSON string representation of the object
print(RedisFirewallRuleListResult.to_json())

# convert the object into a dict
redis_firewall_rule_list_result_dict = redis_firewall_rule_list_result_instance.to_dict()
# create an instance of RedisFirewallRuleListResult from a dict
redis_firewall_rule_list_result_from_dict = RedisFirewallRuleListResult.from_dict(redis_firewall_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



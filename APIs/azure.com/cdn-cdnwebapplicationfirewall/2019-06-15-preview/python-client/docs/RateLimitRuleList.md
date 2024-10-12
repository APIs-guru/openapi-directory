# RateLimitRuleList

Defines contents of rate limit rules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[RateLimitRule]**](RateLimitRule.md) | List of rules | [optional] 

## Example

```python
from openapi_client.models.rate_limit_rule_list import RateLimitRuleList

# TODO update the JSON string below
json = "{}"
# create an instance of RateLimitRuleList from a JSON string
rate_limit_rule_list_instance = RateLimitRuleList.from_json(json)
# print the JSON string representation of the object
print(RateLimitRuleList.to_json())

# convert the object into a dict
rate_limit_rule_list_dict = rate_limit_rule_list_instance.to_dict()
# create an instance of RateLimitRuleList from a dict
rate_limit_rule_list_from_dict = RateLimitRuleList.from_dict(rate_limit_rule_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



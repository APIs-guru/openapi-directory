# RateLimitRule

Defines a rate limiting rule that can be included in a waf policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_limit_duration_in_minutes** | **int** | Defines rate limit duration. Default is 1 minute. | 
**rate_limit_threshold** | **int** | Defines rate limit threshold. | 
**action** | [**ActionType**](ActionType.md) |  | 
**enabled_state** | **str** | Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. | [optional] 
**match_conditions** | [**List[MatchCondition]**](MatchCondition.md) | List of match conditions. | 
**name** | **str** | Defines the name of the custom rule | 
**priority** | **int** | Defines in what order this rule be evaluated in the overall list of custom rules | 

## Example

```python
from openapi_client.models.rate_limit_rule import RateLimitRule

# TODO update the JSON string below
json = "{}"
# create an instance of RateLimitRule from a JSON string
rate_limit_rule_instance = RateLimitRule.from_json(json)
# print the JSON string representation of the object
print(RateLimitRule.to_json())

# convert the object into a dict
rate_limit_rule_dict = rate_limit_rule_instance.to_dict()
# create an instance of RateLimitRule from a dict
rate_limit_rule_from_dict = RateLimitRule.from_dict(rate_limit_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



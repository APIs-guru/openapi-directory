# CustomRule

Defines contents of a web application rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ActionType**](ActionType.md) |  | 
**enabled_state** | **str** | Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. | [optional] 
**match_conditions** | [**List[MatchCondition]**](MatchCondition.md) | List of match conditions. | 
**name** | **str** | Describes the name of the rule. | [optional] 
**priority** | **int** | Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value. | 
**rate_limit_duration_in_minutes** | **int** | Time window for resetting the rate limit count. Default is 1 minute. | [optional] 
**rate_limit_threshold** | **int** | Number of allowed requests per client within the time window. | [optional] 
**rule_type** | **str** | Describes type of rule. | 

## Example

```python
from openapi_client.models.custom_rule import CustomRule

# TODO update the JSON string below
json = "{}"
# create an instance of CustomRule from a JSON string
custom_rule_instance = CustomRule.from_json(json)
# print the JSON string representation of the object
print(CustomRule.to_json())

# convert the object into a dict
custom_rule_dict = custom_rule_instance.to_dict()
# create an instance of CustomRule from a dict
custom_rule_from_dict = CustomRule.from_dict(custom_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



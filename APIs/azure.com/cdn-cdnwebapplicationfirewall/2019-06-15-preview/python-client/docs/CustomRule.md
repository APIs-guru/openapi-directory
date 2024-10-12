# CustomRule

Defines the common attributes for a custom rule that can be included in a waf policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ActionType**](ActionType.md) |  | 
**enabled_state** | **str** | Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. | [optional] 
**match_conditions** | [**List[MatchCondition]**](MatchCondition.md) | List of match conditions. | 
**name** | **str** | Defines the name of the custom rule | 
**priority** | **int** | Defines in what order this rule be evaluated in the overall list of custom rules | 

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



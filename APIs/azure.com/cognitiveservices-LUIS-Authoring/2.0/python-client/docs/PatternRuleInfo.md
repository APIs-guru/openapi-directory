# PatternRuleInfo

Pattern rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The pattern ID. | [optional] 
**intent** | **str** | The intent&#39;s name where the pattern belongs to. | [optional] 
**pattern** | **str** | The pattern text. | [optional] 

## Example

```python
from openapi_client.models.pattern_rule_info import PatternRuleInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PatternRuleInfo from a JSON string
pattern_rule_info_instance = PatternRuleInfo.from_json(json)
# print the JSON string representation of the object
print(PatternRuleInfo.to_json())

# convert the object into a dict
pattern_rule_info_dict = pattern_rule_info_instance.to_dict()
# create an instance of PatternRuleInfo from a dict
pattern_rule_info_from_dict = PatternRuleInfo.from_dict(pattern_rule_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



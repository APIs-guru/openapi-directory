# PatternRule

Pattern

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intent** | **str** | The intent&#39;s name where the pattern belongs to. | [optional] 
**pattern** | **str** | The pattern text. | [optional] 

## Example

```python
from openapi_client.models.pattern_rule import PatternRule

# TODO update the JSON string below
json = "{}"
# create an instance of PatternRule from a JSON string
pattern_rule_instance = PatternRule.from_json(json)
# print the JSON string representation of the object
print(PatternRule.to_json())

# convert the object into a dict
pattern_rule_dict = pattern_rule_instance.to_dict()
# create an instance of PatternRule from a dict
pattern_rule_from_dict = PatternRule.from_dict(pattern_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



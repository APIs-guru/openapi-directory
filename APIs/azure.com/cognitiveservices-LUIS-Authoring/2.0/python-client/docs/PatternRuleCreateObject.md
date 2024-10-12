# PatternRuleCreateObject

Object model for creating a pattern

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intent** | **str** | The intent&#39;s name which the pattern belongs to. | [optional] 
**pattern** | **str** | The pattern text. | [optional] 

## Example

```python
from openapi_client.models.pattern_rule_create_object import PatternRuleCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of PatternRuleCreateObject from a JSON string
pattern_rule_create_object_instance = PatternRuleCreateObject.from_json(json)
# print the JSON string representation of the object
print(PatternRuleCreateObject.to_json())

# convert the object into a dict
pattern_rule_create_object_dict = pattern_rule_create_object_instance.to_dict()
# create an instance of PatternRuleCreateObject from a dict
pattern_rule_create_object_from_dict = PatternRuleCreateObject.from_dict(pattern_rule_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PatternRuleUpdateObject

Object model for updating a pattern.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The pattern ID. | [optional] 
**intent** | **str** | The intent&#39;s name which the pattern belongs to. | [optional] 
**pattern** | **str** | The pattern text. | [optional] 

## Example

```python
from openapi_client.models.pattern_rule_update_object import PatternRuleUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of PatternRuleUpdateObject from a JSON string
pattern_rule_update_object_instance = PatternRuleUpdateObject.from_json(json)
# print the JSON string representation of the object
print(PatternRuleUpdateObject.to_json())

# convert the object into a dict
pattern_rule_update_object_dict = pattern_rule_update_object_instance.to_dict()
# create an instance of PatternRuleUpdateObject from a dict
pattern_rule_update_object_from_dict = PatternRuleUpdateObject.from_dict(pattern_rule_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



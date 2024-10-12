# ResultRuleGroupsValue

The name of this rule group: one of \"SPEED\" or \"USABILITY\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **int** | The score (0-100) for this rule group, which indicates how much better a page could be in that category (e.g. how much faster, or how much more usable). A high score indicates little room for improvement, while a lower score indicates more room for improvement. | [optional] 

## Example

```python
from openapi_client.models.result_rule_groups_value import ResultRuleGroupsValue

# TODO update the JSON string below
json = "{}"
# create an instance of ResultRuleGroupsValue from a JSON string
result_rule_groups_value_instance = ResultRuleGroupsValue.from_json(json)
# print the JSON string representation of the object
print(ResultRuleGroupsValue.to_json())

# convert the object into a dict
result_rule_groups_value_dict = result_rule_groups_value_instance.to_dict()
# create an instance of ResultRuleGroupsValue from a dict
result_rule_groups_value_from_dict = ResultRuleGroupsValue.from_dict(result_rule_groups_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



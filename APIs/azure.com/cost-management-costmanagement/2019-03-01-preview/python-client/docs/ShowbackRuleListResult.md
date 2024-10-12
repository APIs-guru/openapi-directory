# ShowbackRuleListResult

Result of listing showback rules. It contains a list of available rules in the scope provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ShowbackRule]**](ShowbackRule.md) | The list of showback rules. | [optional] [readonly] 

## Example

```python
from openapi_client.models.showback_rule_list_result import ShowbackRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ShowbackRuleListResult from a JSON string
showback_rule_list_result_instance = ShowbackRuleListResult.from_json(json)
# print the JSON string representation of the object
print(ShowbackRuleListResult.to_json())

# convert the object into a dict
showback_rule_list_result_dict = showback_rule_list_result_instance.to_dict()
# create an instance of ShowbackRuleListResult from a dict
showback_rule_list_result_from_dict = ShowbackRuleListResult.from_dict(showback_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



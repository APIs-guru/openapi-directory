# UpdateConditionalFormatRuleResponse

The result of updating a conditional format rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_index** | **int** | The index of the new rule. | [optional] 
**new_rule** | [**ConditionalFormatRule**](ConditionalFormatRule.md) |  | [optional] 
**old_index** | **int** | The old index of the rule. Not set if a rule was replaced (because it is the same as new_index). | [optional] 
**old_rule** | [**ConditionalFormatRule**](ConditionalFormatRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_conditional_format_rule_response import UpdateConditionalFormatRuleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateConditionalFormatRuleResponse from a JSON string
update_conditional_format_rule_response_instance = UpdateConditionalFormatRuleResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateConditionalFormatRuleResponse.to_json())

# convert the object into a dict
update_conditional_format_rule_response_dict = update_conditional_format_rule_response_instance.to_dict()
# create an instance of UpdateConditionalFormatRuleResponse from a dict
update_conditional_format_rule_response_from_dict = UpdateConditionalFormatRuleResponse.from_dict(update_conditional_format_rule_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



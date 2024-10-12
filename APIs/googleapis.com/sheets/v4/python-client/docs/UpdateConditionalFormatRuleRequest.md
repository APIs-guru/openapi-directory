# UpdateConditionalFormatRuleRequest

Updates a conditional format rule at the given index, or moves a conditional format rule to another index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** | The zero-based index of the rule that should be replaced or moved. | [optional] 
**new_index** | **int** | The zero-based new index the rule should end up at. | [optional] 
**rule** | [**ConditionalFormatRule**](ConditionalFormatRule.md) |  | [optional] 
**sheet_id** | **int** | The sheet of the rule to move. Required if new_index is set, unused otherwise. | [optional] 

## Example

```python
from openapi_client.models.update_conditional_format_rule_request import UpdateConditionalFormatRuleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateConditionalFormatRuleRequest from a JSON string
update_conditional_format_rule_request_instance = UpdateConditionalFormatRuleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateConditionalFormatRuleRequest.to_json())

# convert the object into a dict
update_conditional_format_rule_request_dict = update_conditional_format_rule_request_instance.to_dict()
# create an instance of UpdateConditionalFormatRuleRequest from a dict
update_conditional_format_rule_request_from_dict = UpdateConditionalFormatRuleRequest.from_dict(update_conditional_format_rule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



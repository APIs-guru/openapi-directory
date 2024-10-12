# AddConditionalFormatRuleRequest

Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** | The zero-based index where the rule should be inserted. | [optional] 
**rule** | [**ConditionalFormatRule**](ConditionalFormatRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_conditional_format_rule_request import AddConditionalFormatRuleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddConditionalFormatRuleRequest from a JSON string
add_conditional_format_rule_request_instance = AddConditionalFormatRuleRequest.from_json(json)
# print the JSON string representation of the object
print(AddConditionalFormatRuleRequest.to_json())

# convert the object into a dict
add_conditional_format_rule_request_dict = add_conditional_format_rule_request_instance.to_dict()
# create an instance of AddConditionalFormatRuleRequest from a dict
add_conditional_format_rule_request_from_dict = AddConditionalFormatRuleRequest.from_dict(add_conditional_format_rule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



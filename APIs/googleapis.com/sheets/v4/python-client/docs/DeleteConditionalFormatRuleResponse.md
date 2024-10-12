# DeleteConditionalFormatRuleResponse

The result of deleting a conditional format rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule** | [**ConditionalFormatRule**](ConditionalFormatRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_conditional_format_rule_response import DeleteConditionalFormatRuleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteConditionalFormatRuleResponse from a JSON string
delete_conditional_format_rule_response_instance = DeleteConditionalFormatRuleResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteConditionalFormatRuleResponse.to_json())

# convert the object into a dict
delete_conditional_format_rule_response_dict = delete_conditional_format_rule_response_instance.to_dict()
# create an instance of DeleteConditionalFormatRuleResponse from a dict
delete_conditional_format_rule_response_from_dict = DeleteConditionalFormatRuleResponse.from_dict(delete_conditional_format_rule_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



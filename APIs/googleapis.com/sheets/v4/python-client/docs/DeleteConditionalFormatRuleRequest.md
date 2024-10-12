# DeleteConditionalFormatRuleRequest

Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** | The zero-based index of the rule to be deleted. | [optional] 
**sheet_id** | **int** | The sheet the rule is being deleted from. | [optional] 

## Example

```python
from openapi_client.models.delete_conditional_format_rule_request import DeleteConditionalFormatRuleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteConditionalFormatRuleRequest from a JSON string
delete_conditional_format_rule_request_instance = DeleteConditionalFormatRuleRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteConditionalFormatRuleRequest.to_json())

# convert the object into a dict
delete_conditional_format_rule_request_dict = delete_conditional_format_rule_request_instance.to_dict()
# create an instance of DeleteConditionalFormatRuleRequest from a dict
delete_conditional_format_rule_request_from_dict = DeleteConditionalFormatRuleRequest.from_dict(delete_conditional_format_rule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



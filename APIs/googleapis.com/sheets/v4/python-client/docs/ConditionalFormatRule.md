# ConditionalFormatRule

A rule describing a conditional format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_rule** | [**BooleanRule**](BooleanRule.md) |  | [optional] 
**gradient_rule** | [**GradientRule**](GradientRule.md) |  | [optional] 
**ranges** | [**List[GridRange]**](GridRange.md) | The ranges that are formatted if the condition is true. All the ranges must be on the same grid. | [optional] 

## Example

```python
from openapi_client.models.conditional_format_rule import ConditionalFormatRule

# TODO update the JSON string below
json = "{}"
# create an instance of ConditionalFormatRule from a JSON string
conditional_format_rule_instance = ConditionalFormatRule.from_json(json)
# print the JSON string representation of the object
print(ConditionalFormatRule.to_json())

# convert the object into a dict
conditional_format_rule_dict = conditional_format_rule_instance.to_dict()
# create an instance of ConditionalFormatRule from a dict
conditional_format_rule_from_dict = ConditionalFormatRule.from_dict(conditional_format_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



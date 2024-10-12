# LintResult

Structured response of a single validation unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_message** | **str** | Human readable debug message associated with the issue. | [optional] 
**field_name** | **str** | The name of the field for which this lint result is about. For nested messages &#x60;field_name&#x60; consists of names of the embedded fields separated by period character. The top-level qualifier is the input object to lint in the request. For example, the &#x60;field_name&#x60; value &#x60;condition.expression&#x60; identifies a lint result for the &#x60;expression&#x60; field of the provided condition. | [optional] 
**level** | **str** | The validation unit level. | [optional] 
**location_offset** | **int** | 0-based character position of problematic construct within the object identified by &#x60;field_name&#x60;. Currently, this is populated only for condition expression. | [optional] 
**severity** | **str** | The validation unit severity. | [optional] 
**validation_unit_name** | **str** | The validation unit name, for instance \&quot;lintValidationUnits/ConditionComplexityCheck\&quot;. | [optional] 

## Example

```python
from openapi_client.models.lint_result import LintResult

# TODO update the JSON string below
json = "{}"
# create an instance of LintResult from a JSON string
lint_result_instance = LintResult.from_json(json)
# print the JSON string representation of the object
print(LintResult.to_json())

# convert the object into a dict
lint_result_dict = lint_result_instance.to_dict()
# create an instance of LintResult from a dict
lint_result_from_dict = LintResult.from_dict(lint_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



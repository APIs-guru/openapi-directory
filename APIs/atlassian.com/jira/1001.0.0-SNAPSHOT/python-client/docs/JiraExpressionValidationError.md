# JiraExpressionValidationError

Details about syntax and type errors. The error details apply to the entire expression, unless the object includes:   *  `line` and `column`  *  `expression`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **int** | The text column in which the error occurred. | [optional] 
**expression** | **str** | The part of the expression in which the error occurred. | [optional] 
**line** | **int** | The text line in which the error occurred. | [optional] 
**message** | **str** | Details about the error. | 
**type** | **str** | The error type. | 

## Example

```python
from openapi_client.models.jira_expression_validation_error import JiraExpressionValidationError

# TODO update the JSON string below
json = "{}"
# create an instance of JiraExpressionValidationError from a JSON string
jira_expression_validation_error_instance = JiraExpressionValidationError.from_json(json)
# print the JSON string representation of the object
print(JiraExpressionValidationError.to_json())

# convert the object into a dict
jira_expression_validation_error_dict = jira_expression_validation_error_instance.to_dict()
# create an instance of JiraExpressionValidationError from a dict
jira_expression_validation_error_from_dict = JiraExpressionValidationError.from_dict(jira_expression_validation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# JiraExpressionAnalysis

Details about the analysed Jira expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complexity** | [**JiraExpressionComplexity**](JiraExpressionComplexity.md) |  | [optional] 
**errors** | [**List[JiraExpressionValidationError]**](JiraExpressionValidationError.md) | A list of validation errors. Not included if the expression is valid. | [optional] 
**expression** | **str** | The analysed expression. | 
**type** | **str** | EXPERIMENTAL. The inferred type of the expression. | [optional] 
**valid** | **bool** | Whether the expression is valid and the interpreter will evaluate it. Note that the expression may fail at runtime (for example, if it executes too many expensive operations). | 

## Example

```python
from openapi_client.models.jira_expression_analysis import JiraExpressionAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of JiraExpressionAnalysis from a JSON string
jira_expression_analysis_instance = JiraExpressionAnalysis.from_json(json)
# print the JSON string representation of the object
print(JiraExpressionAnalysis.to_json())

# convert the object into a dict
jira_expression_analysis_dict = jira_expression_analysis_instance.to_dict()
# create an instance of JiraExpressionAnalysis from a dict
jira_expression_analysis_from_dict = JiraExpressionAnalysis.from_dict(jira_expression_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# JiraExpressionResult

The result of evaluating a Jira expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**JiraExpressionEvaluationMetaDataBean**](JiraExpressionEvaluationMetaDataBean.md) | Contains various characteristics of the performed expression evaluation. | [optional] 
**value** | **object** | The value of the evaluated expression. It may be a primitive JSON value or a Jira REST API object. (Some expressions do not produce any meaningful results—for example, an expression that returns a lambda function—if that&#39;s the case a simple string representation is returned. These string representations should not be relied upon and may change without notice.) | 

## Example

```python
from openapi_client.models.jira_expression_result import JiraExpressionResult

# TODO update the JSON string below
json = "{}"
# create an instance of JiraExpressionResult from a JSON string
jira_expression_result_instance = JiraExpressionResult.from_json(json)
# print the JSON string representation of the object
print(JiraExpressionResult.to_json())

# convert the object into a dict
jira_expression_result_dict = jira_expression_result_instance.to_dict()
# create an instance of JiraExpressionResult from a dict
jira_expression_result_from_dict = JiraExpressionResult.from_dict(jira_expression_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



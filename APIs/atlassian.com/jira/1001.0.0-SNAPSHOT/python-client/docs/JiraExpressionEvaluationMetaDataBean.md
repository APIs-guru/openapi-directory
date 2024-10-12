# JiraExpressionEvaluationMetaDataBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complexity** | [**JiraExpressionsComplexityBean**](JiraExpressionsComplexityBean.md) | Contains information about the expression complexity. For example, the number of steps it took to evaluate the expression. | [optional] 
**issues** | [**IssuesMetaBean**](IssuesMetaBean.md) | Contains information about the &#x60;issues&#x60; variable in the context. For example, is the issues were loaded with JQL, information about the page will be included here. | [optional] 

## Example

```python
from openapi_client.models.jira_expression_evaluation_meta_data_bean import JiraExpressionEvaluationMetaDataBean

# TODO update the JSON string below
json = "{}"
# create an instance of JiraExpressionEvaluationMetaDataBean from a JSON string
jira_expression_evaluation_meta_data_bean_instance = JiraExpressionEvaluationMetaDataBean.from_json(json)
# print the JSON string representation of the object
print(JiraExpressionEvaluationMetaDataBean.to_json())

# convert the object into a dict
jira_expression_evaluation_meta_data_bean_dict = jira_expression_evaluation_meta_data_bean_instance.to_dict()
# create an instance of JiraExpressionEvaluationMetaDataBean from a dict
jira_expression_evaluation_meta_data_bean_from_dict = JiraExpressionEvaluationMetaDataBean.from_dict(jira_expression_evaluation_meta_data_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



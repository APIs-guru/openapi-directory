# JiraExpressionEvalRequestBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JiraExpressionEvalContextBean**](JiraExpressionEvalContextBean.md) | The context in which the Jira expression is evaluated. | [optional] 
**expression** | **str** | The Jira expression to evaluate. | 

## Example

```python
from openapi_client.models.jira_expression_eval_request_bean import JiraExpressionEvalRequestBean

# TODO update the JSON string below
json = "{}"
# create an instance of JiraExpressionEvalRequestBean from a JSON string
jira_expression_eval_request_bean_instance = JiraExpressionEvalRequestBean.from_json(json)
# print the JSON string representation of the object
print(JiraExpressionEvalRequestBean.to_json())

# convert the object into a dict
jira_expression_eval_request_bean_dict = jira_expression_eval_request_bean_instance.to_dict()
# create an instance of JiraExpressionEvalRequestBean from a dict
jira_expression_eval_request_bean_from_dict = JiraExpressionEvalRequestBean.from_dict(jira_expression_eval_request_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



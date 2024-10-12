# JiraExpressionEvalContextBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**board** | **int** | The ID of the board that is available under the &#x60;board&#x60; variable when evaluating the expression. | [optional] 
**custom** | [**List[CustomContextVariable]**](CustomContextVariable.md) | Custom context variables and their types. These variable types are available for use in a custom context:   *  &#x60;user&#x60;: A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.  *  &#x60;issue&#x60;: An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.  *  &#x60;json&#x60;: A JSON object containing custom content.  *  &#x60;list&#x60;: A JSON list of &#x60;user&#x60;, &#x60;issue&#x60;, or &#x60;json&#x60; variable types. | [optional] 
**customer_request** | **int** | The ID of the customer request that is available under the &#x60;customerRequest&#x60; variable when evaluating the expression. This is the same as the ID of the underlying Jira issue, but the customer request context variable will have a different type. | [optional] 
**issue** | [**IdOrKeyBean**](IdOrKeyBean.md) | The issue that is available under the &#x60;issue&#x60; variable when evaluating the expression. | [optional] 
**issues** | [**JexpIssues**](JexpIssues.md) | The collection of issues that is available under the &#x60;issues&#x60; variable when evaluating the expression. | [optional] 
**project** | [**IdOrKeyBean**](IdOrKeyBean.md) | The project that is available under the &#x60;project&#x60; variable when evaluating the expression. | [optional] 
**service_desk** | **int** | The ID of the service desk that is available under the &#x60;serviceDesk&#x60; variable when evaluating the expression. | [optional] 
**sprint** | **int** | The ID of the sprint that is available under the &#x60;sprint&#x60; variable when evaluating the expression. | [optional] 

## Example

```python
from openapi_client.models.jira_expression_eval_context_bean import JiraExpressionEvalContextBean

# TODO update the JSON string below
json = "{}"
# create an instance of JiraExpressionEvalContextBean from a JSON string
jira_expression_eval_context_bean_instance = JiraExpressionEvalContextBean.from_json(json)
# print the JSON string representation of the object
print(JiraExpressionEvalContextBean.to_json())

# convert the object into a dict
jira_expression_eval_context_bean_dict = jira_expression_eval_context_bean_instance.to_dict()
# create an instance of JiraExpressionEvalContextBean from a dict
jira_expression_eval_context_bean_from_dict = JiraExpressionEvalContextBean.from_dict(jira_expression_eval_context_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



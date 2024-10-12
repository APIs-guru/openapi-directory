# JiraExpressionsComplexityBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beans** | [**JiraExpressionsComplexityValueBean**](JiraExpressionsComplexityValueBean.md) | The number of Jira REST API beans returned in the response. | 
**expensive_operations** | [**JiraExpressionsComplexityValueBean**](JiraExpressionsComplexityValueBean.md) | The number of expensive operations executed while evaluating the expression. Expensive operations are those that load additional data, such as entity properties, comments, or custom fields. | 
**primitive_values** | [**JiraExpressionsComplexityValueBean**](JiraExpressionsComplexityValueBean.md) | The number of primitive values returned in the response. | 
**steps** | [**JiraExpressionsComplexityValueBean**](JiraExpressionsComplexityValueBean.md) | The number of steps it took to evaluate the expression, where a step is a high-level operation performed by the expression. A step is an operation such as arithmetic, accessing a property, accessing a context variable, or calling a function. | 

## Example

```python
from openapi_client.models.jira_expressions_complexity_bean import JiraExpressionsComplexityBean

# TODO update the JSON string below
json = "{}"
# create an instance of JiraExpressionsComplexityBean from a JSON string
jira_expressions_complexity_bean_instance = JiraExpressionsComplexityBean.from_json(json)
# print the JSON string representation of the object
print(JiraExpressionsComplexityBean.to_json())

# convert the object into a dict
jira_expressions_complexity_bean_dict = jira_expressions_complexity_bean_instance.to_dict()
# create an instance of JiraExpressionsComplexityBean from a dict
jira_expressions_complexity_bean_from_dict = JiraExpressionsComplexityBean.from_dict(jira_expressions_complexity_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



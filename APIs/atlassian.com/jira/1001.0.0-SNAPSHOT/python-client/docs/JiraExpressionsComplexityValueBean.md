# JiraExpressionsComplexityValueBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | The maximum allowed complexity. The evaluation will fail if this value is exceeded. | 
**value** | **int** | The complexity value of the current expression. | 

## Example

```python
from openapi_client.models.jira_expressions_complexity_value_bean import JiraExpressionsComplexityValueBean

# TODO update the JSON string below
json = "{}"
# create an instance of JiraExpressionsComplexityValueBean from a JSON string
jira_expressions_complexity_value_bean_instance = JiraExpressionsComplexityValueBean.from_json(json)
# print the JSON string representation of the object
print(JiraExpressionsComplexityValueBean.to_json())

# convert the object into a dict
jira_expressions_complexity_value_bean_dict = jira_expressions_complexity_value_bean_instance.to_dict()
# create an instance of JiraExpressionsComplexityValueBean from a dict
jira_expressions_complexity_value_bean_from_dict = JiraExpressionsComplexityValueBean.from_dict(jira_expressions_complexity_value_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



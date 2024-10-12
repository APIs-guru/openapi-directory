# JiraExpressionForAnalysis

Details of Jira expressions for analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_variables** | **Dict[str, str]** | Context variables and their types. The type checker assumes that [common context variables](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#context-variables), such as &#x60;issue&#x60; or &#x60;project&#x60;, are available in context and sets their type. Use this property to override the default types or provide details of new variables. | [optional] 
**expressions** | **List[str]** | The list of Jira expressions to analyse. | 

## Example

```python
from openapi_client.models.jira_expression_for_analysis import JiraExpressionForAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of JiraExpressionForAnalysis from a JSON string
jira_expression_for_analysis_instance = JiraExpressionForAnalysis.from_json(json)
# print the JSON string representation of the object
print(JiraExpressionForAnalysis.to_json())

# convert the object into a dict
jira_expression_for_analysis_dict = jira_expression_for_analysis_instance.to_dict()
# create an instance of JiraExpressionForAnalysis from a dict
jira_expression_for_analysis_from_dict = JiraExpressionForAnalysis.from_dict(jira_expression_for_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



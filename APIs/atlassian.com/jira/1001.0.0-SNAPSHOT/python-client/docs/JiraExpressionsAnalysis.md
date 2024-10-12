# JiraExpressionsAnalysis

Details about the analysed Jira expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[JiraExpressionAnalysis]**](JiraExpressionAnalysis.md) | The results of Jira expressions analysis. | 

## Example

```python
from openapi_client.models.jira_expressions_analysis import JiraExpressionsAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of JiraExpressionsAnalysis from a JSON string
jira_expressions_analysis_instance = JiraExpressionsAnalysis.from_json(json)
# print the JSON string representation of the object
print(JiraExpressionsAnalysis.to_json())

# convert the object into a dict
jira_expressions_analysis_dict = jira_expressions_analysis_instance.to_dict()
# create an instance of JiraExpressionsAnalysis from a dict
jira_expressions_analysis_from_dict = JiraExpressionsAnalysis.from_dict(jira_expressions_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# JiraExpressionComplexity

Details about the complexity of the analysed Jira expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expensive_operations** | **str** | Information that can be used to determine how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) the evaluation of the expression will perform. This information may be a formula or number. For example:   *  &#x60;issues.map(i &#x3D;&gt; i.comments)&#x60; performs as many expensive operations as there are issues on the issues list. So this parameter returns &#x60;N&#x60;, where &#x60;N&#x60; is the size of issue list.  *  &#x60;new Issue(10010).comments&#x60; gets comments for one issue, so its complexity is &#x60;2&#x60; (&#x60;1&#x60; to retrieve issue 10010 from the database plus &#x60;1&#x60; to get its comments). | 
**variables** | **Dict[str, str]** | Variables used in the formula, mapped to the parts of the expression they refer to. | [optional] 

## Example

```python
from openapi_client.models.jira_expression_complexity import JiraExpressionComplexity

# TODO update the JSON string below
json = "{}"
# create an instance of JiraExpressionComplexity from a JSON string
jira_expression_complexity_instance = JiraExpressionComplexity.from_json(json)
# print the JSON string representation of the object
print(JiraExpressionComplexity.to_json())

# convert the object into a dict
jira_expression_complexity_dict = jira_expression_complexity_instance.to_dict()
# create an instance of JiraExpressionComplexity from a dict
jira_expression_complexity_from_dict = JiraExpressionComplexity.from_dict(jira_expression_complexity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



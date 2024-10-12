# JexpJqlIssues

The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable. Not all issues returned by the JQL query are loaded, only those described by the `startAt` and `maxResults` properties. To determine whether it is necessary to iterate to ensure all the issues returned by the JQL query are evaluated, inspect `meta.issues.jql.count` in the response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_results** | **int** | The maximum number of issues to return from the JQL query. Inspect &#x60;meta.issues.jql.maxResults&#x60; in the response to ensure the maximum value has not been exceeded. | [optional] 
**query** | **str** | The JQL query. | [optional] 
**start_at** | **int** | The index of the first issue to return from the JQL query. | [optional] 
**validation** | **str** | Determines how to validate the JQL query and treat the validation results. | [optional] [default to 'strict']

## Example

```python
from openapi_client.models.jexp_jql_issues import JexpJqlIssues

# TODO update the JSON string below
json = "{}"
# create an instance of JexpJqlIssues from a JSON string
jexp_jql_issues_instance = JexpJqlIssues.from_json(json)
# print the JSON string representation of the object
print(JexpJqlIssues.to_json())

# convert the object into a dict
jexp_jql_issues_dict = jexp_jql_issues_instance.to_dict()
# create an instance of JexpJqlIssues from a dict
jexp_jql_issues_from_dict = JexpJqlIssues.from_dict(jexp_jql_issues_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



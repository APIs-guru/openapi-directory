# JexpIssues

The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jql** | [**JexpJqlIssues**](JexpJqlIssues.md) | The JQL query that specifies the set of issues available in the Jira expression. | [optional] 

## Example

```python
from openapi_client.models.jexp_issues import JexpIssues

# TODO update the JSON string below
json = "{}"
# create an instance of JexpIssues from a JSON string
jexp_issues_instance = JexpIssues.from_json(json)
# print the JSON string representation of the object
print(JexpIssues.to_json())

# convert the object into a dict
jexp_issues_dict = jexp_issues_instance.to_dict()
# create an instance of JexpIssues from a dict
jexp_issues_from_dict = JexpIssues.from_dict(jexp_issues_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



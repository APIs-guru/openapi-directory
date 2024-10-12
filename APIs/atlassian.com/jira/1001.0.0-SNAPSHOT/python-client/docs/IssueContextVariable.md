# IssueContextVariable

An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The issue ID. | [optional] 
**key** | **str** | The issue key. | [optional] 
**type** | **str** | Type of custom context variable. | 

## Example

```python
from openapi_client.models.issue_context_variable import IssueContextVariable

# TODO update the JSON string below
json = "{}"
# create an instance of IssueContextVariable from a JSON string
issue_context_variable_instance = IssueContextVariable.from_json(json)
# print the JSON string representation of the object
print(IssueContextVariable.to_json())

# convert the object into a dict
issue_context_variable_dict = issue_context_variable_instance.to_dict()
# create an instance of IssueContextVariable from a dict
issue_context_variable_from_dict = IssueContextVariable.from_dict(issue_context_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



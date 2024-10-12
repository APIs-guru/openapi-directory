# JiraIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jira_issue** | [**CreateJiraIssue200ResponseJiraIssue**](CreateJiraIssue200ResponseJiraIssue.md) |  | [optional] 

## Example

```python
from openapi_client.models.jira_issue import JiraIssue

# TODO update the JSON string below
json = "{}"
# create an instance of JiraIssue from a JSON string
jira_issue_instance = JiraIssue.from_json(json)
# print the JSON string representation of the object
print(JiraIssue.to_json())

# convert the object into a dict
jira_issue_dict = jira_issue_instance.to_dict()
# create an instance of JiraIssue from a dict
jira_issue_from_dict = JiraIssue.from_dict(jira_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



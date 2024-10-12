# JiraIssueRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**CreateJiraIssueRequestFields**](CreateJiraIssueRequestFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.jira_issue_request import JiraIssueRequest

# TODO update the JSON string below
json = "{}"
# create an instance of JiraIssueRequest from a JSON string
jira_issue_request_instance = JiraIssueRequest.from_json(json)
# print the JSON string representation of the object
print(JiraIssueRequest.to_json())

# convert the object into a dict
jira_issue_request_dict = jira_issue_request_instance.to_dict()
# create an instance of JiraIssueRequest from a dict
jira_issue_request_from_dict = JiraIssueRequest.from_dict(jira_issue_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



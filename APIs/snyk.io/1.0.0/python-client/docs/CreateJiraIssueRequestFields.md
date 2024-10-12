# CreateJiraIssueRequestFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuetype** | **object** | See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields. | [optional] 
**project** | **object** | See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields. | [optional] 
**summary** | **str** | See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields. | [optional] 

## Example

```python
from openapi_client.models.create_jira_issue_request_fields import CreateJiraIssueRequestFields

# TODO update the JSON string below
json = "{}"
# create an instance of CreateJiraIssueRequestFields from a JSON string
create_jira_issue_request_fields_instance = CreateJiraIssueRequestFields.from_json(json)
# print the JSON string representation of the object
print(CreateJiraIssueRequestFields.to_json())

# convert the object into a dict
create_jira_issue_request_fields_dict = create_jira_issue_request_fields_instance.to_dict()
# create an instance of CreateJiraIssueRequestFields from a dict
create_jira_issue_request_fields_from_dict = CreateJiraIssueRequestFields.from_dict(create_jira_issue_request_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



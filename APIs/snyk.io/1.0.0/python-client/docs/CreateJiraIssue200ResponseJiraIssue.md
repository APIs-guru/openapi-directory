# CreateJiraIssue200ResponseJiraIssue

The details about the jira issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the issue in Jira. | [optional] 
**key** | **str** | The key of the issue in Jira. | [optional] 

## Example

```python
from openapi_client.models.create_jira_issue200_response_jira_issue import CreateJiraIssue200ResponseJiraIssue

# TODO update the JSON string below
json = "{}"
# create an instance of CreateJiraIssue200ResponseJiraIssue from a JSON string
create_jira_issue200_response_jira_issue_instance = CreateJiraIssue200ResponseJiraIssue.from_json(json)
# print the JSON string representation of the object
print(CreateJiraIssue200ResponseJiraIssue.to_json())

# convert the object into a dict
create_jira_issue200_response_jira_issue_dict = create_jira_issue200_response_jira_issue_instance.to_dict()
# create an instance of CreateJiraIssue200ResponseJiraIssue from a dict
create_jira_issue200_response_jira_issue_from_dict = CreateJiraIssue200ResponseJiraIssue.from_dict(create_jira_issue200_response_jira_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CreateJiraIssueRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**CreateJiraIssueRequestFields**](CreateJiraIssueRequestFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_jira_issue_request import CreateJiraIssueRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateJiraIssueRequest from a JSON string
create_jira_issue_request_instance = CreateJiraIssueRequest.from_json(json)
# print the JSON string representation of the object
print(CreateJiraIssueRequest.to_json())

# convert the object into a dict
create_jira_issue_request_dict = create_jira_issue_request_instance.to_dict()
# create an instance of CreateJiraIssueRequest from a dict
create_jira_issue_request_from_dict = CreateJiraIssueRequest.from_dict(create_jira_issue_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CreateJiraIssue200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jira_issue** | [**CreateJiraIssue200ResponseJiraIssue**](CreateJiraIssue200ResponseJiraIssue.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_jira_issue200_response import CreateJiraIssue200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateJiraIssue200Response from a JSON string
create_jira_issue200_response_instance = CreateJiraIssue200Response.from_json(json)
# print the JSON string representation of the object
print(CreateJiraIssue200Response.to_json())

# convert the object into a dict
create_jira_issue200_response_dict = create_jira_issue200_response_instance.to_dict()
# create an instance of CreateJiraIssue200Response from a dict
create_jira_issue200_response_from_dict = CreateJiraIssue200Response.from_dict(create_jira_issue200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



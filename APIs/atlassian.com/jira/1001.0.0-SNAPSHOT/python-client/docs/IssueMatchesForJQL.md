# IssueMatchesForJQL

A list of the issues matched to a JQL query or details of errors encountered during matching.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** | A list of errors. | 
**matched_issues** | **List[int]** | A list of issue IDs. | 

## Example

```python
from openapi_client.models.issue_matches_for_jql import IssueMatchesForJQL

# TODO update the JSON string below
json = "{}"
# create an instance of IssueMatchesForJQL from a JSON string
issue_matches_for_jql_instance = IssueMatchesForJQL.from_json(json)
# print the JSON string representation of the object
print(IssueMatchesForJQL.to_json())

# convert the object into a dict
issue_matches_for_jql_dict = issue_matches_for_jql_instance.to_dict()
# create an instance of IssueMatchesForJQL from a dict
issue_matches_for_jql_from_dict = IssueMatchesForJQL.from_dict(issue_matches_for_jql_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



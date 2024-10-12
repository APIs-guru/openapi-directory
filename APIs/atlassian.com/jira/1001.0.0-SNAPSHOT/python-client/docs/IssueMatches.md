# IssueMatches

A list of matched issues or errors for each JQL query, in the order the JQL queries were passed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matches** | [**List[IssueMatchesForJQL]**](IssueMatchesForJQL.md) |  | 

## Example

```python
from openapi_client.models.issue_matches import IssueMatches

# TODO update the JSON string below
json = "{}"
# create an instance of IssueMatches from a JSON string
issue_matches_instance = IssueMatches.from_json(json)
# print the JSON string representation of the object
print(IssueMatches.to_json())

# convert the object into a dict
issue_matches_dict = issue_matches_instance.to_dict()
# create an instance of IssueMatches from a dict
issue_matches_from_dict = IssueMatches.from_dict(issue_matches_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



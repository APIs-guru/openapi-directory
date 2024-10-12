# BugTrackerIssuesResult

Returns a list of all issues associated with a repo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | [**List[BugTrackerGetRepoIssueFromCrash200Response]**](BugTrackerGetRepoIssueFromCrash200Response.md) |  | [optional] 

## Example

```python
from openapi_client.models.bug_tracker_issues_result import BugTrackerIssuesResult

# TODO update the JSON string below
json = "{}"
# create an instance of BugTrackerIssuesResult from a JSON string
bug_tracker_issues_result_instance = BugTrackerIssuesResult.from_json(json)
# print the JSON string representation of the object
print(BugTrackerIssuesResult.to_json())

# convert the object into a dict
bug_tracker_issues_result_dict = bug_tracker_issues_result_instance.to_dict()
# create an instance of BugTrackerIssuesResult from a dict
bug_tracker_issues_result_from_dict = BugTrackerIssuesResult.from_dict(bug_tracker_issues_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



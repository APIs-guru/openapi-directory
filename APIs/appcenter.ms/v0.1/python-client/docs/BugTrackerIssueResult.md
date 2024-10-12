# BugTrackerIssueResult

Object returned in response to getting a bug tracker issue related to a crash group id

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bug_tracker_type** | **str** |  | [optional] 
**event_type** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**mobile_center_id** | **str** |  | [optional] 
**repo_name** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.bug_tracker_issue_result import BugTrackerIssueResult

# TODO update the JSON string below
json = "{}"
# create an instance of BugTrackerIssueResult from a JSON string
bug_tracker_issue_result_instance = BugTrackerIssueResult.from_json(json)
# print the JSON string representation of the object
print(BugTrackerIssueResult.to_json())

# convert the object into a dict
bug_tracker_issue_result_dict = bug_tracker_issue_result_instance.to_dict()
# create an instance of BugTrackerIssueResult from a dict
bug_tracker_issue_result_from_dict = BugTrackerIssueResult.from_dict(bug_tracker_issue_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



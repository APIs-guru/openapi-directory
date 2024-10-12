# BugTrackerGetRepoIssueFromCrash200Response

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
from openapi_client.models.bug_tracker_get_repo_issue_from_crash200_response import BugTrackerGetRepoIssueFromCrash200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BugTrackerGetRepoIssueFromCrash200Response from a JSON string
bug_tracker_get_repo_issue_from_crash200_response_instance = BugTrackerGetRepoIssueFromCrash200Response.from_json(json)
# print the JSON string representation of the object
print(BugTrackerGetRepoIssueFromCrash200Response.to_json())

# convert the object into a dict
bug_tracker_get_repo_issue_from_crash200_response_dict = bug_tracker_get_repo_issue_from_crash200_response_instance.to_dict()
# create an instance of BugTrackerGetRepoIssueFromCrash200Response from a dict
bug_tracker_get_repo_issue_from_crash200_response_from_dict = BugTrackerGetRepoIssueFromCrash200Response.from_dict(bug_tracker_get_repo_issue_from_crash200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



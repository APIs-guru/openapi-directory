# BugTrackerStateResult

Object returned in response to getting or updating the state of a bugtracker

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | bugtracker state | [optional] 

## Example

```python
from openapi_client.models.bug_tracker_state_result import BugTrackerStateResult

# TODO update the JSON string below
json = "{}"
# create an instance of BugTrackerStateResult from a JSON string
bug_tracker_state_result_instance = BugTrackerStateResult.from_json(json)
# print the JSON string representation of the object
print(BugTrackerStateResult.to_json())

# convert the object into a dict
bug_tracker_state_result_dict = bug_tracker_state_result_instance.to_dict()
# create an instance of BugTrackerStateResult from a dict
bug_tracker_state_result_from_dict = BugTrackerStateResult.from_dict(bug_tracker_state_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



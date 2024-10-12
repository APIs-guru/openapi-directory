# AlertBugTrackerRepoOwner

Repository owner object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**login** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.alert_bug_tracker_repo_owner import AlertBugTrackerRepoOwner

# TODO update the JSON string below
json = "{}"
# create an instance of AlertBugTrackerRepoOwner from a JSON string
alert_bug_tracker_repo_owner_instance = AlertBugTrackerRepoOwner.from_json(json)
# print the JSON string representation of the object
print(AlertBugTrackerRepoOwner.to_json())

# convert the object into a dict
alert_bug_tracker_repo_owner_dict = alert_bug_tracker_repo_owner_instance.to_dict()
# create an instance of AlertBugTrackerRepoOwner from a dict
alert_bug_tracker_repo_owner_from_dict = AlertBugTrackerRepoOwner.from_dict(alert_bug_tracker_repo_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



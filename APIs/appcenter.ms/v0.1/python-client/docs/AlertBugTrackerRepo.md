# AlertBugTrackerRepo

Repostiory object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | 
**name** | **str** |  | 
**owner** | [**AlertBugTrackerRepoOwner**](AlertBugTrackerRepoOwner.md) |  | [optional] 
**private** | **bool** |  | [optional] 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.alert_bug_tracker_repo import AlertBugTrackerRepo

# TODO update the JSON string below
json = "{}"
# create an instance of AlertBugTrackerRepo from a JSON string
alert_bug_tracker_repo_instance = AlertBugTrackerRepo.from_json(json)
# print the JSON string representation of the object
print(AlertBugTrackerRepo.to_json())

# convert the object into a dict
alert_bug_tracker_repo_dict = alert_bug_tracker_repo_instance.to_dict()
# create an instance of AlertBugTrackerRepo from a dict
alert_bug_tracker_repo_from_dict = AlertBugTrackerRepo.from_dict(alert_bug_tracker_repo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



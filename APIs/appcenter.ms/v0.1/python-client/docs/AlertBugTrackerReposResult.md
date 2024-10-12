# AlertBugTrackerReposResult

List of bug tracker repositories

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repo_type** | **str** |  | [optional] 
**repositories** | [**List[AlertBugTrackerReposResultRepositoriesInner]**](AlertBugTrackerReposResultRepositoriesInner.md) |  | 

## Example

```python
from openapi_client.models.alert_bug_tracker_repos_result import AlertBugTrackerReposResult

# TODO update the JSON string below
json = "{}"
# create an instance of AlertBugTrackerReposResult from a JSON string
alert_bug_tracker_repos_result_instance = AlertBugTrackerReposResult.from_json(json)
# print the JSON string representation of the object
print(AlertBugTrackerReposResult.to_json())

# convert the object into a dict
alert_bug_tracker_repos_result_dict = alert_bug_tracker_repos_result_instance.to_dict()
# create an instance of AlertBugTrackerReposResult from a dict
alert_bug_tracker_repos_result_from_dict = AlertBugTrackerReposResult.from_dict(alert_bug_tracker_repos_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



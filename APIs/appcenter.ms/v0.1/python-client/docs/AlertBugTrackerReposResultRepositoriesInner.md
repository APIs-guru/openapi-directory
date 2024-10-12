# AlertBugTrackerReposResultRepositoriesInner

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
from openapi_client.models.alert_bug_tracker_repos_result_repositories_inner import AlertBugTrackerReposResultRepositoriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AlertBugTrackerReposResultRepositoriesInner from a JSON string
alert_bug_tracker_repos_result_repositories_inner_instance = AlertBugTrackerReposResultRepositoriesInner.from_json(json)
# print the JSON string representation of the object
print(AlertBugTrackerReposResultRepositoriesInner.to_json())

# convert the object into a dict
alert_bug_tracker_repos_result_repositories_inner_dict = alert_bug_tracker_repos_result_repositories_inner_instance.to_dict()
# create an instance of AlertBugTrackerReposResultRepositoriesInner from a dict
alert_bug_tracker_repos_result_repositories_inner_from_dict = AlertBugTrackerReposResultRepositoriesInner.from_dict(alert_bug_tracker_repos_result_repositories_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



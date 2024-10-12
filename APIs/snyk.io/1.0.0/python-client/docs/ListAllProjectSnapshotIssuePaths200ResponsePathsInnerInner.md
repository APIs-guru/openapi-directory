# ListAllProjectSnapshotIssuePaths200ResponsePathsInnerInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fix_version** | **str** | The version to upgrade the package to in order to resolve the issue. This will only appear on the first element of the path, and only if the issue can be fixed by upgrading packages. Note that if the fix requires upgrading transitive dependencies, &#x60;fixVersion&#x60; will be the same as &#x60;version&#x60;. | [optional] 
**name** | **str** | The package name | [optional] 
**version** | **str** | The package version | [optional] 

## Example

```python
from openapi_client.models.list_all_project_snapshot_issue_paths200_response_paths_inner_inner import ListAllProjectSnapshotIssuePaths200ResponsePathsInnerInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjectSnapshotIssuePaths200ResponsePathsInnerInner from a JSON string
list_all_project_snapshot_issue_paths200_response_paths_inner_inner_instance = ListAllProjectSnapshotIssuePaths200ResponsePathsInnerInner.from_json(json)
# print the JSON string representation of the object
print(ListAllProjectSnapshotIssuePaths200ResponsePathsInnerInner.to_json())

# convert the object into a dict
list_all_project_snapshot_issue_paths200_response_paths_inner_inner_dict = list_all_project_snapshot_issue_paths200_response_paths_inner_inner_instance.to_dict()
# create an instance of ListAllProjectSnapshotIssuePaths200ResponsePathsInnerInner from a dict
list_all_project_snapshot_issue_paths200_response_paths_inner_inner_from_dict = ListAllProjectSnapshotIssuePaths200ResponsePathsInnerInner.from_dict(list_all_project_snapshot_issue_paths200_response_paths_inner_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



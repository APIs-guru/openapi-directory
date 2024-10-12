# ListAllProjectSnapshotIssuePaths200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**ListAllProjectSnapshotIssuePaths200ResponseLinks**](ListAllProjectSnapshotIssuePaths200ResponseLinks.md) |  | [optional] 
**paths** | **List[List[ListAllProjectSnapshotIssuePaths200ResponsePathsInnerInner]]** | A list of the dependency paths that introduce the issue | [optional] 
**snapshot_id** | **str** | The identifier of the snapshot for which the paths have been found | [optional] 
**total** | **float** | The total number of results | [optional] 

## Example

```python
from openapi_client.models.list_all_project_snapshot_issue_paths200_response import ListAllProjectSnapshotIssuePaths200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjectSnapshotIssuePaths200Response from a JSON string
list_all_project_snapshot_issue_paths200_response_instance = ListAllProjectSnapshotIssuePaths200Response.from_json(json)
# print the JSON string representation of the object
print(ListAllProjectSnapshotIssuePaths200Response.to_json())

# convert the object into a dict
list_all_project_snapshot_issue_paths200_response_dict = list_all_project_snapshot_issue_paths200_response_instance.to_dict()
# create an instance of ListAllProjectSnapshotIssuePaths200Response from a dict
list_all_project_snapshot_issue_paths200_response_from_dict = ListAllProjectSnapshotIssuePaths200Response.from_dict(list_all_project_snapshot_issue_paths200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# IssuePaths


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**ListAllProjectSnapshotIssuePaths200ResponseLinks**](ListAllProjectSnapshotIssuePaths200ResponseLinks.md) |  | [optional] 
**paths** | **List[List[ListAllProjectSnapshotIssuePaths200ResponsePathsInnerInner]]** | A list of the dependency paths that introduce the issue | [optional] 
**snapshot_id** | **str** | The identifier of the snapshot for which the paths have been found | [optional] 
**total** | **float** | The total number of results | [optional] 

## Example

```python
from openapi_client.models.issue_paths import IssuePaths

# TODO update the JSON string below
json = "{}"
# create an instance of IssuePaths from a JSON string
issue_paths_instance = IssuePaths.from_json(json)
# print the JSON string representation of the object
print(IssuePaths.to_json())

# convert the object into a dict
issue_paths_dict = issue_paths_instance.to_dict()
# create an instance of IssuePaths from a dict
issue_paths_from_dict = IssuePaths.from_dict(issue_paths_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



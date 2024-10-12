# SyncWorkspaceResponse

A response after synchronizing the workspace to the latest container version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merge_conflict** | [**List[MergeConflict]**](MergeConflict.md) | The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts are resolved. | [optional] 
**sync_status** | [**SyncStatus**](SyncStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.sync_workspace_response import SyncWorkspaceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SyncWorkspaceResponse from a JSON string
sync_workspace_response_instance = SyncWorkspaceResponse.from_json(json)
# print the JSON string representation of the object
print(SyncWorkspaceResponse.to_json())

# convert the object into a dict
sync_workspace_response_dict = sync_workspace_response_instance.to_dict()
# create an instance of SyncWorkspaceResponse from a dict
sync_workspace_response_from_dict = SyncWorkspaceResponse.from_dict(sync_workspace_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



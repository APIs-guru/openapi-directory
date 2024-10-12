# CloudWorkspaceId

A CloudWorkspaceId is a unique identifier for a cloud workspace. A cloud workspace is a place associated with a repo where modified files can be stored before they are committed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the workspace within the repo. This is the name chosen by the client in the Source API&#39;s CreateWorkspace method. | [optional] 
**repo_id** | [**RepoId**](RepoId.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_workspace_id import CloudWorkspaceId

# TODO update the JSON string below
json = "{}"
# create an instance of CloudWorkspaceId from a JSON string
cloud_workspace_id_instance = CloudWorkspaceId.from_json(json)
# print the JSON string representation of the object
print(CloudWorkspaceId.to_json())

# convert the object into a dict
cloud_workspace_id_dict = cloud_workspace_id_instance.to_dict()
# create an instance of CloudWorkspaceId from a dict
cloud_workspace_id_from_dict = CloudWorkspaceId.from_dict(cloud_workspace_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



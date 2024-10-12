# CloudWorkspaceSourceContext

A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshot_id** | **str** | The ID of the snapshot. An empty snapshot_id refers to the most recent snapshot. | [optional] 
**workspace_id** | [**CloudWorkspaceId**](CloudWorkspaceId.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_workspace_source_context import CloudWorkspaceSourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of CloudWorkspaceSourceContext from a JSON string
cloud_workspace_source_context_instance = CloudWorkspaceSourceContext.from_json(json)
# print the JSON string representation of the object
print(CloudWorkspaceSourceContext.to_json())

# convert the object into a dict
cloud_workspace_source_context_dict = cloud_workspace_source_context_instance.to_dict()
# create an instance of CloudWorkspaceSourceContext from a dict
cloud_workspace_source_context_from_dict = CloudWorkspaceSourceContext.from_dict(cloud_workspace_source_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



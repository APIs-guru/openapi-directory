# WorkspaceKeysResponse

Workspace authorization keys for a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_token** | **str** | Primary authorization key for this workspace. | [optional] 
**secondary_token** | **str** | Secondary authorization key for this workspace. | [optional] 

## Example

```python
from openapi_client.models.workspace_keys_response import WorkspaceKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceKeysResponse from a JSON string
workspace_keys_response_instance = WorkspaceKeysResponse.from_json(json)
# print the JSON string representation of the object
print(WorkspaceKeysResponse.to_json())

# convert the object into a dict
workspace_keys_response_dict = workspace_keys_response_instance.to_dict()
# create an instance of WorkspaceKeysResponse from a dict
workspace_keys_response_from_dict = WorkspaceKeysResponse.from_dict(workspace_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



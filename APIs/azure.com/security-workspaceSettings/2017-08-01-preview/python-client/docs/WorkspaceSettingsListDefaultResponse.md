# WorkspaceSettingsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**WorkspaceSettingsListDefaultResponseError**](WorkspaceSettingsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.workspace_settings_list_default_response import WorkspaceSettingsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceSettingsListDefaultResponse from a JSON string
workspace_settings_list_default_response_instance = WorkspaceSettingsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(WorkspaceSettingsListDefaultResponse.to_json())

# convert the object into a dict
workspace_settings_list_default_response_dict = workspace_settings_list_default_response_instance.to_dict()
# create an instance of WorkspaceSettingsListDefaultResponse from a dict
workspace_settings_list_default_response_from_dict = WorkspaceSettingsListDefaultResponse.from_dict(workspace_settings_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



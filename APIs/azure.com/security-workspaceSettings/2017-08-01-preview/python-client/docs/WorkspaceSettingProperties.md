# WorkspaceSettingProperties

Workspace setting data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **str** | All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope | 
**workspace_id** | **str** | The full Azure ID of the workspace to save the data in | 

## Example

```python
from openapi_client.models.workspace_setting_properties import WorkspaceSettingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceSettingProperties from a JSON string
workspace_setting_properties_instance = WorkspaceSettingProperties.from_json(json)
# print the JSON string representation of the object
print(WorkspaceSettingProperties.to_json())

# convert the object into a dict
workspace_setting_properties_dict = workspace_setting_properties_instance.to_dict()
# create an instance of WorkspaceSettingProperties from a dict
workspace_setting_properties_from_dict = WorkspaceSettingProperties.from_dict(workspace_setting_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



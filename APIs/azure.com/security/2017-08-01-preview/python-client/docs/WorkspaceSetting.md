# WorkspaceSetting

Configures where to store the OMS agent data for workspaces under a scope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WorkspaceSettingProperties**](WorkspaceSettingProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.workspace_setting import WorkspaceSetting

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceSetting from a JSON string
workspace_setting_instance = WorkspaceSetting.from_json(json)
# print the JSON string representation of the object
print(WorkspaceSetting.to_json())

# convert the object into a dict
workspace_setting_dict = workspace_setting_instance.to_dict()
# create an instance of WorkspaceSetting from a dict
workspace_setting_from_dict = WorkspaceSetting.from_dict(workspace_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



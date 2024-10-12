# WorkspaceSettingList

List of workspace settings response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[WorkspaceSetting]**](WorkspaceSetting.md) | List of workspace settings | 

## Example

```python
from openapi_client.models.workspace_setting_list import WorkspaceSettingList

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceSettingList from a JSON string
workspace_setting_list_instance = WorkspaceSettingList.from_json(json)
# print the JSON string representation of the object
print(WorkspaceSettingList.to_json())

# convert the object into a dict
workspace_setting_list_dict = workspace_setting_list_instance.to_dict()
# create an instance of WorkspaceSettingList from a dict
workspace_setting_list_from_dict = WorkspaceSettingList.from_dict(workspace_setting_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



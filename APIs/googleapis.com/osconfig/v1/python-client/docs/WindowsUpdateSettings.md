# WindowsUpdateSettings

Windows patching is performed using the Windows Update Agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classifications** | **List[str]** | Only apply updates of these windows update classifications. If empty, all updates are applied. | [optional] 
**excludes** | **List[str]** | List of KBs to exclude from update. | [optional] 
**exclusive_patches** | **List[str]** | An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations. | [optional] 

## Example

```python
from openapi_client.models.windows_update_settings import WindowsUpdateSettings

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsUpdateSettings from a JSON string
windows_update_settings_instance = WindowsUpdateSettings.from_json(json)
# print the JSON string representation of the object
print(WindowsUpdateSettings.to_json())

# convert the object into a dict
windows_update_settings_dict = windows_update_settings_instance.to_dict()
# create an instance of WindowsUpdateSettings from a dict
windows_update_settings_from_dict = WindowsUpdateSettings.from_dict(windows_update_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



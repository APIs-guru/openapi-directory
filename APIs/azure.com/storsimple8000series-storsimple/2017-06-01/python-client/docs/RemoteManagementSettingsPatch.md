# RemoteManagementSettingsPatch

The settings for updating remote management mode of the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_management_mode** | **str** | The remote management mode. | 

## Example

```python
from openapi_client.models.remote_management_settings_patch import RemoteManagementSettingsPatch

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteManagementSettingsPatch from a JSON string
remote_management_settings_patch_instance = RemoteManagementSettingsPatch.from_json(json)
# print the JSON string representation of the object
print(RemoteManagementSettingsPatch.to_json())

# convert the object into a dict
remote_management_settings_patch_dict = remote_management_settings_patch_instance.to_dict()
# create an instance of RemoteManagementSettingsPatch from a dict
remote_management_settings_patch_from_dict = RemoteManagementSettingsPatch.from_dict(remote_management_settings_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



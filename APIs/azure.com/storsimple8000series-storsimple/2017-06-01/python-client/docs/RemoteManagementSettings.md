# RemoteManagementSettings

The settings for remote management of a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_management_certificate** | **str** | The remote management certificates. | [optional] 
**remote_management_mode** | **str** | The remote management mode. | 

## Example

```python
from openapi_client.models.remote_management_settings import RemoteManagementSettings

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteManagementSettings from a JSON string
remote_management_settings_instance = RemoteManagementSettings.from_json(json)
# print the JSON string representation of the object
print(RemoteManagementSettings.to_json())

# convert the object into a dict
remote_management_settings_dict = remote_management_settings_instance.to_dict()
# create an instance of RemoteManagementSettings from a dict
remote_management_settings_from_dict = RemoteManagementSettings.from_dict(remote_management_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



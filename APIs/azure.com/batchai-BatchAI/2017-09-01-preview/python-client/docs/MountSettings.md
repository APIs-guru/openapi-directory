# MountSettings

Details of the File Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_server_internal_ip** | **str** |  | [optional] 
**file_server_public_ip** | **str** |  | [optional] 
**file_server_type** | **str** |  | [optional] 
**mount_point** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mount_settings import MountSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MountSettings from a JSON string
mount_settings_instance = MountSettings.from_json(json)
# print the JSON string representation of the object
print(MountSettings.to_json())

# convert the object into a dict
mount_settings_dict = mount_settings_instance.to_dict()
# create an instance of MountSettings from a dict
mount_settings_from_dict = MountSettings.from_dict(mount_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



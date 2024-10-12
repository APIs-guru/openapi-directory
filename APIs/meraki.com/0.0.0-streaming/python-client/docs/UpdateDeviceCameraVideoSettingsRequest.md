# UpdateDeviceCameraVideoSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_rtsp_enabled** | **bool** | Boolean indicating if external rtsp stream is exposed | [optional] 

## Example

```python
from openapi_client.models.update_device_camera_video_settings_request import UpdateDeviceCameraVideoSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCameraVideoSettingsRequest from a JSON string
update_device_camera_video_settings_request_instance = UpdateDeviceCameraVideoSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCameraVideoSettingsRequest.to_json())

# convert the object into a dict
update_device_camera_video_settings_request_dict = update_device_camera_video_settings_request_instance.to_dict()
# create an instance of UpdateDeviceCameraVideoSettingsRequest from a dict
update_device_camera_video_settings_request_from_dict = UpdateDeviceCameraVideoSettingsRequest.from_dict(update_device_camera_video_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# UpdateDeviceCameraSenseRequestAudioDetection

The details of the audio detection config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Boolean indicating if audio detection is enabled(true) or disabled(false) on the camera | [optional] 

## Example

```python
from openapi_client.models.update_device_camera_sense_request_audio_detection import UpdateDeviceCameraSenseRequestAudioDetection

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCameraSenseRequestAudioDetection from a JSON string
update_device_camera_sense_request_audio_detection_instance = UpdateDeviceCameraSenseRequestAudioDetection.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCameraSenseRequestAudioDetection.to_json())

# convert the object into a dict
update_device_camera_sense_request_audio_detection_dict = update_device_camera_sense_request_audio_detection_instance.to_dict()
# create an instance of UpdateDeviceCameraSenseRequestAudioDetection from a dict
update_device_camera_sense_request_audio_detection_from_dict = UpdateDeviceCameraSenseRequestAudioDetection.from_dict(update_device_camera_sense_request_audio_detection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



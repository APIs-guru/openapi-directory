# UpdateDeviceCameraSenseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_detection** | [**UpdateDeviceCameraSenseRequestAudioDetection**](UpdateDeviceCameraSenseRequestAudioDetection.md) |  | [optional] 
**detection_model_id** | **str** | The ID of the object detection model | [optional] 
**mqtt_broker_id** | **str** | The ID of the MQTT broker to be enabled on the camera. A value of null will disable MQTT on the camera | [optional] 
**sense_enabled** | **bool** | Boolean indicating if sense(license) is enabled(true) or disabled(false) on the camera | [optional] 

## Example

```python
from openapi_client.models.update_device_camera_sense_request import UpdateDeviceCameraSenseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCameraSenseRequest from a JSON string
update_device_camera_sense_request_instance = UpdateDeviceCameraSenseRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCameraSenseRequest.to_json())

# convert the object into a dict
update_device_camera_sense_request_dict = update_device_camera_sense_request_instance.to_dict()
# create an instance of UpdateDeviceCameraSenseRequest from a dict
update_device_camera_sense_request_from_dict = UpdateDeviceCameraSenseRequest.from_dict(update_device_camera_sense_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



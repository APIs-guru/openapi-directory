# UpdateDeviceCameraQualityAndRetentionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_recording_enabled** | **bool** | Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera | [optional] 
**motion_based_retention_enabled** | **bool** | Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera. | [optional] 
**motion_detector_version** | **int** | The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2. | [optional] 
**profile_id** | **str** | The ID of a quality and retention profile to assign to the camera. The profile&#39;s settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera. | [optional] 
**quality** | **str** | Quality of the camera. Can be one of &#39;Standard&#39;, &#39;High&#39; or &#39;Enhanced&#39;. Not all qualities are supported by every camera model. | [optional] 
**resolution** | **str** | Resolution of the camera. Can be one of &#39;1280x720&#39;, &#39;1920x1080&#39;, &#39;1080x1080&#39;, &#39;2058x2058&#39;, &#39;2112x2112&#39;, &#39;2880x2880&#39;, &#39;2688x1512&#39; or &#39;3840x2160&#39;.Not all resolutions are supported by every camera model. | [optional] 
**restricted_bandwidth_mode_enabled** | **bool** | Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera. This setting does not apply to MV2 cameras. | [optional] 

## Example

```python
from openapi_client.models.update_device_camera_quality_and_retention_request import UpdateDeviceCameraQualityAndRetentionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCameraQualityAndRetentionRequest from a JSON string
update_device_camera_quality_and_retention_request_instance = UpdateDeviceCameraQualityAndRetentionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCameraQualityAndRetentionRequest.to_json())

# convert the object into a dict
update_device_camera_quality_and_retention_request_dict = update_device_camera_quality_and_retention_request_instance.to_dict()
# create an instance of UpdateDeviceCameraQualityAndRetentionRequest from a dict
update_device_camera_quality_and_retention_request_from_dict = UpdateDeviceCameraQualityAndRetentionRequest.from_dict(update_device_camera_quality_and_retention_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



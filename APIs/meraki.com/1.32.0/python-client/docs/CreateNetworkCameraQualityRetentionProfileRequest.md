# CreateNetworkCameraQualityRetentionProfileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_recording_enabled** | **bool** | Whether or not to record audio. Can be either true or false. Defaults to false. | [optional] 
**cloud_archive_enabled** | **bool** | Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false. | [optional] 
**max_retention_days** | **int** | The maximum number of days for which the data will be stored, or &#39;null&#39; to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days. | [optional] 
**motion_based_retention_enabled** | **bool** | Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras. | [optional] 
**motion_detector_version** | **int** | The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2. | [optional] 
**name** | **str** | The name of the new profile. Must be unique. This parameter is required. | 
**restricted_bandwidth_mode_enabled** | **bool** | Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras. | [optional] 
**schedule_id** | **str** | Schedule for which this camera will record video, or &#39;null&#39; to always record. | [optional] 
**video_settings** | [**CreateNetworkCameraQualityRetentionProfileRequestVideoSettings**](CreateNetworkCameraQualityRetentionProfileRequestVideoSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_camera_quality_retention_profile_request import CreateNetworkCameraQualityRetentionProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkCameraQualityRetentionProfileRequest from a JSON string
create_network_camera_quality_retention_profile_request_instance = CreateNetworkCameraQualityRetentionProfileRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkCameraQualityRetentionProfileRequest.to_json())

# convert the object into a dict
create_network_camera_quality_retention_profile_request_dict = create_network_camera_quality_retention_profile_request_instance.to_dict()
# create an instance of CreateNetworkCameraQualityRetentionProfileRequest from a dict
create_network_camera_quality_retention_profile_request_from_dict = CreateNetworkCameraQualityRetentionProfileRequest.from_dict(create_network_camera_quality_retention_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV12MV22MV72

Quality and resolution for MV12/MV22/MV72 camera models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quality** | **str** | Quality of the camera. Can be one of &#39;Standard&#39;, &#39;Enhanced&#39; or &#39;High&#39;. | 
**resolution** | **str** | Resolution of the camera. Can be one of &#39;1280x720&#39; or &#39;1920x1080&#39;. | 

## Example

```python
from openapi_client.models.create_network_camera_quality_retention_profile_request_video_settings_mv12_mv22_mv72 import CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV12MV22MV72

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV12MV22MV72 from a JSON string
create_network_camera_quality_retention_profile_request_video_settings_mv12_mv22_mv72_instance = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV12MV22MV72.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV12MV22MV72.to_json())

# convert the object into a dict
create_network_camera_quality_retention_profile_request_video_settings_mv12_mv22_mv72_dict = create_network_camera_quality_retention_profile_request_video_settings_mv12_mv22_mv72_instance.to_dict()
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV12MV22MV72 from a dict
create_network_camera_quality_retention_profile_request_video_settings_mv12_mv22_mv72_from_dict = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV12MV22MV72.from_dict(create_network_camera_quality_retention_profile_request_video_settings_mv12_mv22_mv72_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV93X

Quality and resolution for MV93X camera models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quality** | **str** | Quality of the camera. Can be one of &#39;Standard&#39;, &#39;Enhanced&#39; or &#39;High&#39;. | 
**resolution** | **str** | Resolution of the camera. Can be one of &#39;1080x1080&#39;, &#39;2112x2112&#39; or &#39;2880x2880&#39;. | 

## Example

```python
from openapi_client.models.create_network_camera_quality_retention_profile_request_video_settings_mv93_x import CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV93X

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV93X from a JSON string
create_network_camera_quality_retention_profile_request_video_settings_mv93_x_instance = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV93X.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV93X.to_json())

# convert the object into a dict
create_network_camera_quality_retention_profile_request_video_settings_mv93_x_dict = create_network_camera_quality_retention_profile_request_video_settings_mv93_x_instance.to_dict()
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV93X from a dict
create_network_camera_quality_retention_profile_request_video_settings_mv93_x_from_dict = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV93X.from_dict(create_network_camera_quality_retention_profile_request_video_settings_mv93_x_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



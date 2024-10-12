# CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV22XMV72X

Quality and resolution for MV22X/MV72X camera models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quality** | **str** | Quality of the camera. Can be one of &#39;Standard&#39;, &#39;Enhanced&#39; or &#39;High&#39;. | 
**resolution** | **str** | Resolution of the camera. Can be one of &#39;1280x720&#39;, &#39;1920x1080&#39; or &#39;2688x1512&#39;. | 

## Example

```python
from openapi_client.models.create_network_camera_quality_retention_profile_request_video_settings_mv22_xmv72_x import CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV22XMV72X

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV22XMV72X from a JSON string
create_network_camera_quality_retention_profile_request_video_settings_mv22_xmv72_x_instance = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV22XMV72X.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV22XMV72X.to_json())

# convert the object into a dict
create_network_camera_quality_retention_profile_request_video_settings_mv22_xmv72_x_dict = create_network_camera_quality_retention_profile_request_video_settings_mv22_xmv72_x_instance.to_dict()
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV22XMV72X from a dict
create_network_camera_quality_retention_profile_request_video_settings_mv22_xmv72_x_from_dict = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV22XMV72X.from_dict(create_network_camera_quality_retention_profile_request_video_settings_mv22_xmv72_x_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



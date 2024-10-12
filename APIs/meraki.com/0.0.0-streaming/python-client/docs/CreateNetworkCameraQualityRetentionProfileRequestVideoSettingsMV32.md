# CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV32

Quality and resolution for MV32 camera models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quality** | **str** | Quality of the camera. Can be one of &#39;Standard&#39;, &#39;Enhanced&#39; or &#39;High&#39;. | 
**resolution** | **str** | Resolution of the camera. Can be one of &#39;1080x1080&#39; or &#39;2058x2058&#39;. | 

## Example

```python
from openapi_client.models.create_network_camera_quality_retention_profile_request_video_settings_mv32 import CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV32

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV32 from a JSON string
create_network_camera_quality_retention_profile_request_video_settings_mv32_instance = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV32.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV32.to_json())

# convert the object into a dict
create_network_camera_quality_retention_profile_request_video_settings_mv32_dict = create_network_camera_quality_retention_profile_request_video_settings_mv32_instance.to_dict()
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV32 from a dict
create_network_camera_quality_retention_profile_request_video_settings_mv32_from_dict = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV32.from_dict(create_network_camera_quality_retention_profile_request_video_settings_mv32_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



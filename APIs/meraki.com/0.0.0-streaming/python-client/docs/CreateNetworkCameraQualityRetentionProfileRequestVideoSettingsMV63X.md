# CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63X

Quality and resolution for MV63X camera models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quality** | **str** | Quality of the camera. Can be one of &#39;Standard&#39;, &#39;Enhanced&#39; or &#39;High&#39;. | 
**resolution** | **str** | Resolution of the camera. Can be one of &#39;1920x1080&#39;, &#39;2688x1512&#39; or &#39;3840x2160&#39;. | 

## Example

```python
from openapi_client.models.create_network_camera_quality_retention_profile_request_video_settings_mv63_x import CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63X

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63X from a JSON string
create_network_camera_quality_retention_profile_request_video_settings_mv63_x_instance = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63X.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63X.to_json())

# convert the object into a dict
create_network_camera_quality_retention_profile_request_video_settings_mv63_x_dict = create_network_camera_quality_retention_profile_request_video_settings_mv63_x_instance.to_dict()
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63X from a dict
create_network_camera_quality_retention_profile_request_video_settings_mv63_x_from_dict = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63X.from_dict(create_network_camera_quality_retention_profile_request_video_settings_mv63_x_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63

Quality and resolution for MV63 camera models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quality** | **str** | Quality of the camera. Can be one of &#39;Standard&#39;, &#39;Enhanced&#39; or &#39;High&#39;. | 
**resolution** | **str** | Resolution of the camera. Can be one of &#39;1920x1080&#39; or &#39;2688x1512&#39;. | 

## Example

```python
from openapi_client.models.create_network_camera_quality_retention_profile_request_video_settings_mv63 import CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63 from a JSON string
create_network_camera_quality_retention_profile_request_video_settings_mv63_instance = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63.to_json())

# convert the object into a dict
create_network_camera_quality_retention_profile_request_video_settings_mv63_dict = create_network_camera_quality_retention_profile_request_video_settings_mv63_instance.to_dict()
# create an instance of CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63 from a dict
create_network_camera_quality_retention_profile_request_video_settings_mv63_from_dict = CreateNetworkCameraQualityRetentionProfileRequestVideoSettingsMV63.from_dict(create_network_camera_quality_retention_profile_request_video_settings_mv63_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



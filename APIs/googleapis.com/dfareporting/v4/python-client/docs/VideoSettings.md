# VideoSettings

Video Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companion_settings** | [**CompanionSetting**](CompanionSetting.md) |  | [optional] 
**duration_seconds** | **int** | Duration of a video placement in seconds. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#videoSettings\&quot;. | [optional] 
**oba_enabled** | **bool** | Whether OBA icons are enabled for this placement. | [optional] 
**oba_settings** | [**ObaIcon**](ObaIcon.md) |  | [optional] 
**orientation** | **str** | Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation. | [optional] 
**publisher_specification_id** | **str** | Publisher specification ID of a video placement. | [optional] 
**skippable_settings** | [**SkippableSetting**](SkippableSetting.md) |  | [optional] 
**transcode_settings** | [**TranscodeSetting**](TranscodeSetting.md) |  | [optional] 

## Example

```python
from openapi_client.models.video_settings import VideoSettings

# TODO update the JSON string below
json = "{}"
# create an instance of VideoSettings from a JSON string
video_settings_instance = VideoSettings.from_json(json)
# print the JSON string representation of the object
print(VideoSettings.to_json())

# convert the object into a dict
video_settings_dict = video_settings_instance.to_dict()
# create an instance of VideoSettings from a dict
video_settings_from_dict = VideoSettings.from_dict(video_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



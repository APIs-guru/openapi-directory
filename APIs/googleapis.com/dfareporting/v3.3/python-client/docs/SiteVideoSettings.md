# SiteVideoSettings

Video Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companion_settings** | [**SiteCompanionSetting**](SiteCompanionSetting.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#siteVideoSettings\&quot;. | [optional] 
**orientation** | **str** | Orientation of a site template used for video. This will act as default for new placements created under this site. | [optional] 
**skippable_settings** | [**SiteSkippableSetting**](SiteSkippableSetting.md) |  | [optional] 
**transcode_settings** | [**SiteTranscodeSetting**](SiteTranscodeSetting.md) |  | [optional] 

## Example

```python
from openapi_client.models.site_video_settings import SiteVideoSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SiteVideoSettings from a JSON string
site_video_settings_instance = SiteVideoSettings.from_json(json)
# print the JSON string representation of the object
print(SiteVideoSettings.to_json())

# convert the object into a dict
site_video_settings_dict = site_video_settings_instance.to_dict()
# create an instance of SiteVideoSettings from a dict
site_video_settings_from_dict = SiteVideoSettings.from_dict(site_video_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



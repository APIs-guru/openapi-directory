# SiteTranscodeSetting

Transcode Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_video_formats** | **List[int]** | Allowlist of video formats to be served to this site template. Set this list to null or empty to serve all video formats. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#siteTranscodeSetting\&quot;. | [optional] 

## Example

```python
from openapi_client.models.site_transcode_setting import SiteTranscodeSetting

# TODO update the JSON string below
json = "{}"
# create an instance of SiteTranscodeSetting from a JSON string
site_transcode_setting_instance = SiteTranscodeSetting.from_json(json)
# print the JSON string representation of the object
print(SiteTranscodeSetting.to_json())

# convert the object into a dict
site_transcode_setting_dict = site_transcode_setting_instance.to_dict()
# create an instance of SiteTranscodeSetting from a dict
site_transcode_setting_from_dict = SiteTranscodeSetting.from_dict(site_transcode_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



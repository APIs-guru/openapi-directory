# SiteSettings

Site Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_view_opt_out** | **bool** | Whether active view creatives are disabled for this site. | [optional] 
**ad_blocking_opt_out** | **bool** | Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement settings. When false, the campaign and placement settings take effect. | [optional] 
**disable_new_cookie** | **bool** | Whether new cookies are disabled for this site. | [optional] 
**tag_setting** | [**TagSetting**](TagSetting.md) |  | [optional] 
**video_active_view_opt_out_template** | **bool** | Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement. | [optional] 
**vpaid_adapter_choice_template** | **str** | Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher&#39;s specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter). *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH. | [optional] 

## Example

```python
from openapi_client.models.site_settings import SiteSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SiteSettings from a JSON string
site_settings_instance = SiteSettings.from_json(json)
# print the JSON string representation of the object
print(SiteSettings.to_json())

# convert the object into a dict
site_settings_dict = site_settings_instance.to_dict()
# create an instance of SiteSettings from a dict
site_settings_from_dict = SiteSettings.from_dict(site_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



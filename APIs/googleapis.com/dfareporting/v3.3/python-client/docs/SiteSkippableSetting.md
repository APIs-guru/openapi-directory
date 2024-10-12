# SiteSkippableSetting

Skippable Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#siteSkippableSetting\&quot;. | [optional] 
**progress_offset** | [**VideoOffset**](VideoOffset.md) |  | [optional] 
**skip_offset** | [**VideoOffset**](VideoOffset.md) |  | [optional] 
**skippable** | **bool** | Whether the user can skip creatives served to this site. This will act as default for new placements created under this site. | [optional] 

## Example

```python
from openapi_client.models.site_skippable_setting import SiteSkippableSetting

# TODO update the JSON string below
json = "{}"
# create an instance of SiteSkippableSetting from a JSON string
site_skippable_setting_instance = SiteSkippableSetting.from_json(json)
# print the JSON string representation of the object
print(SiteSkippableSetting.to_json())

# convert the object into a dict
site_skippable_setting_dict = site_skippable_setting_instance.to_dict()
# create an instance of SiteSkippableSetting from a dict
site_skippable_setting_from_dict = SiteSkippableSetting.from_dict(site_skippable_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



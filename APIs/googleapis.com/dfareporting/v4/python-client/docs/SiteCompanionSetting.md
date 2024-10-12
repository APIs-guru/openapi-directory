# SiteCompanionSetting

Companion Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companions_disabled** | **bool** | Whether companions are disabled for this site template. | [optional] 
**enabled_sizes** | [**List[Size]**](Size.md) | Allowlist of companion sizes to be served via this site template. Set this list to null or empty to serve all companion sizes. | [optional] 
**image_only** | **bool** | Whether to serve only static images as companions. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#siteCompanionSetting\&quot;. | [optional] 

## Example

```python
from openapi_client.models.site_companion_setting import SiteCompanionSetting

# TODO update the JSON string below
json = "{}"
# create an instance of SiteCompanionSetting from a JSON string
site_companion_setting_instance = SiteCompanionSetting.from_json(json)
# print the JSON string representation of the object
print(SiteCompanionSetting.to_json())

# convert the object into a dict
site_companion_setting_dict = site_companion_setting_instance.to_dict()
# create an instance of SiteCompanionSetting from a dict
site_companion_setting_from_dict = SiteCompanionSetting.from_dict(site_companion_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



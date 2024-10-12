# AdUnitContentAdsSettings

Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_option** | [**AdUnitContentAdsSettingsBackupOption**](AdUnitContentAdsSettingsBackupOption.md) |  | [optional] 
**size** | **str** | Size of this ad unit. | [optional] 
**type** | **str** | Type of this ad unit. | [optional] 

## Example

```python
from openapi_client.models.ad_unit_content_ads_settings import AdUnitContentAdsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AdUnitContentAdsSettings from a JSON string
ad_unit_content_ads_settings_instance = AdUnitContentAdsSettings.from_json(json)
# print the JSON string representation of the object
print(AdUnitContentAdsSettings.to_json())

# convert the object into a dict
ad_unit_content_ads_settings_dict = ad_unit_content_ads_settings_instance.to_dict()
# create an instance of AdUnitContentAdsSettings from a dict
ad_unit_content_ads_settings_from_dict = AdUnitContentAdsSettings.from_dict(ad_unit_content_ads_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



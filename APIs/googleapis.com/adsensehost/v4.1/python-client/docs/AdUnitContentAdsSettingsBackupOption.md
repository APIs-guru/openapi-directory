# AdUnitContentAdsSettingsBackupOption

The backup option to be used in instances where no ad is available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | Color to use when type is set to COLOR. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash. | [optional] 
**type** | **str** | Type of the backup option. Possible values are BLANK, COLOR and URL. | [optional] 
**url** | **str** | URL to use when type is set to URL. | [optional] 

## Example

```python
from openapi_client.models.ad_unit_content_ads_settings_backup_option import AdUnitContentAdsSettingsBackupOption

# TODO update the JSON string below
json = "{}"
# create an instance of AdUnitContentAdsSettingsBackupOption from a JSON string
ad_unit_content_ads_settings_backup_option_instance = AdUnitContentAdsSettingsBackupOption.from_json(json)
# print the JSON string representation of the object
print(AdUnitContentAdsSettingsBackupOption.to_json())

# convert the object into a dict
ad_unit_content_ads_settings_backup_option_dict = ad_unit_content_ads_settings_backup_option_instance.to_dict()
# create an instance of AdUnitContentAdsSettingsBackupOption from a dict
ad_unit_content_ads_settings_backup_option_from_dict = AdUnitContentAdsSettingsBackupOption.from_dict(ad_unit_content_ads_settings_backup_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



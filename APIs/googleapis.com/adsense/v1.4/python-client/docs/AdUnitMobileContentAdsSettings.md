# AdUnitMobileContentAdsSettings

Settings specific to WAP mobile content ads (AFMC) - deprecated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**markup_language** | **str** | The markup language to use for this ad unit. | [optional] 
**scripting_language** | **str** | The scripting language to use for this ad unit. | [optional] 
**size** | **str** | Size of this ad unit. | [optional] 
**type** | **str** | Type of this ad unit. | [optional] 

## Example

```python
from openapi_client.models.ad_unit_mobile_content_ads_settings import AdUnitMobileContentAdsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AdUnitMobileContentAdsSettings from a JSON string
ad_unit_mobile_content_ads_settings_instance = AdUnitMobileContentAdsSettings.from_json(json)
# print the JSON string representation of the object
print(AdUnitMobileContentAdsSettings.to_json())

# convert the object into a dict
ad_unit_mobile_content_ads_settings_dict = ad_unit_mobile_content_ads_settings_instance.to_dict()
# create an instance of AdUnitMobileContentAdsSettings from a dict
ad_unit_mobile_content_ads_settings_from_dict = AdUnitMobileContentAdsSettings.from_dict(ad_unit_mobile_content_ads_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleAdsSearchads360V0CommonTargetingSetting

Settings for the targeting-related features, at the campaign and ad group levels. For more details about the targeting setting, visit https://support.google.com/google-ads/answer/7365594

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_restrictions** | [**List[GoogleAdsSearchads360V0CommonTargetRestriction]**](GoogleAdsSearchads360V0CommonTargetRestriction.md) | The per-targeting-dimension setting to restrict the reach of your campaign or ad group. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_targeting_setting import GoogleAdsSearchads360V0CommonTargetingSetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonTargetingSetting from a JSON string
google_ads_searchads360_v0_common_targeting_setting_instance = GoogleAdsSearchads360V0CommonTargetingSetting.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonTargetingSetting.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_targeting_setting_dict = google_ads_searchads360_v0_common_targeting_setting_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonTargetingSetting from a dict
google_ads_searchads360_v0_common_targeting_setting_from_dict = GoogleAdsSearchads360V0CommonTargetingSetting.from_dict(google_ads_searchads360_v0_common_targeting_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



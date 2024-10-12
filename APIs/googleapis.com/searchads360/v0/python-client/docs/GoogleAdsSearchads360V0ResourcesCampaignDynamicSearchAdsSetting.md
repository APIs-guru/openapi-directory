# GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting

The setting for controlling Dynamic Search Ads (DSA).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | Required. The Internet domain name that this setting represents, for example, \&quot;google.com\&quot; or \&quot;www.google.com\&quot;. | [optional] 
**language_code** | **str** | Required. The language code specifying the language of the domain, for example, \&quot;en\&quot;. | [optional] 
**use_supplied_urls_only** | **bool** | Whether the campaign uses advertiser supplied URLs exclusively. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_campaign_dynamic_search_ads_setting import GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting from a JSON string
google_ads_searchads360_v0_resources_campaign_dynamic_search_ads_setting_instance = GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_campaign_dynamic_search_ads_setting_dict = google_ads_searchads360_v0_resources_campaign_dynamic_search_ads_setting_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting from a dict
google_ads_searchads360_v0_resources_campaign_dynamic_search_ads_setting_from_dict = GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting.from_dict(google_ads_searchads360_v0_resources_campaign_dynamic_search_ads_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



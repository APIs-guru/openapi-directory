# GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting

The setting for Shopping campaigns. Defines the universe of products that can be advertised by the campaign, and how this campaign interacts with other Shopping campaigns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_priority** | **int** | Priority of the campaign. Campaigns with numerically higher priorities take precedence over those with lower priorities. This field is required for Shopping campaigns, with values between 0 and 2, inclusive. This field is optional for Smart Shopping campaigns, but must be equal to 3 if set. | [optional] 
**enable_local** | **bool** | Whether to include local products. | [optional] 
**feed_label** | **str** | Feed label of products to include in the campaign. Only one of feed_label or sales_country can be set. If used instead of sales_country, the feed_label field accepts country codes in the same format for example: &#39;XX&#39;. Otherwise can be any string used for feed label in Google Merchant Center. | [optional] 
**merchant_id** | **str** | Immutable. ID of the Merchant Center account. This field is required for create operations. This field is immutable for Shopping campaigns. | [optional] 
**sales_country** | **str** | Sales country of products to include in the campaign.  | [optional] 
**use_vehicle_inventory** | **bool** | Immutable. Whether to target Vehicle Listing inventory. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_campaign_shopping_setting import GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting from a JSON string
google_ads_searchads360_v0_resources_campaign_shopping_setting_instance = GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_campaign_shopping_setting_dict = google_ads_searchads360_v0_resources_campaign_shopping_setting_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting from a dict
google_ads_searchads360_v0_resources_campaign_shopping_setting_from_dict = GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting.from_dict(google_ads_searchads360_v0_resources_campaign_shopping_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



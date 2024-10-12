# GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings

The network settings for the campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_content_network** | **bool** | Whether ads will be served on specified placements in the Google Display Network. Placements are specified using the Placement criterion. | [optional] 
**target_google_search** | **bool** | Whether ads will be served with google.com search results. | [optional] 
**target_partner_search_network** | **bool** | Whether ads will be served on the Google Partner Network. This is available only to some select Google partner accounts. | [optional] 
**target_search_network** | **bool** | Whether ads will be served on partner sites in the Google Search Network (requires &#x60;target_google_search&#x60; to also be &#x60;true&#x60;). | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_campaign_network_settings import GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings from a JSON string
google_ads_searchads360_v0_resources_campaign_network_settings_instance = GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_campaign_network_settings_dict = google_ads_searchads360_v0_resources_campaign_network_settings_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings from a dict
google_ads_searchads360_v0_resources_campaign_network_settings_from_dict = GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings.from_dict(google_ads_searchads360_v0_resources_campaign_network_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



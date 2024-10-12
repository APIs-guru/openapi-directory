# GoogleAdsSearchads360V0ResourcesCampaignLabel

Represents a relationship between a campaign and a label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | **str** | Immutable. The campaign to which the label is attached. | [optional] 
**label** | **str** | Immutable. The label assigned to the campaign. | [optional] 
**resource_name** | **str** | Immutable. Name of the resource. Campaign label resource names have the form: &#x60;customers/{customer_id}/campaignLabels/{campaign_id}~{label_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_campaign_label import GoogleAdsSearchads360V0ResourcesCampaignLabel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignLabel from a JSON string
google_ads_searchads360_v0_resources_campaign_label_instance = GoogleAdsSearchads360V0ResourcesCampaignLabel.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCampaignLabel.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_campaign_label_dict = google_ads_searchads360_v0_resources_campaign_label_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignLabel from a dict
google_ads_searchads360_v0_resources_campaign_label_from_dict = GoogleAdsSearchads360V0ResourcesCampaignLabel.from_dict(google_ads_searchads360_v0_resources_campaign_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



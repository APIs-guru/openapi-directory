# GoogleAdsSearchads360V0CommonTargetImpressionShare

An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpc_bid_ceiling_micros** | **str** | The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros. | [optional] 
**location** | **str** | The targeted location on the search results page. | [optional] 
**location_fraction_micros** | **str** | The chosen fraction of ads to be shown in the targeted location in micros. For example, 1% equals 10,000. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_target_impression_share import GoogleAdsSearchads360V0CommonTargetImpressionShare

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonTargetImpressionShare from a JSON string
google_ads_searchads360_v0_common_target_impression_share_instance = GoogleAdsSearchads360V0CommonTargetImpressionShare.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonTargetImpressionShare.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_target_impression_share_dict = google_ads_searchads360_v0_common_target_impression_share_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonTargetImpressionShare from a dict
google_ads_searchads360_v0_common_target_impression_share_from_dict = GoogleAdsSearchads360V0CommonTargetImpressionShare.from_dict(google_ads_searchads360_v0_common_target_impression_share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



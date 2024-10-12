# GoogleAdsSearchads360V0CommonTargetOutrankShare

An automated bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This strategy is deprecated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpc_bid_ceiling_micros** | **str** | Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_target_outrank_share import GoogleAdsSearchads360V0CommonTargetOutrankShare

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonTargetOutrankShare from a JSON string
google_ads_searchads360_v0_common_target_outrank_share_instance = GoogleAdsSearchads360V0CommonTargetOutrankShare.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonTargetOutrankShare.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_target_outrank_share_dict = google_ads_searchads360_v0_common_target_outrank_share_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonTargetOutrankShare from a dict
google_ads_searchads360_v0_common_target_outrank_share_from_dict = GoogleAdsSearchads360V0CommonTargetOutrankShare.from_dict(google_ads_searchads360_v0_common_target_outrank_share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



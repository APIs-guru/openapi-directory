# GoogleAdsSearchads360V0CommonMaximizeConversions

An automated bidding strategy to help get the most conversions for your campaigns while spending your budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpc_bid_ceiling_micros** | **str** | Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. | [optional] 
**cpc_bid_floor_micros** | **str** | Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. | [optional] 
**target_cpa_micros** | **str** | The target cost-per-action (CPA) option. This is the average amount that you would like to spend per conversion action specified in micro units of the bidding strategy&#39;s currency. If set, the bid strategy will get as many conversions as possible at or below the target cost-per-action. If the target CPA is not set, the bid strategy will aim to achieve the lowest possible CPA given the budget. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_maximize_conversions import GoogleAdsSearchads360V0CommonMaximizeConversions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonMaximizeConversions from a JSON string
google_ads_searchads360_v0_common_maximize_conversions_instance = GoogleAdsSearchads360V0CommonMaximizeConversions.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonMaximizeConversions.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_maximize_conversions_dict = google_ads_searchads360_v0_common_maximize_conversions_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonMaximizeConversions from a dict
google_ads_searchads360_v0_common_maximize_conversions_from_dict = GoogleAdsSearchads360V0CommonMaximizeConversions.from_dict(google_ads_searchads360_v0_common_maximize_conversions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



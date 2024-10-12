# GoogleAdsSearchads360V0CommonTargetCpa

An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpc_bid_ceiling_micros** | **str** | Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. | [optional] 
**cpc_bid_floor_micros** | **str** | Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. | [optional] 
**target_cpa_micros** | **str** | Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_target_cpa import GoogleAdsSearchads360V0CommonTargetCpa

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonTargetCpa from a JSON string
google_ads_searchads360_v0_common_target_cpa_instance = GoogleAdsSearchads360V0CommonTargetCpa.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonTargetCpa.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_target_cpa_dict = google_ads_searchads360_v0_common_target_cpa_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonTargetCpa from a dict
google_ads_searchads360_v0_common_target_cpa_from_dict = GoogleAdsSearchads360V0CommonTargetCpa.from_dict(google_ads_searchads360_v0_common_target_cpa_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



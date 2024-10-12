# GoogleAdsSearchads360V0CommonTargetRoas

An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpc_bid_ceiling_micros** | **str** | Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. | [optional] 
**cpc_bid_floor_micros** | **str** | Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. | [optional] 
**target_roas** | **float** | Required. The chosen revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_target_roas import GoogleAdsSearchads360V0CommonTargetRoas

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonTargetRoas from a JSON string
google_ads_searchads360_v0_common_target_roas_instance = GoogleAdsSearchads360V0CommonTargetRoas.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonTargetRoas.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_target_roas_dict = google_ads_searchads360_v0_common_target_roas_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonTargetRoas from a dict
google_ads_searchads360_v0_common_target_roas_from_dict = GoogleAdsSearchads360V0CommonTargetRoas.from_dict(google_ads_searchads360_v0_common_target_roas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



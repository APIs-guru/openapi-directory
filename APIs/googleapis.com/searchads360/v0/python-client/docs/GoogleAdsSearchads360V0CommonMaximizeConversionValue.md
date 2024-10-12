# GoogleAdsSearchads360V0CommonMaximizeConversionValue

An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpc_bid_ceiling_micros** | **str** | Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. | [optional] 
**cpc_bid_floor_micros** | **str** | Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. | [optional] 
**target_roas** | **float** | The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_maximize_conversion_value import GoogleAdsSearchads360V0CommonMaximizeConversionValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonMaximizeConversionValue from a JSON string
google_ads_searchads360_v0_common_maximize_conversion_value_instance = GoogleAdsSearchads360V0CommonMaximizeConversionValue.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonMaximizeConversionValue.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_maximize_conversion_value_dict = google_ads_searchads360_v0_common_maximize_conversion_value_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonMaximizeConversionValue from a dict
google_ads_searchads360_v0_common_maximize_conversion_value_from_dict = GoogleAdsSearchads360V0CommonMaximizeConversionValue.from_dict(google_ads_searchads360_v0_common_maximize_conversion_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



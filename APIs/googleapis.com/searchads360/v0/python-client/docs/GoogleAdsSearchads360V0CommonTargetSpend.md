# GoogleAdsSearchads360V0CommonTargetSpend

An automated bid strategy that sets your bids to help get as many clicks as possible within your budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpc_bid_ceiling_micros** | **str** | Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. | [optional] 
**target_spend_micros** | **str** | The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target. This field is deprecated and should no longer be used. See https://ads-developers.googleblog.com/2020/05/reminder-about-sunset-creation-of.html for details. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_target_spend import GoogleAdsSearchads360V0CommonTargetSpend

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonTargetSpend from a JSON string
google_ads_searchads360_v0_common_target_spend_instance = GoogleAdsSearchads360V0CommonTargetSpend.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonTargetSpend.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_target_spend_dict = google_ads_searchads360_v0_common_target_spend_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonTargetSpend from a dict
google_ads_searchads360_v0_common_target_spend_from_dict = GoogleAdsSearchads360V0CommonTargetSpend.from_dict(google_ads_searchads360_v0_common_target_spend_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



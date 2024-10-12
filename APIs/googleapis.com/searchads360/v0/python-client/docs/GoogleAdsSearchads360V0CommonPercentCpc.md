# GoogleAdsSearchads360V0CommonPercentCpc

A bidding strategy where bids are a fraction of the advertised price for some good or service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpc_bid_ceiling_micros** | **str** | Maximum bid limit that can be set by the bid strategy. This is an optional field entered by the advertiser and specified in local micros. Note: A zero value is interpreted in the same way as having bid_ceiling undefined. | [optional] 
**enhanced_cpc_enabled** | **bool** | Adjusts the bid for each auction upward or downward, depending on the likelihood of a conversion. Individual bids may exceed cpc_bid_ceiling_micros, but the average bid amount for a campaign should not. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_percent_cpc import GoogleAdsSearchads360V0CommonPercentCpc

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonPercentCpc from a JSON string
google_ads_searchads360_v0_common_percent_cpc_instance = GoogleAdsSearchads360V0CommonPercentCpc.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonPercentCpc.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_percent_cpc_dict = google_ads_searchads360_v0_common_percent_cpc_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonPercentCpc from a dict
google_ads_searchads360_v0_common_percent_cpc_from_dict = GoogleAdsSearchads360V0CommonPercentCpc.from_dict(google_ads_searchads360_v0_common_percent_cpc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



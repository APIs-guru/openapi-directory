# GoogleAdsSearchads360V0ResourcesBiddingStrategy

A bidding strategy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_count** | **str** | Output only. The number of campaigns attached to this bidding strategy. This field is read-only. | [optional] [readonly] 
**currency_code** | **str** | Immutable. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this currency can be set on creation and defaults to the manager customer&#39;s currency. For serving customers, this field cannot be set; all strategies in a serving customer implicitly use the serving customer&#39;s currency. In all cases the effective_currency_code field returns the currency used by the strategy. | [optional] 
**effective_currency_code** | **str** | Output only. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this is the currency set by the advertiser when creating the strategy. For serving customers, this is the customer&#39;s currency_code. Bidding strategy metrics are reported in this currency. This field is read-only. | [optional] [readonly] 
**enhanced_cpc** | **object** | An automated bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely. This bidding strategy is deprecated and cannot be created anymore. Use ManualCpc with enhanced_cpc_enabled set to true for equivalent functionality. | [optional] 
**id** | **str** | Output only. The ID of the bidding strategy. | [optional] [readonly] 
**maximize_conversion_value** | [**GoogleAdsSearchads360V0CommonMaximizeConversionValue**](GoogleAdsSearchads360V0CommonMaximizeConversionValue.md) |  | [optional] 
**maximize_conversions** | [**GoogleAdsSearchads360V0CommonMaximizeConversions**](GoogleAdsSearchads360V0CommonMaximizeConversions.md) |  | [optional] 
**name** | **str** | The name of the bidding strategy. All bidding strategies within an account must be named distinctly. The length of this string should be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed). | [optional] 
**non_removed_campaign_count** | **str** | Output only. The number of non-removed campaigns attached to this bidding strategy. This field is read-only. | [optional] [readonly] 
**resource_name** | **str** | Immutable. The resource name of the bidding strategy. Bidding strategy resource names have the form: &#x60;customers/{customer_id}/biddingStrategies/{bidding_strategy_id}&#x60; | [optional] 
**status** | **str** | Output only. The status of the bidding strategy. This field is read-only. | [optional] [readonly] 
**target_cpa** | [**GoogleAdsSearchads360V0CommonTargetCpa**](GoogleAdsSearchads360V0CommonTargetCpa.md) |  | [optional] 
**target_impression_share** | [**GoogleAdsSearchads360V0CommonTargetImpressionShare**](GoogleAdsSearchads360V0CommonTargetImpressionShare.md) |  | [optional] 
**target_outrank_share** | [**GoogleAdsSearchads360V0CommonTargetOutrankShare**](GoogleAdsSearchads360V0CommonTargetOutrankShare.md) |  | [optional] 
**target_roas** | [**GoogleAdsSearchads360V0CommonTargetRoas**](GoogleAdsSearchads360V0CommonTargetRoas.md) |  | [optional] 
**target_spend** | [**GoogleAdsSearchads360V0CommonTargetSpend**](GoogleAdsSearchads360V0CommonTargetSpend.md) |  | [optional] 
**type** | **str** | Output only. The type of the bidding strategy. Create a bidding strategy by setting the bidding scheme. This field is read-only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_bidding_strategy import GoogleAdsSearchads360V0ResourcesBiddingStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesBiddingStrategy from a JSON string
google_ads_searchads360_v0_resources_bidding_strategy_instance = GoogleAdsSearchads360V0ResourcesBiddingStrategy.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesBiddingStrategy.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_bidding_strategy_dict = google_ads_searchads360_v0_resources_bidding_strategy_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesBiddingStrategy from a dict
google_ads_searchads360_v0_resources_bidding_strategy_from_dict = GoogleAdsSearchads360V0ResourcesBiddingStrategy.from_dict(google_ads_searchads360_v0_resources_bidding_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



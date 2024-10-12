# DealTerms


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branding_type** | **str** | Visibility of the URL in bid requests. | [optional] 
**cross_listed_external_deal_id_type** | **str** | Indicates that this ExternalDealId exists under at least two different AdxInventoryDeals. Currently, the only case that the same ExternalDealId will exist is programmatic cross sell case. | [optional] 
**description** | **str** | Description for the proposed terms of the deal. | [optional] 
**estimated_gross_spend** | [**Price**](Price.md) |  | [optional] 
**estimated_impressions_per_day** | **str** | Non-binding estimate of the impressions served per day Can be set by buyer or seller. | [optional] 
**guaranteed_fixed_price_terms** | [**DealTermsGuaranteedFixedPriceTerms**](DealTermsGuaranteedFixedPriceTerms.md) |  | [optional] 
**non_guaranteed_auction_terms** | [**DealTermsNonGuaranteedAuctionTerms**](DealTermsNonGuaranteedAuctionTerms.md) |  | [optional] 
**non_guaranteed_fixed_price_terms** | [**DealTermsNonGuaranteedFixedPriceTerms**](DealTermsNonGuaranteedFixedPriceTerms.md) |  | [optional] 
**rubicon_non_guaranteed_terms** | [**DealTermsRubiconNonGuaranteedTerms**](DealTermsRubiconNonGuaranteedTerms.md) |  | [optional] 
**seller_time_zone** | **str** | For deals with Cost Per Day billing, defines the timezone used to mark the boundaries of a day (buyer-readonly) | [optional] 

## Example

```python
from openapi_client.models.deal_terms import DealTerms

# TODO update the JSON string below
json = "{}"
# create an instance of DealTerms from a JSON string
deal_terms_instance = DealTerms.from_json(json)
# print the JSON string representation of the object
print(DealTerms.to_json())

# convert the object into a dict
deal_terms_dict = deal_terms_instance.to_dict()
# create an instance of DealTerms from a dict
deal_terms_from_dict = DealTerms.from_dict(deal_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



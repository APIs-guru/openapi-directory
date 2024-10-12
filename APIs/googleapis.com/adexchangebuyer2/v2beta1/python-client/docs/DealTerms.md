# DealTerms

The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branding_type** | **str** | Visibility of the URL in bid requests. (default: BRANDED) | [optional] 
**description** | **str** | Publisher provided description for the terms. | [optional] 
**estimated_gross_spend** | [**Price**](Price.md) |  | [optional] 
**estimated_impressions_per_day** | **str** | Non-binding estimate of the impressions served per day. Can be set by buyer or seller. | [optional] 
**guaranteed_fixed_price_terms** | [**GuaranteedFixedPriceTerms**](GuaranteedFixedPriceTerms.md) |  | [optional] 
**non_guaranteed_auction_terms** | [**NonGuaranteedAuctionTerms**](NonGuaranteedAuctionTerms.md) |  | [optional] 
**non_guaranteed_fixed_price_terms** | [**NonGuaranteedFixedPriceTerms**](NonGuaranteedFixedPriceTerms.md) |  | [optional] 
**seller_time_zone** | **str** | The time zone name. For deals with Cost Per Day billing, defines the time zone used to mark the boundaries of a day. It should be an IANA TZ name, such as \&quot;America/Los_Angeles\&quot;. For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. | [optional] 

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



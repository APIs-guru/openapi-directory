# DealTermsNonGuaranteedAuctionTerms


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_optimize_private_auction** | **bool** | True if open auction buyers are allowed to compete with invited buyers in this private auction (buyer-readonly). | [optional] 
**reserve_price_per_buyers** | [**List[PricePerBuyer]**](PricePerBuyer.md) | Reserve price for the specified buyer. | [optional] 

## Example

```python
from openapi_client.models.deal_terms_non_guaranteed_auction_terms import DealTermsNonGuaranteedAuctionTerms

# TODO update the JSON string below
json = "{}"
# create an instance of DealTermsNonGuaranteedAuctionTerms from a JSON string
deal_terms_non_guaranteed_auction_terms_instance = DealTermsNonGuaranteedAuctionTerms.from_json(json)
# print the JSON string representation of the object
print(DealTermsNonGuaranteedAuctionTerms.to_json())

# convert the object into a dict
deal_terms_non_guaranteed_auction_terms_dict = deal_terms_non_guaranteed_auction_terms_instance.to_dict()
# create an instance of DealTermsNonGuaranteedAuctionTerms from a dict
deal_terms_non_guaranteed_auction_terms_from_dict = DealTermsNonGuaranteedAuctionTerms.from_dict(deal_terms_non_guaranteed_auction_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



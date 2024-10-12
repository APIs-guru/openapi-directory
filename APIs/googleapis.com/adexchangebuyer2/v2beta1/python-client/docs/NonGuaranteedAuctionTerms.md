# NonGuaranteedAuctionTerms

Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_optimize_private_auction** | **bool** | True if open auction buyers are allowed to compete with invited buyers in this private auction. | [optional] 
**reserve_prices_per_buyer** | [**List[PricePerBuyer]**](PricePerBuyer.md) | Reserve price for the specified buyer. | [optional] 

## Example

```python
from openapi_client.models.non_guaranteed_auction_terms import NonGuaranteedAuctionTerms

# TODO update the JSON string below
json = "{}"
# create an instance of NonGuaranteedAuctionTerms from a JSON string
non_guaranteed_auction_terms_instance = NonGuaranteedAuctionTerms.from_json(json)
# print the JSON string representation of the object
print(NonGuaranteedAuctionTerms.to_json())

# convert the object into a dict
non_guaranteed_auction_terms_dict = non_guaranteed_auction_terms_instance.to_dict()
# create an instance of NonGuaranteedAuctionTerms from a dict
non_guaranteed_auction_terms_from_dict = NonGuaranteedAuctionTerms.from_dict(non_guaranteed_auction_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



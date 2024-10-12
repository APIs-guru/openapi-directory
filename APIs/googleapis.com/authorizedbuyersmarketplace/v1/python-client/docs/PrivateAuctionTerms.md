# PrivateAuctionTerms

Pricing terms for Private Auctions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**floor_price** | [**Price**](Price.md) |  | [optional] 
**open_auction_allowed** | **bool** | Output only. True if open auction buyers are allowed to compete with invited buyers in this private auction. | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_auction_terms import PrivateAuctionTerms

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateAuctionTerms from a JSON string
private_auction_terms_instance = PrivateAuctionTerms.from_json(json)
# print the JSON string representation of the object
print(PrivateAuctionTerms.to_json())

# convert the object into a dict
private_auction_terms_dict = private_auction_terms_instance.to_dict()
# create an instance of PrivateAuctionTerms from a dict
private_auction_terms_from_dict = PrivateAuctionTerms.from_dict(private_auction_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



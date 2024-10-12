# MarketplaceDealParty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer** | [**Buyer**](Buyer.md) |  | [optional] 
**seller** | [**Seller**](Seller.md) |  | [optional] 

## Example

```python
from openapi_client.models.marketplace_deal_party import MarketplaceDealParty

# TODO update the JSON string below
json = "{}"
# create an instance of MarketplaceDealParty from a JSON string
marketplace_deal_party_instance = MarketplaceDealParty.from_json(json)
# print the JSON string representation of the object
print(MarketplaceDealParty.to_json())

# convert the object into a dict
marketplace_deal_party_dict = marketplace_deal_party_instance.to_dict()
# create an instance of MarketplaceDealParty from a dict
marketplace_deal_party_from_dict = MarketplaceDealParty.from_dict(marketplace_deal_party_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



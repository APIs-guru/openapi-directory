# PricePerBuyer

Used to specify pricing rules for buyers/advertisers. Each PricePerBuyer in a product can become 0 or 1 deals. To check if there is a PricePerBuyer for a particular buyer or buyer/advertiser pair, we look for the most specific matching rule - we first look for a rule matching the buyer and advertiser, next a rule with the buyer but an empty advertiser list, and otherwise look for a matching rule where no buyer is set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_ids** | **List[str]** | The list of advertisers for this price when associated with this buyer. If empty, all advertisers with this buyer pay this price. | [optional] 
**buyer** | [**Buyer**](Buyer.md) |  | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 

## Example

```python
from openapi_client.models.price_per_buyer import PricePerBuyer

# TODO update the JSON string below
json = "{}"
# create an instance of PricePerBuyer from a JSON string
price_per_buyer_instance = PricePerBuyer.from_json(json)
# print the JSON string representation of the object
print(PricePerBuyer.to_json())

# convert the object into a dict
price_per_buyer_dict = price_per_buyer_instance.to_dict()
# create an instance of PricePerBuyer from a dict
price_per_buyer_from_dict = PricePerBuyer.from_dict(price_per_buyer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DirectDeal

The configuration data for an Ad Exchange direct deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **int** | The account id of the buyer this deal is for. | [optional] 
**advertiser** | **str** | The name of the advertiser this deal is for. | [optional] 
**allows_alcohol** | **bool** | Whether the publisher for this deal is eligible for alcohol ads. | [optional] 
**buyer_account_id** | **str** | The account id that this deal was negotiated for. It is either the buyer or the client that this deal was negotiated on behalf of. | [optional] 
**currency_code** | **str** | The currency code that applies to the fixed_cpm value. If not set then assumed to be USD. | [optional] 
**deal_tier** | **str** | The deal type such as programmatic reservation or fixed price and so on. | [optional] 
**end_time** | **str** | End time for when this deal stops being active. If not set then this deal is valid until manually disabled by the publisher. In seconds since the epoch. | [optional] 
**fixed_cpm** | **str** | The fixed price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the fixed price tier of buying (highest priority, pay exactly the configured fixed price). | [optional] 
**id** | **str** | Deal id. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#directDeal']
**name** | **str** | Deal name. | [optional] 
**private_exchange_min_cpm** | **str** | The minimum price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the private exchange tier of buying (below fixed price priority, run as a second price auction). | [optional] 
**publisher_blocks_overriden** | **bool** | If true, the publisher has opted to have their blocks ignored when a creative is bid with for this deal. | [optional] 
**seller_network** | **str** | The name of the publisher offering this direct deal. | [optional] 
**start_time** | **str** | Start time for when this deal becomes active. If not set then this deal is active immediately upon creation. In seconds since the epoch. | [optional] 

## Example

```python
from openapi_client.models.direct_deal import DirectDeal

# TODO update the JSON string below
json = "{}"
# create an instance of DirectDeal from a JSON string
direct_deal_instance = DirectDeal.from_json(json)
# print the JSON string representation of the object
print(DirectDeal.to_json())

# convert the object into a dict
direct_deal_dict = direct_deal_instance.to_dict()
# create an instance of DirectDeal from a dict
direct_deal_from_dict = DirectDeal.from_dict(direct_deal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



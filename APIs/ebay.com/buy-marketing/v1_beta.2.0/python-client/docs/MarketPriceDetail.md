# MarketPriceDetail

The type that defines the fields for details about the product, such as condition and estimated start price.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition_group** | **str** | The name for the condition of the product. For example: NEW | [optional] 
**condition_ids** | **List[str]** | An array of condition identifiers for the product. | [optional] 
**estimated_start_price** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.market_price_detail import MarketPriceDetail

# TODO update the JSON string below
json = "{}"
# create an instance of MarketPriceDetail from a JSON string
market_price_detail_instance = MarketPriceDetail.from_json(json)
# print the JSON string representation of the object
print(MarketPriceDetail.to_json())

# convert the object into a dict
market_price_detail_dict = market_price_detail_instance.to_dict()
# create an instance of MarketPriceDetail from a dict
market_price_detail_from_dict = MarketPriceDetail.from_dict(market_price_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



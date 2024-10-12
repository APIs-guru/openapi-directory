# ItemPriceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[UpdatePrice200ResponseErrorsInner]**](UpdatePrice200ResponseErrorsInner.md) |  | [optional] 
**mart** | **str** | Marketplace name. Example: Walmart-US | [optional] 
**message** | **str** | A message of acknowledgement for a price update | [optional] 
**sku** | **str** | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. | [optional] 
**status_code** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.item_price_response import ItemPriceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ItemPriceResponse from a JSON string
item_price_response_instance = ItemPriceResponse.from_json(json)
# print the JSON string representation of the object
print(ItemPriceResponse.to_json())

# convert the object into a dict
item_price_response_dict = item_price_response_instance.to_dict()
# create an instance of ItemPriceResponse from a dict
item_price_response_from_dict = ItemPriceResponse.from_dict(item_price_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



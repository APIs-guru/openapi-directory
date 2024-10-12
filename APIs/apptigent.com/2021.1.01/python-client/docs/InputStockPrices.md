# InputStockPrices


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** | Date (yyyy-MM-dd, leave empty for latest) | [optional] 
**exchange** | **str** | Stock exchange | [optional] 
**symbols** | **str** | Stock ticker symbols (comma-separated, max 20) | 

## Example

```python
from openapi_client.models.input_stock_prices import InputStockPrices

# TODO update the JSON string below
json = "{}"
# create an instance of InputStockPrices from a JSON string
input_stock_prices_instance = InputStockPrices.from_json(json)
# print the JSON string representation of the object
print(InputStockPrices.to_json())

# convert the object into a dict
input_stock_prices_dict = input_stock_prices_instance.to_dict()
# create an instance of InputStockPrices from a dict
input_stock_prices_from_dict = InputStockPrices.from_dict(input_stock_prices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



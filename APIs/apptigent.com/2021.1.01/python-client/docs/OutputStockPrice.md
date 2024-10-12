# OutputStockPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**List[OutputStockPriceResultInner]**](OutputStockPriceResultInner.md) | Stock price information | [optional] 

## Example

```python
from openapi_client.models.output_stock_price import OutputStockPrice

# TODO update the JSON string below
json = "{}"
# create an instance of OutputStockPrice from a JSON string
output_stock_price_instance = OutputStockPrice.from_json(json)
# print the JSON string representation of the object
print(OutputStockPrice.to_json())

# convert the object into a dict
output_stock_price_dict = output_stock_price_instance.to_dict()
# create an instance of OutputStockPrice from a dict
output_stock_price_from_dict = OutputStockPrice.from_dict(output_stock_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



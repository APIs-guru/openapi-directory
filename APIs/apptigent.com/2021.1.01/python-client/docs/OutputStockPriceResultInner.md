# OutputStockPriceResultInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**close** | **float** | Close | [optional] 
**var_date** | **str** | Date | [optional] 
**exchange** | **str** | Stock exchange | [optional] 
**high** | **float** | High | [optional] 
**low** | **float** | Low | [optional] 
**open** | **float** | Open | [optional] 
**symbol** | **str** | Ticker symbol | [optional] 
**volume** | **float** | Volume | [optional] 

## Example

```python
from openapi_client.models.output_stock_price_result_inner import OutputStockPriceResultInner

# TODO update the JSON string below
json = "{}"
# create an instance of OutputStockPriceResultInner from a JSON string
output_stock_price_result_inner_instance = OutputStockPriceResultInner.from_json(json)
# print the JSON string representation of the object
print(OutputStockPriceResultInner.to_json())

# convert the object into a dict
output_stock_price_result_inner_dict = output_stock_price_result_inner_instance.to_dict()
# create an instance of OutputStockPriceResultInner from a dict
output_stock_price_result_inner_from_dict = OutputStockPriceResultInner.from_dict(output_stock_price_result_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



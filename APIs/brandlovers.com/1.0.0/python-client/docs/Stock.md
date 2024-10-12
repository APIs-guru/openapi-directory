# Stock


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cross_docking_time** | **int** | Time it will take to manufacture, prepare or setup this product. Time must be provided in seconds. For example 1 day should be informed as 86400. This time will be included in the product ETA informed to the customer | [optional] 
**quantity** | **int** | Stock available | 

## Example

```python
from openapi_client.models.stock import Stock

# TODO update the JSON string below
json = "{}"
# create an instance of Stock from a JSON string
stock_instance = Stock.from_json(json)
# print the JSON string representation of the object
print(Stock.to_json())

# convert the object into a dict
stock_dict = stock_instance.to_dict()
# create an instance of Stock from a dict
stock_from_dict = Stock.from_dict(stock_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



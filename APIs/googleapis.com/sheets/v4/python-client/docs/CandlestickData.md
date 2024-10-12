# CandlestickData

The Candlestick chart data, each containing the low, open, close, and high values for a series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**close_series** | [**CandlestickSeries**](CandlestickSeries.md) |  | [optional] 
**high_series** | [**CandlestickSeries**](CandlestickSeries.md) |  | [optional] 
**low_series** | [**CandlestickSeries**](CandlestickSeries.md) |  | [optional] 
**open_series** | [**CandlestickSeries**](CandlestickSeries.md) |  | [optional] 

## Example

```python
from openapi_client.models.candlestick_data import CandlestickData

# TODO update the JSON string below
json = "{}"
# create an instance of CandlestickData from a JSON string
candlestick_data_instance = CandlestickData.from_json(json)
# print the JSON string representation of the object
print(CandlestickData.to_json())

# convert the object into a dict
candlestick_data_dict = candlestick_data_instance.to_dict()
# create an instance of CandlestickData from a dict
candlestick_data_from_dict = CandlestickData.from_dict(candlestick_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



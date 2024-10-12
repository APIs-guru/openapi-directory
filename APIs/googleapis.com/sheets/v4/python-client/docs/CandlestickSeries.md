# CandlestickSeries

The series of a CandlestickData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ChartData**](ChartData.md) |  | [optional] 

## Example

```python
from openapi_client.models.candlestick_series import CandlestickSeries

# TODO update the JSON string below
json = "{}"
# create an instance of CandlestickSeries from a JSON string
candlestick_series_instance = CandlestickSeries.from_json(json)
# print the JSON string representation of the object
print(CandlestickSeries.to_json())

# convert the object into a dict
candlestick_series_dict = candlestick_series_instance.to_dict()
# create an instance of CandlestickSeries from a dict
candlestick_series_from_dict = CandlestickSeries.from_dict(candlestick_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



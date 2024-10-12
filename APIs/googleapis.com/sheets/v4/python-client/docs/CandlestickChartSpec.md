# CandlestickChartSpec

A candlestick chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CandlestickData]**](CandlestickData.md) | The Candlestick chart data. Only one CandlestickData is supported. | [optional] 
**domain** | [**CandlestickDomain**](CandlestickDomain.md) |  | [optional] 

## Example

```python
from openapi_client.models.candlestick_chart_spec import CandlestickChartSpec

# TODO update the JSON string below
json = "{}"
# create an instance of CandlestickChartSpec from a JSON string
candlestick_chart_spec_instance = CandlestickChartSpec.from_json(json)
# print the JSON string representation of the object
print(CandlestickChartSpec.to_json())

# convert the object into a dict
candlestick_chart_spec_dict = candlestick_chart_spec_instance.to_dict()
# create an instance of CandlestickChartSpec from a dict
candlestick_chart_spec_from_dict = CandlestickChartSpec.from_dict(candlestick_chart_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



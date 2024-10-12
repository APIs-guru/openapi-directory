# HistogramSeries

A histogram series containing the series color and data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bar_color** | [**Color**](Color.md) |  | [optional] 
**bar_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**data** | [**ChartData**](ChartData.md) |  | [optional] 

## Example

```python
from openapi_client.models.histogram_series import HistogramSeries

# TODO update the JSON string below
json = "{}"
# create an instance of HistogramSeries from a JSON string
histogram_series_instance = HistogramSeries.from_json(json)
# print the JSON string representation of the object
print(HistogramSeries.to_json())

# convert the object into a dict
histogram_series_dict = histogram_series_instance.to_dict()
# create an instance of HistogramSeries from a dict
histogram_series_from_dict = HistogramSeries.from_dict(histogram_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



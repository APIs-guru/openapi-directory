# BasicChartSeries

A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the \"Open Price\", \"High Price\", \"Low Price\" and \"Close Price\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**Color**](Color.md) |  | [optional] 
**color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**data_label** | [**DataLabel**](DataLabel.md) |  | [optional] 
**line_style** | [**LineStyle**](LineStyle.md) |  | [optional] 
**point_style** | [**PointStyle**](PointStyle.md) |  | [optional] 
**series** | [**ChartData**](ChartData.md) |  | [optional] 
**style_overrides** | [**List[BasicSeriesDataPointStyleOverride]**](BasicSeriesDataPointStyleOverride.md) | Style override settings for series data points. | [optional] 
**target_axis** | **str** | The minor axis that will specify the range of values for this series. For example, if charting stocks over time, the \&quot;Volume\&quot; series may want to be pinned to the right with the prices pinned to the left, because the scale of trading volume is different than the scale of prices. It is an error to specify an axis that isn&#39;t a valid minor axis for the chart&#39;s type. | [optional] 
**type** | **str** | The type of this series. Valid only if the chartType is COMBO. Different types will change the way the series is visualized. Only LINE, AREA, and COLUMN are supported. | [optional] 

## Example

```python
from openapi_client.models.basic_chart_series import BasicChartSeries

# TODO update the JSON string below
json = "{}"
# create an instance of BasicChartSeries from a JSON string
basic_chart_series_instance = BasicChartSeries.from_json(json)
# print the JSON string representation of the object
print(BasicChartSeries.to_json())

# convert the object into a dict
basic_chart_series_dict = basic_chart_series_instance.to_dict()
# create an instance of BasicChartSeries from a dict
basic_chart_series_from_dict = BasicChartSeries.from_dict(basic_chart_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



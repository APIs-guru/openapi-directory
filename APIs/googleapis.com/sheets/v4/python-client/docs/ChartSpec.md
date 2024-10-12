# ChartSpec

The specifications of a chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt_text** | **str** | The alternative text that describes the chart. This is often used for accessibility. | [optional] 
**background_color** | [**Color**](Color.md) |  | [optional] 
**background_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**basic_chart** | [**BasicChartSpec**](BasicChartSpec.md) |  | [optional] 
**bubble_chart** | [**BubbleChartSpec**](BubbleChartSpec.md) |  | [optional] 
**candlestick_chart** | [**CandlestickChartSpec**](CandlestickChartSpec.md) |  | [optional] 
**data_source_chart_properties** | [**DataSourceChartProperties**](DataSourceChartProperties.md) |  | [optional] 
**filter_specs** | [**List[FilterSpec]**](FilterSpec.md) | The filters applied to the source data of the chart. Only supported for data source charts. | [optional] 
**font_name** | **str** | The name of the font to use by default for all chart text (e.g. title, axis labels, legend). If a font is specified for a specific part of the chart it will override this font name. | [optional] 
**hidden_dimension_strategy** | **str** | Determines how the charts will use hidden rows or columns. | [optional] 
**histogram_chart** | [**HistogramChartSpec**](HistogramChartSpec.md) |  | [optional] 
**maximized** | **bool** | True to make a chart fill the entire space in which it&#39;s rendered with minimum padding. False to use the default padding. (Not applicable to Geo and Org charts.) | [optional] 
**org_chart** | [**OrgChartSpec**](OrgChartSpec.md) |  | [optional] 
**pie_chart** | [**PieChartSpec**](PieChartSpec.md) |  | [optional] 
**scorecard_chart** | [**ScorecardChartSpec**](ScorecardChartSpec.md) |  | [optional] 
**sort_specs** | [**List[SortSpec]**](SortSpec.md) | The order to sort the chart data by. Only a single sort spec is supported. Only supported for data source charts. | [optional] 
**subtitle** | **str** | The subtitle of the chart. | [optional] 
**subtitle_text_format** | [**TextFormat**](TextFormat.md) |  | [optional] 
**subtitle_text_position** | [**TextPosition**](TextPosition.md) |  | [optional] 
**title** | **str** | The title of the chart. | [optional] 
**title_text_format** | [**TextFormat**](TextFormat.md) |  | [optional] 
**title_text_position** | [**TextPosition**](TextPosition.md) |  | [optional] 
**treemap_chart** | [**TreemapChartSpec**](TreemapChartSpec.md) |  | [optional] 
**waterfall_chart** | [**WaterfallChartSpec**](WaterfallChartSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.chart_spec import ChartSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ChartSpec from a JSON string
chart_spec_instance = ChartSpec.from_json(json)
# print the JSON string representation of the object
print(ChartSpec.to_json())

# convert the object into a dict
chart_spec_dict = chart_spec_instance.to_dict()
# create an instance of ChartSpec from a dict
chart_spec_from_dict = ChartSpec.from_dict(chart_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



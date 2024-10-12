# WaterfallChartColumnStyle

Styles for a waterfall chart column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**Color**](Color.md) |  | [optional] 
**color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**label** | **str** | The label of the column&#39;s legend. | [optional] 

## Example

```python
from openapi_client.models.waterfall_chart_column_style import WaterfallChartColumnStyle

# TODO update the JSON string below
json = "{}"
# create an instance of WaterfallChartColumnStyle from a JSON string
waterfall_chart_column_style_instance = WaterfallChartColumnStyle.from_json(json)
# print the JSON string representation of the object
print(WaterfallChartColumnStyle.to_json())

# convert the object into a dict
waterfall_chart_column_style_dict = waterfall_chart_column_style_instance.to_dict()
# create an instance of WaterfallChartColumnStyle from a dict
waterfall_chart_column_style_from_dict = WaterfallChartColumnStyle.from_dict(waterfall_chart_column_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



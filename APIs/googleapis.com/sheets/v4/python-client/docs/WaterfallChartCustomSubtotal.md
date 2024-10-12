# WaterfallChartCustomSubtotal

A custom subtotal column for a waterfall chart series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_is_subtotal** | **bool** | True if the data point at subtotal_index is the subtotal. If false, the subtotal will be computed and appear after the data point. | [optional] 
**label** | **str** | A label for the subtotal column. | [optional] 
**subtotal_index** | **int** | The zero-based index of a data point within the series. If data_is_subtotal is true, the data point at this index is the subtotal. Otherwise, the subtotal appears after the data point with this index. A series can have multiple subtotals at arbitrary indices, but subtotals do not affect the indices of the data points. For example, if a series has three data points, their indices will always be 0, 1, and 2, regardless of how many subtotals exist on the series or what data points they are associated with. | [optional] 

## Example

```python
from openapi_client.models.waterfall_chart_custom_subtotal import WaterfallChartCustomSubtotal

# TODO update the JSON string below
json = "{}"
# create an instance of WaterfallChartCustomSubtotal from a JSON string
waterfall_chart_custom_subtotal_instance = WaterfallChartCustomSubtotal.from_json(json)
# print the JSON string representation of the object
print(WaterfallChartCustomSubtotal.to_json())

# convert the object into a dict
waterfall_chart_custom_subtotal_dict = waterfall_chart_custom_subtotal_instance.to_dict()
# create an instance of WaterfallChartCustomSubtotal from a dict
waterfall_chart_custom_subtotal_from_dict = WaterfallChartCustomSubtotal.from_dict(waterfall_chart_custom_subtotal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



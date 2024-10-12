# BasicChartAxis

An axis of the chart. A chart may not have more than one axis per axis position.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | [**TextFormat**](TextFormat.md) |  | [optional] 
**position** | **str** | The position of this axis. | [optional] 
**title** | **str** | The title of this axis. If set, this overrides any title inferred from headers of the data. | [optional] 
**title_text_position** | [**TextPosition**](TextPosition.md) |  | [optional] 
**view_window_options** | [**ChartAxisViewWindowOptions**](ChartAxisViewWindowOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.basic_chart_axis import BasicChartAxis

# TODO update the JSON string below
json = "{}"
# create an instance of BasicChartAxis from a JSON string
basic_chart_axis_instance = BasicChartAxis.from_json(json)
# print the JSON string representation of the object
print(BasicChartAxis.to_json())

# convert the object into a dict
basic_chart_axis_dict = basic_chart_axis_instance.to_dict()
# create an instance of BasicChartAxis from a dict
basic_chart_axis_from_dict = BasicChartAxis.from_dict(basic_chart_axis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



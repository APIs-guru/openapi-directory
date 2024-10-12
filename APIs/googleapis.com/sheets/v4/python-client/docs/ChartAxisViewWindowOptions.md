# ChartAxisViewWindowOptions

The options that define a \"view window\" for a chart (such as the visible values in an axis).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view_window_max** | **float** | The maximum numeric value to be shown in this view window. If unset, will automatically determine a maximum value that looks good for the data. | [optional] 
**view_window_min** | **float** | The minimum numeric value to be shown in this view window. If unset, will automatically determine a minimum value that looks good for the data. | [optional] 
**view_window_mode** | **str** | The view window&#39;s mode. | [optional] 

## Example

```python
from openapi_client.models.chart_axis_view_window_options import ChartAxisViewWindowOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ChartAxisViewWindowOptions from a JSON string
chart_axis_view_window_options_instance = ChartAxisViewWindowOptions.from_json(json)
# print the JSON string representation of the object
print(ChartAxisViewWindowOptions.to_json())

# convert the object into a dict
chart_axis_view_window_options_dict = chart_axis_view_window_options_instance.to_dict()
# create an instance of ChartAxisViewWindowOptions from a dict
chart_axis_view_window_options_from_dict = ChartAxisViewWindowOptions.from_dict(chart_axis_view_window_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



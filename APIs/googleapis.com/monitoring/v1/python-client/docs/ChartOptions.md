# ChartOptions

Options to control visual rendering of a chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_horizontal** | **bool** | Preview: Configures whether the charted values are shown on the horizontal or vertical axis. By default, values are represented the vertical axis. This is a preview feature and may be subject to change before final release. | [optional] 
**mode** | **str** | The chart mode. | [optional] 

## Example

```python
from openapi_client.models.chart_options import ChartOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ChartOptions from a JSON string
chart_options_instance = ChartOptions.from_json(json)
# print the JSON string representation of the object
print(ChartOptions.to_json())

# convert the object into a dict
chart_options_dict = chart_options_instance.to_dict()
# create an instance of ChartOptions from a dict
chart_options_from_dict = ChartOptions.from_dict(chart_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



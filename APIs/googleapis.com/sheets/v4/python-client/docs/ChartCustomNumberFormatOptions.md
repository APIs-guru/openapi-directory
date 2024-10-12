# ChartCustomNumberFormatOptions

Custom number formatting options for chart attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prefix** | **str** | Custom prefix to be prepended to the chart attribute. This field is optional. | [optional] 
**suffix** | **str** | Custom suffix to be appended to the chart attribute. This field is optional. | [optional] 

## Example

```python
from openapi_client.models.chart_custom_number_format_options import ChartCustomNumberFormatOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ChartCustomNumberFormatOptions from a JSON string
chart_custom_number_format_options_instance = ChartCustomNumberFormatOptions.from_json(json)
# print the JSON string representation of the object
print(ChartCustomNumberFormatOptions.to_json())

# convert the object into a dict
chart_custom_number_format_options_dict = chart_custom_number_format_options_instance.to_dict()
# create an instance of ChartCustomNumberFormatOptions from a dict
chart_custom_number_format_options_from_dict = ChartCustomNumberFormatOptions.from_dict(chart_custom_number_format_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BasicSeriesDataPointStyleOverride

Style override settings for a single series data point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**Color**](Color.md) |  | [optional] 
**color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**index** | **int** | The zero-based index of the series data point. | [optional] 
**point_style** | [**PointStyle**](PointStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.basic_series_data_point_style_override import BasicSeriesDataPointStyleOverride

# TODO update the JSON string below
json = "{}"
# create an instance of BasicSeriesDataPointStyleOverride from a JSON string
basic_series_data_point_style_override_instance = BasicSeriesDataPointStyleOverride.from_json(json)
# print the JSON string representation of the object
print(BasicSeriesDataPointStyleOverride.to_json())

# convert the object into a dict
basic_series_data_point_style_override_dict = basic_series_data_point_style_override_instance.to_dict()
# create an instance of BasicSeriesDataPointStyleOverride from a dict
basic_series_data_point_style_override_from_dict = BasicSeriesDataPointStyleOverride.from_dict(basic_series_data_point_style_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



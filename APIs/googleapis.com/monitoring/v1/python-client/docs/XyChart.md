# XyChart

A chart that displays data on a 2D (X and Y axes) plane.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart_options** | [**ChartOptions**](ChartOptions.md) |  | [optional] 
**data_sets** | [**List[DataSet]**](DataSet.md) | Required. The data displayed in this chart. | [optional] 
**thresholds** | [**List[Threshold]**](Threshold.md) | Threshold lines drawn horizontally across the chart. | [optional] 
**timeshift_duration** | **str** | The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type. | [optional] 
**x_axis** | [**Axis**](Axis.md) |  | [optional] 
**y2_axis** | [**Axis**](Axis.md) |  | [optional] 
**y_axis** | [**Axis**](Axis.md) |  | [optional] 

## Example

```python
from openapi_client.models.xy_chart import XyChart

# TODO update the JSON string below
json = "{}"
# create an instance of XyChart from a JSON string
xy_chart_instance = XyChart.from_json(json)
# print the JSON string representation of the object
print(XyChart.to_json())

# convert the object into a dict
xy_chart_dict = xy_chart_instance.to_dict()
# create an instance of XyChart from a dict
xy_chart_from_dict = XyChart.from_dict(xy_chart_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



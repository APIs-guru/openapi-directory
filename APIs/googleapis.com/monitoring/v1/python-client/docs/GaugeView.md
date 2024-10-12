# GaugeView

A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower_bound** | **float** | The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this. | [optional] 
**upper_bound** | **float** | The upper bound for this gauge chart. The value of the chart should always be less than or equal to this. | [optional] 

## Example

```python
from openapi_client.models.gauge_view import GaugeView

# TODO update the JSON string below
json = "{}"
# create an instance of GaugeView from a JSON string
gauge_view_instance = GaugeView.from_json(json)
# print the JSON string representation of the object
print(GaugeView.to_json())

# convert the object into a dict
gauge_view_dict = gauge_view_instance.to_dict()
# create an instance of GaugeView from a dict
gauge_view_from_dict = GaugeView.from_dict(gauge_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



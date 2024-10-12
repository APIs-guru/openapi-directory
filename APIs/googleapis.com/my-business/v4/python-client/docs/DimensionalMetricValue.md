# DimensionalMetricValue

A value for a single metric with a given time dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_option** | **str** | The option that requested this dimensional value. | [optional] 
**time_dimension** | [**TimeDimension**](TimeDimension.md) |  | [optional] 
**value** | **str** | The value. If no value is set, then the requested data is missing. | [optional] 

## Example

```python
from openapi_client.models.dimensional_metric_value import DimensionalMetricValue

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionalMetricValue from a JSON string
dimensional_metric_value_instance = DimensionalMetricValue.from_json(json)
# print the JSON string representation of the object
print(DimensionalMetricValue.to_json())

# convert the object into a dict
dimensional_metric_value_dict = dimensional_metric_value_instance.to_dict()
# create an instance of DimensionalMetricValue from a dict
dimensional_metric_value_from_dict = DimensionalMetricValue.from_dict(dimensional_metric_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



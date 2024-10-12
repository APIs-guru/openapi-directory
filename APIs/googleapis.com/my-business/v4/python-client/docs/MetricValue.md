# MetricValue

A value for a single Metric from a starting time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensional_values** | [**List[DimensionalMetricValue]**](DimensionalMetricValue.md) | Dimensional values for this metric. | [optional] 
**metric** | **str** | The metric for which the value applies. | [optional] 
**total_value** | [**DimensionalMetricValue**](DimensionalMetricValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.metric_value import MetricValue

# TODO update the JSON string below
json = "{}"
# create an instance of MetricValue from a JSON string
metric_value_instance = MetricValue.from_json(json)
# print the JSON string representation of the object
print(MetricValue.to_json())

# convert the object into a dict
metric_value_dict = metric_value_instance.to_dict()
# create an instance of MetricValue from a dict
metric_value_from_dict = MetricValue.from_dict(metric_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



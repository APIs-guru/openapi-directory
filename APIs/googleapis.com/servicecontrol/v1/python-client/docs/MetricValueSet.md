# MetricValueSet

Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_name** | **str** | The metric name defined in the service configuration. | [optional] 
**metric_values** | [**List[MetricValue]**](MetricValue.md) | The values in this metric. | [optional] 

## Example

```python
from openapi_client.models.metric_value_set import MetricValueSet

# TODO update the JSON string below
json = "{}"
# create an instance of MetricValueSet from a JSON string
metric_value_set_instance = MetricValueSet.from_json(json)
# print the JSON string representation of the object
print(MetricValueSet.to_json())

# convert the object into a dict
metric_value_set_dict = metric_value_set_instance.to_dict()
# create an instance of MetricValueSet from a dict
metric_value_set_from_dict = MetricValueSet.from_dict(metric_value_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



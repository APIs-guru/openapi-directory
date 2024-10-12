# AutoScalingMetric

Describes the metric that is used for triggering auto scaling operation. Derived classes will describe resources or metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**AutoScalingMetricKind**](AutoScalingMetricKind.md) |  | 

## Example

```python
from openapi_client.models.auto_scaling_metric import AutoScalingMetric

# TODO update the JSON string below
json = "{}"
# create an instance of AutoScalingMetric from a JSON string
auto_scaling_metric_instance = AutoScalingMetric.from_json(json)
# print the JSON string representation of the object
print(AutoScalingMetric.to_json())

# convert the object into a dict
auto_scaling_metric_dict = auto_scaling_metric_instance.to_dict()
# create an instance of AutoScalingMetric from a dict
auto_scaling_metric_from_dict = AutoScalingMetric.from_dict(auto_scaling_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



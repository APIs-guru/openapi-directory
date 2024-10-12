# AutoScalingResourceMetric

Describes the resource that is used for triggering auto scaling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**AutoScalingResourceMetricName**](AutoScalingResourceMetricName.md) |  | 

## Example

```python
from openapi_client.models.auto_scaling_resource_metric import AutoScalingResourceMetric

# TODO update the JSON string below
json = "{}"
# create an instance of AutoScalingResourceMetric from a JSON string
auto_scaling_resource_metric_instance = AutoScalingResourceMetric.from_json(json)
# print the JSON string representation of the object
print(AutoScalingResourceMetric.to_json())

# convert the object into a dict
auto_scaling_resource_metric_dict = auto_scaling_resource_metric_instance.to_dict()
# create an instance of AutoScalingResourceMetric from a dict
auto_scaling_resource_metric_from_dict = AutoScalingResourceMetric.from_dict(auto_scaling_resource_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



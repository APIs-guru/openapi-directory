# CustomMetric

Allows autoscaling based on Stackdriver metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Allows filtering on the metric&#39;s fields. | [optional] 
**metric_name** | **str** | The name of the metric. | [optional] 
**single_instance_assignment** | **float** | May be used instead of target_utilization when an instance can handle a specific amount of work/resources and the metric value is equal to the current amount of work remaining. The autoscaler will try to keep the number of instances equal to the metric value divided by single_instance_assignment. | [optional] 
**target_type** | **str** | The type of the metric. Must be a string representing a Stackdriver metric type e.g. GAGUE, DELTA_PER_SECOND, etc. | [optional] 
**target_utilization** | **float** | The target value for the metric. | [optional] 

## Example

```python
from openapi_client.models.custom_metric import CustomMetric

# TODO update the JSON string below
json = "{}"
# create an instance of CustomMetric from a JSON string
custom_metric_instance = CustomMetric.from_json(json)
# print the JSON string representation of the object
print(CustomMetric.to_json())

# convert the object into a dict
custom_metric_dict = custom_metric_instance.to_dict()
# create an instance of CustomMetric from a dict
custom_metric_from_dict = CustomMetric.from_dict(custom_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



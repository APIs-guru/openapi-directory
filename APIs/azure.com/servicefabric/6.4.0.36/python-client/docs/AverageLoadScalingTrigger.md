# AverageLoadScalingTrigger

Describes the average load trigger used for auto scaling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower_load_threshold** | **float** | Lower load threshold (if average load is below this threshold, service will scale down). | 
**metric** | [**AutoScalingMetric**](AutoScalingMetric.md) |  | 
**scale_interval_in_seconds** | **int** | Scale interval that indicates how often will this trigger be checked. | 
**upper_load_threshold** | **float** | Upper load threshold (if average load is above this threshold, service will scale up). | 

## Example

```python
from openapi_client.models.average_load_scaling_trigger import AverageLoadScalingTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of AverageLoadScalingTrigger from a JSON string
average_load_scaling_trigger_instance = AverageLoadScalingTrigger.from_json(json)
# print the JSON string representation of the object
print(AverageLoadScalingTrigger.to_json())

# convert the object into a dict
average_load_scaling_trigger_dict = average_load_scaling_trigger_instance.to_dict()
# create an instance of AverageLoadScalingTrigger from a dict
average_load_scaling_trigger_from_dict = AverageLoadScalingTrigger.from_dict(average_load_scaling_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



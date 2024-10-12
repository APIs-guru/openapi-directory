# AutoscalingTargets

The autoscaling targets for an instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high_priority_cpu_utilization_percent** | **int** | Required. The target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance. This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive. | [optional] 
**storage_utilization_percent** | **int** | Required. The target storage utilization percentage that the autoscaler should be trying to achieve for the instance. This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 99] inclusive. | [optional] 

## Example

```python
from openapi_client.models.autoscaling_targets import AutoscalingTargets

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscalingTargets from a JSON string
autoscaling_targets_instance = AutoscalingTargets.from_json(json)
# print the JSON string representation of the object
print(AutoscalingTargets.to_json())

# convert the object into a dict
autoscaling_targets_dict = autoscaling_targets_instance.to_dict()
# create an instance of AutoscalingTargets from a dict
autoscaling_targets_from_dict = AutoscalingTargets.from_dict(autoscaling_targets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



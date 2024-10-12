# AutoscalingTargets

The Autoscaling targets for a Cluster. These determine the recommended nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_utilization_percent** | **int** | The cpu utilization that the Autoscaler should be trying to achieve. This number is on a scale from 0 (no utilization) to 100 (total utilization), and is limited between 10 and 80, otherwise it will return INVALID_ARGUMENT error. | [optional] 
**storage_utilization_gib_per_node** | **int** | The storage utilization that the Autoscaler should be trying to achieve. This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16TiB) for an HDD cluster, otherwise it will return INVALID_ARGUMENT error. If this value is set to 0, it will be treated as if it were set to the default value: 2560 for SSD, 8192 for HDD. | [optional] 

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



# AveragePartitionLoadScalingTrigger

Represents a scaling trigger related to an average load of a metric/resource of a partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower_load_threshold** | **float** | The lower limit of the load below which a scale in operation should be performed. | 
**metric_name** | **str** | The name of the metric for which usage should be tracked. | 
**scale_interval_in_seconds** | **int** | The period in seconds on which a decision is made whether to scale or not. | 
**upper_load_threshold** | **float** | The upper limit of the load beyond which a scale out operation should be performed. | 

## Example

```python
from openapi_client.models.average_partition_load_scaling_trigger import AveragePartitionLoadScalingTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of AveragePartitionLoadScalingTrigger from a JSON string
average_partition_load_scaling_trigger_instance = AveragePartitionLoadScalingTrigger.from_json(json)
# print the JSON string representation of the object
print(AveragePartitionLoadScalingTrigger.to_json())

# convert the object into a dict
average_partition_load_scaling_trigger_dict = average_partition_load_scaling_trigger_instance.to_dict()
# create an instance of AveragePartitionLoadScalingTrigger from a dict
average_partition_load_scaling_trigger_from_dict = AveragePartitionLoadScalingTrigger.from_dict(average_partition_load_scaling_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



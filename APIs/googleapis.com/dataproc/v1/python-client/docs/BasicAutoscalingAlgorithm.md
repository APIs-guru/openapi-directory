# BasicAutoscalingAlgorithm

Basic algorithm for autoscaling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cooldown_period** | **str** | Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.Bounds: 2m, 1d. Default: 2m. | [optional] 
**spark_standalone_config** | [**SparkStandaloneAutoscalingConfig**](SparkStandaloneAutoscalingConfig.md) |  | [optional] 
**yarn_config** | [**BasicYarnAutoscalingConfig**](BasicYarnAutoscalingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.basic_autoscaling_algorithm import BasicAutoscalingAlgorithm

# TODO update the JSON string below
json = "{}"
# create an instance of BasicAutoscalingAlgorithm from a JSON string
basic_autoscaling_algorithm_instance = BasicAutoscalingAlgorithm.from_json(json)
# print the JSON string representation of the object
print(BasicAutoscalingAlgorithm.to_json())

# convert the object into a dict
basic_autoscaling_algorithm_dict = basic_autoscaling_algorithm_instance.to_dict()
# create an instance of BasicAutoscalingAlgorithm from a dict
basic_autoscaling_algorithm_from_dict = BasicAutoscalingAlgorithm.from_dict(basic_autoscaling_algorithm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



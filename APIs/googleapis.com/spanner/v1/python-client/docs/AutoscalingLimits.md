# AutoscalingLimits

The autoscaling limits for the instance. Users can define the minimum and maximum compute capacity allocated to the instance, and the autoscaler will only scale within that range. Users can either use nodes or processing units to specify the limits, but should use the same unit to set both the min_limit and max_limit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_nodes** | **int** | Maximum number of nodes allocated to the instance. If set, this number should be greater than or equal to min_nodes. | [optional] 
**max_processing_units** | **int** | Maximum number of processing units allocated to the instance. If set, this number should be multiples of 1000 and be greater than or equal to min_processing_units. | [optional] 
**min_nodes** | **int** | Minimum number of nodes allocated to the instance. If set, this number should be greater than or equal to 1. | [optional] 
**min_processing_units** | **int** | Minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000. | [optional] 

## Example

```python
from openapi_client.models.autoscaling_limits import AutoscalingLimits

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscalingLimits from a JSON string
autoscaling_limits_instance = AutoscalingLimits.from_json(json)
# print the JSON string representation of the object
print(AutoscalingLimits.to_json())

# convert the object into a dict
autoscaling_limits_dict = autoscaling_limits_instance.to_dict()
# create an instance of AutoscalingLimits from a dict
autoscaling_limits_from_dict = AutoscalingLimits.from_dict(autoscaling_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



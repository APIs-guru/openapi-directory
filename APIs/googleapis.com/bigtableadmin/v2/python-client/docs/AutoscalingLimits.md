# AutoscalingLimits

Limits for the number of nodes a Cluster can autoscale up/down to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_serve_nodes** | **int** | Required. Maximum number of nodes to scale up to. | [optional] 
**min_serve_nodes** | **int** | Required. Minimum number of nodes to scale down to. | [optional] 

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



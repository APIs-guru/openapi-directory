# ClusterAutoscalingConfig

Autoscaling config for a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscaling_limits** | [**AutoscalingLimits**](AutoscalingLimits.md) |  | [optional] 
**autoscaling_targets** | [**AutoscalingTargets**](AutoscalingTargets.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_autoscaling_config import ClusterAutoscalingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterAutoscalingConfig from a JSON string
cluster_autoscaling_config_instance = ClusterAutoscalingConfig.from_json(json)
# print the JSON string representation of the object
print(ClusterAutoscalingConfig.to_json())

# convert the object into a dict
cluster_autoscaling_config_dict = cluster_autoscaling_config_instance.to_dict()
# create an instance of ClusterAutoscalingConfig from a dict
cluster_autoscaling_config_from_dict = ClusterAutoscalingConfig.from_dict(cluster_autoscaling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



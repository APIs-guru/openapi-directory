# GkeNodePoolAutoscalingConfig

GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_node_count** | **int** | The maximum number of nodes in the node pool. Must be &gt;&#x3D; min_node_count, and must be &gt; 0. Note: Quota must be sufficient to scale up the cluster. | [optional] 
**min_node_count** | **int** | The minimum number of nodes in the node pool. Must be &gt;&#x3D; 0 and &lt;&#x3D; max_node_count. | [optional] 

## Example

```python
from openapi_client.models.gke_node_pool_autoscaling_config import GkeNodePoolAutoscalingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GkeNodePoolAutoscalingConfig from a JSON string
gke_node_pool_autoscaling_config_instance = GkeNodePoolAutoscalingConfig.from_json(json)
# print the JSON string representation of the object
print(GkeNodePoolAutoscalingConfig.to_json())

# convert the object into a dict
gke_node_pool_autoscaling_config_dict = gke_node_pool_autoscaling_config_instance.to_dict()
# create an instance of GkeNodePoolAutoscalingConfig from a dict
gke_node_pool_autoscaling_config_from_dict = GkeNodePoolAutoscalingConfig.from_dict(gke_node_pool_autoscaling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



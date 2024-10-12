# NodePoolAutoscaling

NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoprovisioned** | **bool** | Can this node pool be deleted automatically. | [optional] 
**enabled** | **bool** | Is autoscaling enabled for this node pool. | [optional] 
**location_policy** | **str** | Location policy used when scaling up a nodepool. | [optional] 
**max_node_count** | **int** | Maximum number of nodes for one location in the NodePool. Must be &gt;&#x3D; min_node_count. There has to be enough quota to scale up the cluster. | [optional] 
**min_node_count** | **int** | Minimum number of nodes for one location in the NodePool. Must be &gt;&#x3D; 1 and &lt;&#x3D; max_node_count. | [optional] 
**total_max_node_count** | **int** | Maximum number of nodes in the node pool. Must be greater than total_min_node_count. There has to be enough quota to scale up the cluster. The total_*_node_count fields are mutually exclusive with the *_node_count fields. | [optional] 
**total_min_node_count** | **int** | Minimum number of nodes in the node pool. Must be greater than 1 less than total_max_node_count. The total_*_node_count fields are mutually exclusive with the *_node_count fields. | [optional] 

## Example

```python
from openapi_client.models.node_pool_autoscaling import NodePoolAutoscaling

# TODO update the JSON string below
json = "{}"
# create an instance of NodePoolAutoscaling from a JSON string
node_pool_autoscaling_instance = NodePoolAutoscaling.from_json(json)
# print the JSON string representation of the object
print(NodePoolAutoscaling.to_json())

# convert the object into a dict
node_pool_autoscaling_dict = node_pool_autoscaling_instance.to_dict()
# create an instance of NodePoolAutoscaling from a dict
node_pool_autoscaling_from_dict = NodePoolAutoscaling.from_dict(node_pool_autoscaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



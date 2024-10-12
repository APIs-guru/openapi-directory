# SetNodePoolAutoscalingRequest

SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscaling** | [**NodePoolAutoscaling**](NodePoolAutoscaling.md) |  | [optional] 
**cluster_id** | **str** | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. | [optional] 
**name** | **str** | The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format &#x60;projects/*/locations/*/clusters/*/nodePools/*&#x60;. | [optional] 
**node_pool_id** | **str** | Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. | [optional] 
**project_id** | **str** | Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**zone** | **str** | Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.set_node_pool_autoscaling_request import SetNodePoolAutoscalingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetNodePoolAutoscalingRequest from a JSON string
set_node_pool_autoscaling_request_instance = SetNodePoolAutoscalingRequest.from_json(json)
# print the JSON string representation of the object
print(SetNodePoolAutoscalingRequest.to_json())

# convert the object into a dict
set_node_pool_autoscaling_request_dict = set_node_pool_autoscaling_request_instance.to_dict()
# create an instance of SetNodePoolAutoscalingRequest from a dict
set_node_pool_autoscaling_request_from_dict = SetNodePoolAutoscalingRequest.from_dict(set_node_pool_autoscaling_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



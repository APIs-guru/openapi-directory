# ClusterAutoscaling

ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoprovisioning_locations** | **List[str]** | The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool&#39;s nodes can be created by NAP. | [optional] 
**autoprovisioning_node_pool_defaults** | [**AutoprovisioningNodePoolDefaults**](AutoprovisioningNodePoolDefaults.md) |  | [optional] 
**autoscaling_profile** | **str** | Defines autoscaling behaviour. | [optional] 
**enable_node_autoprovisioning** | **bool** | Enables automatic node pool creation and deletion. | [optional] 
**resource_limits** | [**List[ResourceLimit]**](ResourceLimit.md) | Contains global constraints regarding minimum and maximum amount of resources in the cluster. | [optional] 

## Example

```python
from openapi_client.models.cluster_autoscaling import ClusterAutoscaling

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterAutoscaling from a JSON string
cluster_autoscaling_instance = ClusterAutoscaling.from_json(json)
# print the JSON string representation of the object
print(ClusterAutoscaling.to_json())

# convert the object into a dict
cluster_autoscaling_dict = cluster_autoscaling_instance.to_dict()
# create an instance of ClusterAutoscaling from a dict
cluster_autoscaling_from_dict = ClusterAutoscaling.from_dict(cluster_autoscaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



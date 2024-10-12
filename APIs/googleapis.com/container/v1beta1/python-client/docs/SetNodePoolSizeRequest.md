# SetNodePoolSizeRequest

SetNodePoolSizeRequest sets the size of a node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. | [optional] 
**name** | **str** | The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format &#x60;projects/*/locations/*/clusters/*/nodePools/*&#x60;. | [optional] 
**node_count** | **int** | Required. The desired node count for the pool. | [optional] 
**node_pool_id** | **str** | Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. | [optional] 
**project_id** | **str** | Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**zone** | **str** | Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.set_node_pool_size_request import SetNodePoolSizeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetNodePoolSizeRequest from a JSON string
set_node_pool_size_request_instance = SetNodePoolSizeRequest.from_json(json)
# print the JSON string representation of the object
print(SetNodePoolSizeRequest.to_json())

# convert the object into a dict
set_node_pool_size_request_dict = set_node_pool_size_request_instance.to_dict()
# create an instance of SetNodePoolSizeRequest from a dict
set_node_pool_size_request_from_dict = SetNodePoolSizeRequest.from_dict(set_node_pool_size_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



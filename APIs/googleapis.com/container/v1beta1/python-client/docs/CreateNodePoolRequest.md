# CreateNodePoolRequest

CreateNodePoolRequest creates a node pool for a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. | [optional] 
**node_pool** | [**NodePool**](NodePool.md) |  | [optional] 
**parent** | **str** | The parent (project, location, cluster name) where the node pool will be created. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. | [optional] 
**zone** | **str** | Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. | [optional] 

## Example

```python
from openapi_client.models.create_node_pool_request import CreateNodePoolRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNodePoolRequest from a JSON string
create_node_pool_request_instance = CreateNodePoolRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNodePoolRequest.to_json())

# convert the object into a dict
create_node_pool_request_dict = create_node_pool_request_instance.to_dict()
# create an instance of CreateNodePoolRequest from a dict
create_node_pool_request_from_dict = CreateNodePoolRequest.from_dict(create_node_pool_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GkeNodePoolTarget

GKE node pools that Dataproc workloads run on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_pool** | **str** | Required. The target GKE node pool. Format: &#39;projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}&#39; | [optional] 
**node_pool_config** | [**GkeNodePoolConfig**](GkeNodePoolConfig.md) |  | [optional] 
**roles** | **List[str]** | Required. The roles associated with the GKE node pool. | [optional] 

## Example

```python
from openapi_client.models.gke_node_pool_target import GkeNodePoolTarget

# TODO update the JSON string below
json = "{}"
# create an instance of GkeNodePoolTarget from a JSON string
gke_node_pool_target_instance = GkeNodePoolTarget.from_json(json)
# print the JSON string representation of the object
print(GkeNodePoolTarget.to_json())

# convert the object into a dict
gke_node_pool_target_dict = gke_node_pool_target_instance.to_dict()
# create an instance of GkeNodePoolTarget from a dict
gke_node_pool_target_from_dict = GkeNodePoolTarget.from_dict(gke_node_pool_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



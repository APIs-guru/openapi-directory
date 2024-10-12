# GkeNodePoolConfig

The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscaling** | [**GkeNodePoolAutoscalingConfig**](GkeNodePoolAutoscalingConfig.md) |  | [optional] 
**config** | [**GkeNodeConfig**](GkeNodeConfig.md) |  | [optional] 
**locations** | **List[str]** | Optional. The list of Compute Engine zones (https://cloud.google.com/compute/docs/zones#available) where node pool nodes associated with a Dataproc on GKE virtual cluster will be located.Note: All node pools associated with a virtual cluster must be located in the same region as the virtual cluster, and they must be located in the same zone within that region.If a location is not specified during node pool creation, Dataproc on GKE will choose the zone. | [optional] 

## Example

```python
from openapi_client.models.gke_node_pool_config import GkeNodePoolConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GkeNodePoolConfig from a JSON string
gke_node_pool_config_instance = GkeNodePoolConfig.from_json(json)
# print the JSON string representation of the object
print(GkeNodePoolConfig.to_json())

# convert the object into a dict
gke_node_pool_config_dict = gke_node_pool_config_instance.to_dict()
# create an instance of GkeNodePoolConfig from a dict
gke_node_pool_config_from_dict = GkeNodePoolConfig.from_dict(gke_node_pool_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



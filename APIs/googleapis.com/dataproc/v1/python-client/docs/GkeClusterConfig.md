# GkeClusterConfig

The cluster's GKE config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gke_cluster_target** | **str** | Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: &#39;projects/{project}/locations/{location}/clusters/{cluster_id}&#39; | [optional] 
**namespaced_gke_deployment_target** | [**NamespacedGkeDeploymentTarget**](NamespacedGkeDeploymentTarget.md) |  | [optional] 
**node_pool_target** | [**List[GkeNodePoolTarget]**](GkeNodePoolTarget.md) | Optional. GKE node pools where workloads will be scheduled. At least one node pool must be assigned the DEFAULT GkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a DEFAULT GkeNodePoolTarget. Each role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings. | [optional] 

## Example

```python
from openapi_client.models.gke_cluster_config import GkeClusterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GkeClusterConfig from a JSON string
gke_cluster_config_instance = GkeClusterConfig.from_json(json)
# print the JSON string representation of the object
print(GkeClusterConfig.to_json())

# convert the object into a dict
gke_cluster_config_dict = gke_cluster_config_instance.to_dict()
# create an instance of GkeClusterConfig from a dict
gke_cluster_config_from_dict = GkeClusterConfig.from_dict(gke_cluster_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



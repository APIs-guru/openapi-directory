# NamespacedGkeDeploymentTarget

Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_namespace** | **str** | Optional. A namespace within the GKE cluster to deploy into. | [optional] 
**target_gke_cluster** | **str** | Optional. The target GKE cluster to deploy to. Format: &#39;projects/{project}/locations/{location}/clusters/{cluster_id}&#39; | [optional] 

## Example

```python
from openapi_client.models.namespaced_gke_deployment_target import NamespacedGkeDeploymentTarget

# TODO update the JSON string below
json = "{}"
# create an instance of NamespacedGkeDeploymentTarget from a JSON string
namespaced_gke_deployment_target_instance = NamespacedGkeDeploymentTarget.from_json(json)
# print the JSON string representation of the object
print(NamespacedGkeDeploymentTarget.to_json())

# convert the object into a dict
namespaced_gke_deployment_target_dict = namespaced_gke_deployment_target_instance.to_dict()
# create an instance of NamespacedGkeDeploymentTarget from a dict
namespaced_gke_deployment_target_from_dict = NamespacedGkeDeploymentTarget.from_dict(namespaced_gke_deployment_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



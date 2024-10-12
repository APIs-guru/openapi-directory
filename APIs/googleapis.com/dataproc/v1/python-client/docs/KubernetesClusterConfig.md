# KubernetesClusterConfig

The configuration for running the Dataproc cluster on Kubernetes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gke_cluster_config** | [**GkeClusterConfig**](GkeClusterConfig.md) |  | [optional] 
**kubernetes_namespace** | **str** | Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used. | [optional] 
**kubernetes_software_config** | [**KubernetesSoftwareConfig**](KubernetesSoftwareConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.kubernetes_cluster_config import KubernetesClusterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KubernetesClusterConfig from a JSON string
kubernetes_cluster_config_instance = KubernetesClusterConfig.from_json(json)
# print the JSON string representation of the object
print(KubernetesClusterConfig.to_json())

# convert the object into a dict
kubernetes_cluster_config_dict = kubernetes_cluster_config_instance.to_dict()
# create an instance of KubernetesClusterConfig from a dict
kubernetes_cluster_config_from_dict = KubernetesClusterConfig.from_dict(kubernetes_cluster_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# KubernetesMetadata

KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kubernetes_api_server_version** | **str** | Output only. Kubernetes API server version string as reported by &#39;/version&#39;. | [optional] [readonly] 
**memory_mb** | **int** | Output only. The total memory capacity as reported by the sum of all Kubernetes nodes resources, defined in MB. | [optional] [readonly] 
**node_count** | **int** | Output only. Node count as reported by Kubernetes nodes resources. | [optional] [readonly] 
**node_provider_id** | **str** | Output only. Node providerID as reported by the first node in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE-on-GCP), the node_count will be zero and the node_provider_id will be empty. | [optional] [readonly] 
**update_time** | **str** | Output only. The time at which these details were last updated. This update_time is different from the Membership-level update_time since EndpointDetails are updated internally for API consumers. | [optional] [readonly] 
**vcpu_count** | **int** | Output only. vCPU count as reported by Kubernetes nodes resources. | [optional] [readonly] 

## Example

```python
from openapi_client.models.kubernetes_metadata import KubernetesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of KubernetesMetadata from a JSON string
kubernetes_metadata_instance = KubernetesMetadata.from_json(json)
# print the JSON string representation of the object
print(KubernetesMetadata.to_json())

# convert the object into a dict
kubernetes_metadata_dict = kubernetes_metadata_instance.to_dict()
# create an instance of KubernetesMetadata from a dict
kubernetes_metadata_from_dict = KubernetesMetadata.from_dict(kubernetes_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



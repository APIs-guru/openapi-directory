# KubernetesResource

KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connect_resources** | [**List[ResourceManifest]**](ResourceManifest.md) | Output only. The Kubernetes resources for installing the GKE Connect agent. This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask. | [optional] [readonly] 
**membership_cr_manifest** | **str** | Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly. Callers should provide the CR that is currently present in the cluster during Create or Update, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership. | [optional] 
**membership_resources** | [**List[ResourceManifest]**](ResourceManifest.md) | Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update. This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask. | [optional] [readonly] 
**resource_options** | [**ResourceOptions**](ResourceOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.kubernetes_resource import KubernetesResource

# TODO update the JSON string below
json = "{}"
# create an instance of KubernetesResource from a JSON string
kubernetes_resource_instance = KubernetesResource.from_json(json)
# print the JSON string representation of the object
print(KubernetesResource.to_json())

# convert the object into a dict
kubernetes_resource_dict = kubernetes_resource_instance.to_dict()
# create an instance of KubernetesResource from a dict
kubernetes_resource_from_dict = KubernetesResource.from_dict(kubernetes_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



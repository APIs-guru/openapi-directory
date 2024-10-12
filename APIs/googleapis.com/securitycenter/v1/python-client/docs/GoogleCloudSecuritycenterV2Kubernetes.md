# GoogleCloudSecuritycenterV2Kubernetes

Kubernetes-related attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_reviews** | [**List[GoogleCloudSecuritycenterV2AccessReview]**](GoogleCloudSecuritycenterV2AccessReview.md) | Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding. | [optional] 
**bindings** | [**List[GoogleCloudSecuritycenterV2Binding]**](GoogleCloudSecuritycenterV2Binding.md) | Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). | [optional] 
**node_pools** | [**List[GoogleCloudSecuritycenterV2NodePool]**](GoogleCloudSecuritycenterV2NodePool.md) | GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available. | [optional] 
**nodes** | [**List[GoogleCloudSecuritycenterV2Node]**](GoogleCloudSecuritycenterV2Node.md) | Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information. | [optional] 
**objects** | [**List[GoogleCloudSecuritycenterV2Object]**](GoogleCloudSecuritycenterV2Object.md) | Kubernetes objects related to the finding. | [optional] 
**pods** | [**List[GoogleCloudSecuritycenterV2Pod]**](GoogleCloudSecuritycenterV2Pod.md) | Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod. | [optional] 
**roles** | [**List[GoogleCloudSecuritycenterV2Role]**](GoogleCloudSecuritycenterV2Role.md) | Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_kubernetes import GoogleCloudSecuritycenterV2Kubernetes

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Kubernetes from a JSON string
google_cloud_securitycenter_v2_kubernetes_instance = GoogleCloudSecuritycenterV2Kubernetes.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Kubernetes.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_kubernetes_dict = google_cloud_securitycenter_v2_kubernetes_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Kubernetes from a dict
google_cloud_securitycenter_v2_kubernetes_from_dict = GoogleCloudSecuritycenterV2Kubernetes.from_dict(google_cloud_securitycenter_v2_kubernetes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



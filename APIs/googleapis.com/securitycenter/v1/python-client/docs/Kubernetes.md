# Kubernetes

Kubernetes-related attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_reviews** | [**List[AccessReview]**](AccessReview.md) | Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding. | [optional] 
**bindings** | [**List[GoogleCloudSecuritycenterV1Binding]**](GoogleCloudSecuritycenterV1Binding.md) | Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). | [optional] 
**node_pools** | [**List[NodePool]**](NodePool.md) | GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available. | [optional] 
**nodes** | [**List[Node]**](Node.md) | Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information. | [optional] 
**objects** | [**List[Object]**](Object.md) | Kubernetes objects related to the finding. | [optional] 
**pods** | [**List[Pod]**](Pod.md) | Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod. | [optional] 
**roles** | [**List[Role]**](Role.md) | Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). | [optional] 

## Example

```python
from openapi_client.models.kubernetes import Kubernetes

# TODO update the JSON string below
json = "{}"
# create an instance of Kubernetes from a JSON string
kubernetes_instance = Kubernetes.from_json(json)
# print the JSON string representation of the object
print(Kubernetes.to_json())

# convert the object into a dict
kubernetes_dict = kubernetes_instance.to_dict()
# create an instance of Kubernetes from a dict
kubernetes_from_dict = Kubernetes.from_dict(kubernetes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



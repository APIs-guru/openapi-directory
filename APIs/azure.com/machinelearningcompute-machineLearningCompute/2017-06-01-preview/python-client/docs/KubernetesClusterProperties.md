# KubernetesClusterProperties

Kubernetes cluster specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_principal** | [**ServicePrincipalProperties**](ServicePrincipalProperties.md) |  | 

## Example

```python
from openapi_client.models.kubernetes_cluster_properties import KubernetesClusterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of KubernetesClusterProperties from a JSON string
kubernetes_cluster_properties_instance = KubernetesClusterProperties.from_json(json)
# print the JSON string representation of the object
print(KubernetesClusterProperties.to_json())

# convert the object into a dict
kubernetes_cluster_properties_dict = kubernetes_cluster_properties_instance.to_dict()
# create an instance of KubernetesClusterProperties from a dict
kubernetes_cluster_properties_from_dict = KubernetesClusterProperties.from_dict(kubernetes_cluster_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



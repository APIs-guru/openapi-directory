# KubernetesConnectionDetails

Contains information used to connect to a Kubernetes cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kube_config** | **str** | Gets the kubeconfig for the cluster. | [optional] 

## Example

```python
from openapi_client.models.kubernetes_connection_details import KubernetesConnectionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of KubernetesConnectionDetails from a JSON string
kubernetes_connection_details_instance = KubernetesConnectionDetails.from_json(json)
# print the JSON string representation of the object
print(KubernetesConnectionDetails.to_json())

# convert the object into a dict
kubernetes_connection_details_dict = kubernetes_connection_details_instance.to_dict()
# create an instance of KubernetesConnectionDetails from a dict
kubernetes_connection_details_from_dict = KubernetesConnectionDetails.from_dict(kubernetes_connection_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



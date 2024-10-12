# KubernetesConfig

KubernetesConfig contains the Kubernetes runtime configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway_service_mesh** | [**GatewayServiceMesh**](GatewayServiceMesh.md) |  | [optional] 
**service_networking** | [**ServiceNetworking**](ServiceNetworking.md) |  | [optional] 

## Example

```python
from openapi_client.models.kubernetes_config import KubernetesConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KubernetesConfig from a JSON string
kubernetes_config_instance = KubernetesConfig.from_json(json)
# print the JSON string representation of the object
print(KubernetesConfig.to_json())

# convert the object into a dict
kubernetes_config_dict = kubernetes_config_instance.to_dict()
# create an instance of KubernetesConfig from a dict
kubernetes_config_from_dict = KubernetesConfig.from_dict(kubernetes_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



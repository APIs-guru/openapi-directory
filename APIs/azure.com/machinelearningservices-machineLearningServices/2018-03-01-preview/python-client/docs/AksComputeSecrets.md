# AksComputeSecrets

Secrets related to a Machine Learning compute based on AKS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_kube_config** | **str** | Content of kubeconfig file that can be used to connect to the Kubernetes cluster. | [optional] 
**image_pull_secret_name** | **str** | Image registry pull secret. | [optional] 
**user_kube_config** | **str** | Content of kubeconfig file that can be used to connect to the Kubernetes cluster. | [optional] 

## Example

```python
from openapi_client.models.aks_compute_secrets import AksComputeSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of AksComputeSecrets from a JSON string
aks_compute_secrets_instance = AksComputeSecrets.from_json(json)
# print the JSON string representation of the object
print(AksComputeSecrets.to_json())

# convert the object into a dict
aks_compute_secrets_dict = aks_compute_secrets_instance.to_dict()
# create an instance of AksComputeSecrets from a dict
aks_compute_secrets_from_dict = AksComputeSecrets.from_dict(aks_compute_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



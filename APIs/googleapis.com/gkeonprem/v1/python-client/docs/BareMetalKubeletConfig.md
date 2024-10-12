# BareMetalKubeletConfig

KubeletConfig defines the modifiable kubelet configurations for bare metal machines. Note: this list includes fields supported in GKE (see https://cloud.google.com/kubernetes-engine/docs/how-to/node-system-config#kubelet-options).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registry_burst** | **int** | The maximum size of bursty pulls, temporarily allows pulls to burst to this number, while still not exceeding registry_pull_qps. The value must not be a negative number. Updating this field may impact scalability by changing the amount of traffic produced by image pulls. Defaults to 10. | [optional] 
**registry_pull_qps** | **int** | The limit of registry pulls per second. Setting this value to 0 means no limit. Updating this field may impact scalability by changing the amount of traffic produced by image pulls. Defaults to 5. | [optional] 
**serialize_image_pulls_disabled** | **bool** | Prevents the Kubelet from pulling multiple images at a time. We recommend *not* changing the default value on nodes that run docker daemon with version &lt; 1.9 or an Another Union File System (Aufs) storage backend. Issue https://github.com/kubernetes/kubernetes/issues/10959 has more details. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_kubelet_config import BareMetalKubeletConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalKubeletConfig from a JSON string
bare_metal_kubelet_config_instance = BareMetalKubeletConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalKubeletConfig.to_json())

# convert the object into a dict
bare_metal_kubelet_config_dict = bare_metal_kubelet_config_instance.to_dict()
# create an instance of BareMetalKubeletConfig from a dict
bare_metal_kubelet_config_from_dict = BareMetalKubeletConfig.from_dict(bare_metal_kubelet_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



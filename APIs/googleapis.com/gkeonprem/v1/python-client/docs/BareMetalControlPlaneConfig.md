# BareMetalControlPlaneConfig

Specifies the control plane configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_server_args** | [**List[BareMetalApiServerArgument]**](BareMetalApiServerArgument.md) | Customizes the default API server args. Only a subset of customized flags are supported. For the exact format, refer to the [API server documentation](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/). | [optional] 
**control_plane_node_pool_config** | [**BareMetalControlPlaneNodePoolConfig**](BareMetalControlPlaneNodePoolConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_control_plane_config import BareMetalControlPlaneConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalControlPlaneConfig from a JSON string
bare_metal_control_plane_config_instance = BareMetalControlPlaneConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalControlPlaneConfig.to_json())

# convert the object into a dict
bare_metal_control_plane_config_dict = bare_metal_control_plane_config_instance.to_dict()
# create an instance of BareMetalControlPlaneConfig from a dict
bare_metal_control_plane_config_from_dict = BareMetalControlPlaneConfig.from_dict(bare_metal_control_plane_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



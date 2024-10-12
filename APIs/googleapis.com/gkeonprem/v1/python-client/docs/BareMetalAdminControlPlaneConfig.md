# BareMetalAdminControlPlaneConfig

BareMetalAdminControlPlaneConfig specifies the control plane configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_server_args** | [**List[BareMetalAdminApiServerArgument]**](BareMetalAdminApiServerArgument.md) | Customizes the default API server args. Only a subset of customized flags are supported. Please refer to the API server documentation below to know the exact format: https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/ | [optional] 
**control_plane_node_pool_config** | [**BareMetalAdminControlPlaneNodePoolConfig**](BareMetalAdminControlPlaneNodePoolConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_control_plane_config import BareMetalAdminControlPlaneConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminControlPlaneConfig from a JSON string
bare_metal_admin_control_plane_config_instance = BareMetalAdminControlPlaneConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminControlPlaneConfig.to_json())

# convert the object into a dict
bare_metal_admin_control_plane_config_dict = bare_metal_admin_control_plane_config_instance.to_dict()
# create an instance of BareMetalAdminControlPlaneConfig from a dict
bare_metal_admin_control_plane_config_from_dict = BareMetalAdminControlPlaneConfig.from_dict(bare_metal_admin_control_plane_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



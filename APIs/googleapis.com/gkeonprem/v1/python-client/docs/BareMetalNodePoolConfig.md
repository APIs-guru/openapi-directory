# BareMetalNodePoolConfig

BareMetalNodePoolConfig describes the configuration of all nodes within a given bare metal node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kubelet_config** | [**BareMetalKubeletConfig**](BareMetalKubeletConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | The labels assigned to nodes of this node pool. An object containing a list of key/value pairs. Example: { \&quot;name\&quot;: \&quot;wrench\&quot;, \&quot;mass\&quot;: \&quot;1.3kg\&quot;, \&quot;count\&quot;: \&quot;3\&quot; }. | [optional] 
**node_configs** | [**List[BareMetalNodeConfig]**](BareMetalNodeConfig.md) | Required. The list of machine addresses in the bare metal node pool. | [optional] 
**operating_system** | **str** | Specifies the nodes operating system (default: LINUX). | [optional] 
**taints** | [**List[NodeTaint]**](NodeTaint.md) | The initial taints assigned to nodes of this node pool. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_node_pool_config import BareMetalNodePoolConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalNodePoolConfig from a JSON string
bare_metal_node_pool_config_instance = BareMetalNodePoolConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalNodePoolConfig.to_json())

# convert the object into a dict
bare_metal_node_pool_config_dict = bare_metal_node_pool_config_instance.to_dict()
# create an instance of BareMetalNodePoolConfig from a dict
bare_metal_node_pool_config_from_dict = BareMetalNodePoolConfig.from_dict(bare_metal_node_pool_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



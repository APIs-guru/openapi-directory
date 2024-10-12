# BareMetalNodeConfig

BareMetalNodeConfig lists machine addresses to access Nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | The labels assigned to this node. An object containing a list of key/value pairs. The labels here, unioned with the labels set on BareMetalNodePoolConfig are the set of labels that will be applied to the node. If there are any conflicts, the BareMetalNodeConfig labels take precedence. Example: { \&quot;name\&quot;: \&quot;wrench\&quot;, \&quot;mass\&quot;: \&quot;1.3kg\&quot;, \&quot;count\&quot;: \&quot;3\&quot; }. | [optional] 
**node_ip** | **str** | The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1 | [optional] 

## Example

```python
from openapi_client.models.bare_metal_node_config import BareMetalNodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalNodeConfig from a JSON string
bare_metal_node_config_instance = BareMetalNodeConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalNodeConfig.to_json())

# convert the object into a dict
bare_metal_node_config_dict = bare_metal_node_config_instance.to_dict()
# create an instance of BareMetalNodeConfig from a dict
bare_metal_node_config_from_dict = BareMetalNodeConfig.from_dict(bare_metal_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



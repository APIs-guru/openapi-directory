# NodeNetwork

Represents a single node in a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_adapters** | [**List[NetworkAdapter]**](NetworkAdapter.md) | The array of network adapters in the node. | 

## Example

```python
from openapi_client.models.node_network import NodeNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of NodeNetwork from a JSON string
node_network_instance = NodeNetwork.from_json(json)
# print the JSON string representation of the object
print(NodeNetwork.to_json())

# convert the object into a dict
node_network_dict = node_network_instance.to_dict()
# create an instance of NodeNetwork from a dict
node_network_from_dict = NodeNetwork.from_dict(node_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



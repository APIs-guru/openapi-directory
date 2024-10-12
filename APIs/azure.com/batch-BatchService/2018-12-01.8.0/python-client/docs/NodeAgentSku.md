# NodeAgentSku

The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**os_type** | **str** |  | [optional] 
**verified_image_references** | [**List[ImageReference]**](ImageReference.md) | This collection is not exhaustive (the node agent may be compatible with other images). | [optional] 

## Example

```python
from openapi_client.models.node_agent_sku import NodeAgentSku

# TODO update the JSON string below
json = "{}"
# create an instance of NodeAgentSku from a JSON string
node_agent_sku_instance = NodeAgentSku.from_json(json)
# print the JSON string representation of the object
print(NodeAgentSku.to_json())

# convert the object into a dict
node_agent_sku_dict = node_agent_sku_instance.to_dict()
# create an instance of NodeAgentSku from a dict
node_agent_sku_from_dict = NodeAgentSku.from_dict(node_agent_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



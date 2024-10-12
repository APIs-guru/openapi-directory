# EdgeNode

Edgenode is a global Point of Presence (POP) location used to deliver CDN content to end users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EdgeNodeProperties**](EdgeNodeProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.edge_node import EdgeNode

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeNode from a JSON string
edge_node_instance = EdgeNode.from_json(json)
# print the JSON string representation of the object
print(EdgeNode.to_json())

# convert the object into a dict
edge_node_dict = edge_node_instance.to_dict()
# create an instance of EdgeNode from a dict
edge_node_from_dict = EdgeNode.from_dict(edge_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



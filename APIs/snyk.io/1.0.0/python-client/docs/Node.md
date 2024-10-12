# Node


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deps** | **List[object]** | An array of package ids this package depends on. | [optional] 
**node_id** | **str** | Node id unique across the graph. | 
**pkg_id** | **str** | Package id reference should match id in pkg array and take the format name@version. | 

## Example

```python
from openapi_client.models.node import Node

# TODO update the JSON string below
json = "{}"
# create an instance of Node from a JSON string
node_instance = Node.from_json(json)
# print the JSON string representation of the object
print(Node.to_json())

# convert the object into a dict
node_dict = node_instance.to_dict()
# create an instance of Node from a dict
node_from_dict = Node.from_dict(node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# NodeList

Collection of Nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Node]**](Node.md) | The list of Nodes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.node_list import NodeList

# TODO update the JSON string below
json = "{}"
# create an instance of NodeList from a JSON string
node_list_instance = NodeList.from_json(json)
# print the JSON string representation of the object
print(NodeList.to_json())

# convert the object into a dict
node_list_dict = node_list_instance.to_dict()
# create an instance of NodeList from a dict
node_list_from_dict = NodeList.from_dict(node_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



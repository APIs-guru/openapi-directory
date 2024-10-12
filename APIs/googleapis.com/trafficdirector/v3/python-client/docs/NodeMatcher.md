# NodeMatcher

Specifies the way to match a Node. The match follows AND semantics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_id** | [**StringMatcher**](StringMatcher.md) |  | [optional] 
**node_metadatas** | [**List[StructMatcher]**](StructMatcher.md) | Specifies match criteria on the node metadata. | [optional] 

## Example

```python
from openapi_client.models.node_matcher import NodeMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of NodeMatcher from a JSON string
node_matcher_instance = NodeMatcher.from_json(json)
# print the JSON string representation of the object
print(NodeMatcher.to_json())

# convert the object into a dict
node_matcher_dict = node_matcher_instance.to_dict()
# create an instance of NodeMatcher from a dict
node_matcher_from_dict = NodeMatcher.from_dict(node_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



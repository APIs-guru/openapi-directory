# PrefixNode

A message representing a key prefix node in the key prefix hierarchy. for eg. Bigtable keyspaces are lexicographically ordered mappings of keys to values. Keys often have a shared prefix structure where users use the keys to organize data. Eg ///employee In this case Keysight will possibly use one node for a company and reuse it for all employees that fall under the company. Doing so improves legibility in the UI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_node** | **bool** | Whether this corresponds to a data_source name. | [optional] 
**depth** | **int** | The depth in the prefix hierarchy. | [optional] 
**end_index** | **int** | The index of the end key bucket of the range that this node spans. | [optional] 
**start_index** | **int** | The index of the start key bucket of the range that this node spans. | [optional] 
**word** | **str** | The string represented by the prefix node. | [optional] 

## Example

```python
from openapi_client.models.prefix_node import PrefixNode

# TODO update the JSON string below
json = "{}"
# create an instance of PrefixNode from a JSON string
prefix_node_instance = PrefixNode.from_json(json)
# print the JSON string representation of the object
print(PrefixNode.to_json())

# convert the object into a dict
prefix_node_dict = prefix_node_instance.to_dict()
# create an instance of PrefixNode from a dict
prefix_node_from_dict = PrefixNode.from_dict(prefix_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



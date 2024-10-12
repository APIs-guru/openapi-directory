# NodeCount

Number of nodes based on the Filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets the name of a count type | [optional] 
**properties** | [**NodeCountProperties**](NodeCountProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_count import NodeCount

# TODO update the JSON string below
json = "{}"
# create an instance of NodeCount from a JSON string
node_count_instance = NodeCount.from_json(json)
# print the JSON string representation of the object
print(NodeCount.to_json())

# convert the object into a dict
node_count_dict = node_count_instance.to_dict()
# create an instance of NodeCount from a dict
node_count_from_dict = NodeCount.from_dict(node_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



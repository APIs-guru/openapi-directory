# ShieldedNodes

Configuration of Shielded Nodes feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether Shielded Nodes features are enabled on all nodes in this cluster. | [optional] 

## Example

```python
from openapi_client.models.shielded_nodes import ShieldedNodes

# TODO update the JSON string below
json = "{}"
# create an instance of ShieldedNodes from a JSON string
shielded_nodes_instance = ShieldedNodes.from_json(json)
# print the JSON string representation of the object
print(ShieldedNodes.to_json())

# convert the object into a dict
shielded_nodes_dict = shielded_nodes_instance.to_dict()
# create an instance of ShieldedNodes from a dict
shielded_nodes_from_dict = ShieldedNodes.from_dict(shielded_nodes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



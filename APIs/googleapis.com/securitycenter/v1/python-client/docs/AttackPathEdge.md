# AttackPathEdge

Represents a connection between a source node and a destination node in this attack path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** | The attack node uuid of the destination node. | [optional] 
**source** | **str** | The attack node uuid of the source node. | [optional] 

## Example

```python
from openapi_client.models.attack_path_edge import AttackPathEdge

# TODO update the JSON string below
json = "{}"
# create an instance of AttackPathEdge from a JSON string
attack_path_edge_instance = AttackPathEdge.from_json(json)
# print the JSON string representation of the object
print(AttackPathEdge.to_json())

# convert the object into a dict
attack_path_edge_dict = attack_path_edge_instance.to_dict()
# create an instance of AttackPathEdge from a dict
attack_path_edge_from_dict = AttackPathEdge.from_dict(attack_path_edge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AttackPath

A path that an attacker could take to reach an exposed resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edges** | [**List[AttackPathEdge]**](AttackPathEdge.md) | A list of the edges between nodes in this attack path. | [optional] 
**name** | **str** | The attack path name, for example, &#x60;organizations/12/simulation/34/valuedResources/56/attackPaths/78&#x60; | [optional] 
**path_nodes** | [**List[AttackPathNode]**](AttackPathNode.md) | A list of nodes that exist in this attack path. | [optional] 

## Example

```python
from openapi_client.models.attack_path import AttackPath

# TODO update the JSON string below
json = "{}"
# create an instance of AttackPath from a JSON string
attack_path_instance = AttackPath.from_json(json)
# print the JSON string representation of the object
print(AttackPath.to_json())

# convert the object into a dict
attack_path_dict = attack_path_instance.to_dict()
# create an instance of AttackPath from a dict
attack_path_from_dict = AttackPath.from_dict(attack_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



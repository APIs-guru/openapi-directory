# AttackPathNode

Represents one point that an attacker passes through in this attack path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associated_findings** | [**List[PathNodeAssociatedFinding]**](PathNodeAssociatedFinding.md) | The findings associated with this node in the attack path. | [optional] 
**attack_steps** | [**List[AttackStepNode]**](AttackStepNode.md) | A list of attack step nodes that exist in this attack path node. | [optional] 
**display_name** | **str** | Human-readable name of this resource. | [optional] 
**resource** | **str** | The name of the resource at this point in the attack path. The format of the name follows the Cloud Asset Inventory [resource name format](\&quot;https://cloud.google.com/asset-inventory/docs/resource-name-format\&quot;) | [optional] 
**resource_type** | **str** | The [supported resource type](https://cloud.google.com/asset-inventory/docs/supported-asset-types\&quot;) | [optional] 
**uuid** | **str** | Unique id of the attack path node. | [optional] 

## Example

```python
from openapi_client.models.attack_path_node import AttackPathNode

# TODO update the JSON string below
json = "{}"
# create an instance of AttackPathNode from a JSON string
attack_path_node_instance = AttackPathNode.from_json(json)
# print the JSON string representation of the object
print(AttackPathNode.to_json())

# convert the object into a dict
attack_path_node_dict = attack_path_node_instance.to_dict()
# create an instance of AttackPathNode from a dict
attack_path_node_from_dict = AttackPathNode.from_dict(attack_path_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



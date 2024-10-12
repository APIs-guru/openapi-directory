# AttackStepNode

Detailed steps the attack can take between path nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Attack step description | [optional] 
**display_name** | **str** | User friendly name of the attack step | [optional] 
**labels** | **Dict[str, str]** | Attack step labels for metadata | [optional] 
**type** | **str** | Attack step type. Can be either AND, OR or DEFENSE | [optional] 
**uuid** | **str** | Unique ID for one Node | [optional] 

## Example

```python
from openapi_client.models.attack_step_node import AttackStepNode

# TODO update the JSON string below
json = "{}"
# create an instance of AttackStepNode from a JSON string
attack_step_node_instance = AttackStepNode.from_json(json)
# print the JSON string representation of the object
print(AttackStepNode.to_json())

# convert the object into a dict
attack_step_node_dict = attack_step_node_instance.to_dict()
# create an instance of AttackStepNode from a dict
attack_step_node_from_dict = AttackStepNode.from_dict(attack_step_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



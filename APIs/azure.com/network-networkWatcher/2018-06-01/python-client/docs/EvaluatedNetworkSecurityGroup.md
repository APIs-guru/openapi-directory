# EvaluatedNetworkSecurityGroup

Results of network security group evaluation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_rule** | [**MatchedRule**](MatchedRule.md) |  | [optional] 
**network_security_group_id** | **str** | Network security group ID. | [optional] 
**rules_evaluation_result** | [**List[NetworkSecurityRulesEvaluationResult]**](NetworkSecurityRulesEvaluationResult.md) | List of network security rules evaluation results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.evaluated_network_security_group import EvaluatedNetworkSecurityGroup

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluatedNetworkSecurityGroup from a JSON string
evaluated_network_security_group_instance = EvaluatedNetworkSecurityGroup.from_json(json)
# print the JSON string representation of the object
print(EvaluatedNetworkSecurityGroup.to_json())

# convert the object into a dict
evaluated_network_security_group_dict = evaluated_network_security_group_instance.to_dict()
# create an instance of EvaluatedNetworkSecurityGroup from a dict
evaluated_network_security_group_from_dict = EvaluatedNetworkSecurityGroup.from_dict(evaluated_network_security_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



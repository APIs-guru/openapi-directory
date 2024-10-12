# NetworkSecurityRulesEvaluationResult

Network security rules evaluation result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_matched** | **bool** | Value indicating whether destination is matched. | [optional] 
**destination_port_matched** | **bool** | Value indicating whether destination port is matched. | [optional] 
**name** | **str** | Name of the network security rule. | [optional] 
**protocol_matched** | **bool** | Value indicating whether protocol is matched. | [optional] 
**source_matched** | **bool** | Value indicating whether source is matched. | [optional] 
**source_port_matched** | **bool** | Value indicating whether source port is matched. | [optional] 

## Example

```python
from openapi_client.models.network_security_rules_evaluation_result import NetworkSecurityRulesEvaluationResult

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkSecurityRulesEvaluationResult from a JSON string
network_security_rules_evaluation_result_instance = NetworkSecurityRulesEvaluationResult.from_json(json)
# print the JSON string representation of the object
print(NetworkSecurityRulesEvaluationResult.to_json())

# convert the object into a dict
network_security_rules_evaluation_result_dict = network_security_rules_evaluation_result_instance.to_dict()
# create an instance of NetworkSecurityRulesEvaluationResult from a dict
network_security_rules_evaluation_result_from_dict = NetworkSecurityRulesEvaluationResult.from_dict(network_security_rules_evaluation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



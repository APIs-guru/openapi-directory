# NetworkRuleSet

Description of topic resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | NetworkRuleSet properties | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_rule_set import NetworkRuleSet

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkRuleSet from a JSON string
network_rule_set_instance = NetworkRuleSet.from_json(json)
# print the JSON string representation of the object
print(NetworkRuleSet.to_json())

# convert the object into a dict
network_rule_set_dict = network_rule_set_instance.to_dict()
# create an instance of NetworkRuleSet from a dict
network_rule_set_from_dict = NetworkRuleSet.from_dict(network_rule_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



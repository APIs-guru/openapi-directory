# NetworkRuleSetListResult

The response of the List NetworkRuleSet operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of NetworkRuleSet. | [optional] 
**value** | [**List[NetworkRuleSet]**](NetworkRuleSet.md) | Result of the List NetworkRuleSet operation. | [optional] 

## Example

```python
from openapi_client.models.network_rule_set_list_result import NetworkRuleSetListResult

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkRuleSetListResult from a JSON string
network_rule_set_list_result_instance = NetworkRuleSetListResult.from_json(json)
# print the JSON string representation of the object
print(NetworkRuleSetListResult.to_json())

# convert the object into a dict
network_rule_set_list_result_dict = network_rule_set_list_result_instance.to_dict()
# create an instance of NetworkRuleSetListResult from a dict
network_rule_set_list_result_from_dict = NetworkRuleSetListResult.from_dict(network_rule_set_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



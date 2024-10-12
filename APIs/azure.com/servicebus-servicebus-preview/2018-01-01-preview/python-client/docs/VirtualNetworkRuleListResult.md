# VirtualNetworkRuleListResult

The response from the List namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains an incomplete list of VirtualNetwork Rules | [optional] 
**value** | [**List[VirtualNetworkRule]**](VirtualNetworkRule.md) | Result of the List VirtualNetwork Rules operation. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_rule_list_result import VirtualNetworkRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkRuleListResult from a JSON string
virtual_network_rule_list_result_instance = VirtualNetworkRuleListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkRuleListResult.to_json())

# convert the object into a dict
virtual_network_rule_list_result_dict = virtual_network_rule_list_result_instance.to_dict()
# create an instance of VirtualNetworkRuleListResult from a dict
virtual_network_rule_list_result_from_dict = VirtualNetworkRuleListResult.from_dict(virtual_network_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



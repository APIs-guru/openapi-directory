# IpFilterRuleListResult

The response from the List namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains an incomplete list of IpFilter Rules | [optional] 
**value** | [**List[IpFilterRule]**](IpFilterRule.md) | Result of the List IpFilter Rules operation. | [optional] 

## Example

```python
from openapi_client.models.ip_filter_rule_list_result import IpFilterRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IpFilterRuleListResult from a JSON string
ip_filter_rule_list_result_instance = IpFilterRuleListResult.from_json(json)
# print the JSON string representation of the object
print(IpFilterRuleListResult.to_json())

# convert the object into a dict
ip_filter_rule_list_result_dict = ip_filter_rule_list_result_instance.to_dict()
# create an instance of IpFilterRuleListResult from a dict
ip_filter_rule_list_result_from_dict = IpFilterRuleListResult.from_dict(ip_filter_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



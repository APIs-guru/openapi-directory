# RoutingRuleListResult

Result of the request to list Routing Rules. It contains a list of Routing Rule objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of RoutingRule objects if there are any. | [optional] 
**value** | [**List[RoutingRule]**](RoutingRule.md) | List of Routing Rules within a Front Door. | [optional] [readonly] 

## Example

```python
from openapi_client.models.routing_rule_list_result import RoutingRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingRuleListResult from a JSON string
routing_rule_list_result_instance = RoutingRuleListResult.from_json(json)
# print the JSON string representation of the object
print(RoutingRuleListResult.to_json())

# convert the object into a dict
routing_rule_list_result_dict = routing_rule_list_result_instance.to_dict()
# create an instance of RoutingRuleListResult from a dict
routing_rule_list_result_from_dict = RoutingRuleListResult.from_dict(routing_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



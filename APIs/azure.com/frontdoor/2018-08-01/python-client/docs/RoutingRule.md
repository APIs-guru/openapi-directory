# RoutingRule

A routing rule represents a specification for traffic to treat and where to send it, along with health probe information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Resource name. | [optional] 
**properties** | [**RoutingRuleProperties**](RoutingRuleProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.routing_rule import RoutingRule

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingRule from a JSON string
routing_rule_instance = RoutingRule.from_json(json)
# print the JSON string representation of the object
print(RoutingRule.to_json())

# convert the object into a dict
routing_rule_dict = routing_rule_instance.to_dict()
# create an instance of RoutingRule from a dict
routing_rule_from_dict = RoutingRule.from_dict(routing_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RoutingRule

Routing rules for TiP

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. | [optional] 

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



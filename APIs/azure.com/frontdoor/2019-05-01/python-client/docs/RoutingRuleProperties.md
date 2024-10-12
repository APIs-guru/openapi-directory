# RoutingRuleProperties

The JSON object that contains the properties required to create a routing rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_state** | [**ResourceState**](ResourceState.md) |  | [optional] 
**accepted_protocols** | **List[str]** | Protocol schemes to match for this rule | [optional] 
**enabled_state** | **str** | Whether to enable use of this rule. Permitted values are &#39;Enabled&#39; or &#39;Disabled&#39; | [optional] 
**frontend_endpoints** | [**List[BackendPoolUpdateParametersHealthProbeSettings]**](BackendPoolUpdateParametersHealthProbeSettings.md) | Frontend endpoints associated with this rule | [optional] 
**patterns_to_match** | **List[str]** | The route patterns of the rule. | [optional] 
**route_configuration** | [**RouteConfiguration**](RouteConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.routing_rule_properties import RoutingRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingRuleProperties from a JSON string
routing_rule_properties_instance = RoutingRuleProperties.from_json(json)
# print the JSON string representation of the object
print(RoutingRuleProperties.to_json())

# convert the object into a dict
routing_rule_properties_dict = routing_rule_properties_instance.to_dict()
# create an instance of RoutingRuleProperties from a dict
routing_rule_properties_from_dict = RoutingRuleProperties.from_dict(routing_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



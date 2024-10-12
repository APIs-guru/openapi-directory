# RoutingRuleUpdateParameters

Routing rules to apply to an endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_protocols** | **List[str]** | Protocol schemes to match for this rule | [optional] 
**enabled_state** | **str** | Whether to enable use of this rule. Permitted values are &#39;Enabled&#39; or &#39;Disabled&#39; | [optional] 
**frontend_endpoints** | [**List[BackendPoolUpdateParametersHealthProbeSettings]**](BackendPoolUpdateParametersHealthProbeSettings.md) | Frontend endpoints associated with this rule | [optional] 
**patterns_to_match** | **List[str]** | The route patterns of the rule. | [optional] 
**route_configuration** | [**RouteConfiguration**](RouteConfiguration.md) |  | [optional] 
**rules_engine** | [**BackendPoolUpdateParametersHealthProbeSettings**](BackendPoolUpdateParametersHealthProbeSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.routing_rule_update_parameters import RoutingRuleUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingRuleUpdateParameters from a JSON string
routing_rule_update_parameters_instance = RoutingRuleUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(RoutingRuleUpdateParameters.to_json())

# convert the object into a dict
routing_rule_update_parameters_dict = routing_rule_update_parameters_instance.to_dict()
# create an instance of RoutingRuleUpdateParameters from a dict
routing_rule_update_parameters_from_dict = RoutingRuleUpdateParameters.from_dict(routing_rule_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ApplicationGatewayRewriteRuleSetPropertiesFormat

Properties of rewrite rule set of the application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**rewrite_rules** | [**List[ApplicationGatewayRewriteRule]**](ApplicationGatewayRewriteRule.md) | Rewrite rules in the rewrite rule set. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_rewrite_rule_set_properties_format import ApplicationGatewayRewriteRuleSetPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayRewriteRuleSetPropertiesFormat from a JSON string
application_gateway_rewrite_rule_set_properties_format_instance = ApplicationGatewayRewriteRuleSetPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayRewriteRuleSetPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_rewrite_rule_set_properties_format_dict = application_gateway_rewrite_rule_set_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayRewriteRuleSetPropertiesFormat from a dict
application_gateway_rewrite_rule_set_properties_format_from_dict = ApplicationGatewayRewriteRuleSetPropertiesFormat.from_dict(application_gateway_rewrite_rule_set_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ApplicationGatewayRewriteRuleActionSet

Set of actions in the Rewrite Rule in Application Gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_header_configurations** | [**List[ApplicationGatewayHeaderConfiguration]**](ApplicationGatewayHeaderConfiguration.md) | Request Header Actions in the Action Set. | [optional] 
**response_header_configurations** | [**List[ApplicationGatewayHeaderConfiguration]**](ApplicationGatewayHeaderConfiguration.md) | Response Header Actions in the Action Set. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_rewrite_rule_action_set import ApplicationGatewayRewriteRuleActionSet

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayRewriteRuleActionSet from a JSON string
application_gateway_rewrite_rule_action_set_instance = ApplicationGatewayRewriteRuleActionSet.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayRewriteRuleActionSet.to_json())

# convert the object into a dict
application_gateway_rewrite_rule_action_set_dict = application_gateway_rewrite_rule_action_set_instance.to_dict()
# create an instance of ApplicationGatewayRewriteRuleActionSet from a dict
application_gateway_rewrite_rule_action_set_from_dict = ApplicationGatewayRewriteRuleActionSet.from_dict(application_gateway_rewrite_rule_action_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



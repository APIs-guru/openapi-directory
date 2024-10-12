# ApplicationGatewayRewriteRuleCondition

Set of conditions in the Rewrite Rule in Application Gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_case** | **bool** | Setting this paramter to truth value with force the pattern to do a case in-sensitive comparison. | [optional] 
**negate** | **bool** | Setting this value as truth will force to check the negation of the condition given by the user. | [optional] 
**pattern** | **str** | The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition | [optional] 
**variable** | **str** | The condition parameter of the RewriteRuleCondition. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_rewrite_rule_condition import ApplicationGatewayRewriteRuleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayRewriteRuleCondition from a JSON string
application_gateway_rewrite_rule_condition_instance = ApplicationGatewayRewriteRuleCondition.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayRewriteRuleCondition.to_json())

# convert the object into a dict
application_gateway_rewrite_rule_condition_dict = application_gateway_rewrite_rule_condition_instance.to_dict()
# create an instance of ApplicationGatewayRewriteRuleCondition from a dict
application_gateway_rewrite_rule_condition_from_dict = ApplicationGatewayRewriteRuleCondition.from_dict(application_gateway_rewrite_rule_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



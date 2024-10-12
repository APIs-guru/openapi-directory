# ApplicationGatewayRewriteRule

Rewrite rule of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_set** | [**ApplicationGatewayRewriteRuleActionSet**](ApplicationGatewayRewriteRuleActionSet.md) |  | [optional] 
**name** | **str** | Name of the rewrite rule that is unique within an Application Gateway. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_rewrite_rule import ApplicationGatewayRewriteRule

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayRewriteRule from a JSON string
application_gateway_rewrite_rule_instance = ApplicationGatewayRewriteRule.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayRewriteRule.to_json())

# convert the object into a dict
application_gateway_rewrite_rule_dict = application_gateway_rewrite_rule_instance.to_dict()
# create an instance of ApplicationGatewayRewriteRule from a dict
application_gateway_rewrite_rule_from_dict = ApplicationGatewayRewriteRule.from_dict(application_gateway_rewrite_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



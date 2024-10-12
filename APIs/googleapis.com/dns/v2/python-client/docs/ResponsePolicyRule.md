# ResponsePolicyRule

A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**behavior** | **str** | Answer this query with a behavior rather than DNS data. | [optional] 
**dns_name** | **str** | The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#responsePolicyRule']
**local_data** | [**ResponsePolicyRuleLocalData**](ResponsePolicyRuleLocalData.md) |  | [optional] 
**rule_name** | **str** | An identifier for this rule. Must be unique with the ResponsePolicy. | [optional] 

## Example

```python
from openapi_client.models.response_policy_rule import ResponsePolicyRule

# TODO update the JSON string below
json = "{}"
# create an instance of ResponsePolicyRule from a JSON string
response_policy_rule_instance = ResponsePolicyRule.from_json(json)
# print the JSON string representation of the object
print(ResponsePolicyRule.to_json())

# convert the object into a dict
response_policy_rule_dict = response_policy_rule_instance.to_dict()
# create an instance of ResponsePolicyRule from a dict
response_policy_rule_from_dict = ResponsePolicyRule.from_dict(response_policy_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



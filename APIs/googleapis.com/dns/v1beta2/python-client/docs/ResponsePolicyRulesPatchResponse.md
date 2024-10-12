# ResponsePolicyRulesPatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**response_policy_rule** | [**ResponsePolicyRule**](ResponsePolicyRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.response_policy_rules_patch_response import ResponsePolicyRulesPatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResponsePolicyRulesPatchResponse from a JSON string
response_policy_rules_patch_response_instance = ResponsePolicyRulesPatchResponse.from_json(json)
# print the JSON string representation of the object
print(ResponsePolicyRulesPatchResponse.to_json())

# convert the object into a dict
response_policy_rules_patch_response_dict = response_policy_rules_patch_response_instance.to_dict()
# create an instance of ResponsePolicyRulesPatchResponse from a dict
response_policy_rules_patch_response_from_dict = ResponsePolicyRulesPatchResponse.from_dict(response_policy_rules_patch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



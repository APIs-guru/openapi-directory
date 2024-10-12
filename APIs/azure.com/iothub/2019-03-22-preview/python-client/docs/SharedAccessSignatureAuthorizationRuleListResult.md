# SharedAccessSignatureAuthorizationRuleListResult

The list of shared access policies with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The next link. | [optional] [readonly] 
**value** | [**List[SharedAccessSignatureAuthorizationRule]**](SharedAccessSignatureAuthorizationRule.md) | The list of shared access policies. | [optional] 

## Example

```python
from openapi_client.models.shared_access_signature_authorization_rule_list_result import SharedAccessSignatureAuthorizationRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SharedAccessSignatureAuthorizationRuleListResult from a JSON string
shared_access_signature_authorization_rule_list_result_instance = SharedAccessSignatureAuthorizationRuleListResult.from_json(json)
# print the JSON string representation of the object
print(SharedAccessSignatureAuthorizationRuleListResult.to_json())

# convert the object into a dict
shared_access_signature_authorization_rule_list_result_dict = shared_access_signature_authorization_rule_list_result_instance.to_dict()
# create an instance of SharedAccessSignatureAuthorizationRuleListResult from a dict
shared_access_signature_authorization_rule_list_result_from_dict = SharedAccessSignatureAuthorizationRuleListResult.from_dict(shared_access_signature_authorization_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



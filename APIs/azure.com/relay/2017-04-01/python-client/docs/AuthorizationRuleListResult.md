# AuthorizationRuleListResult

The response from the list namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if value contains incomplete list of authorization rules. | [optional] 
**value** | [**List[AuthorizationRule]**](AuthorizationRule.md) | Result of the list authorization rules operation. | [optional] 

## Example

```python
from openapi_client.models.authorization_rule_list_result import AuthorizationRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationRuleListResult from a JSON string
authorization_rule_list_result_instance = AuthorizationRuleListResult.from_json(json)
# print the JSON string representation of the object
print(AuthorizationRuleListResult.to_json())

# convert the object into a dict
authorization_rule_list_result_dict = authorization_rule_list_result_instance.to_dict()
# create an instance of AuthorizationRuleListResult from a dict
authorization_rule_list_result_from_dict = AuthorizationRuleListResult.from_dict(authorization_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



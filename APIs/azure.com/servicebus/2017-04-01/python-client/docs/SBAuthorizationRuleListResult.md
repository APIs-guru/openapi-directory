# SBAuthorizationRuleListResult

The response to the List Namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of Authorization Rules. | [optional] 
**value** | [**List[SBAuthorizationRule]**](SBAuthorizationRule.md) | Result of the List Authorization Rules operation. | [optional] 

## Example

```python
from openapi_client.models.sb_authorization_rule_list_result import SBAuthorizationRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SBAuthorizationRuleListResult from a JSON string
sb_authorization_rule_list_result_instance = SBAuthorizationRuleListResult.from_json(json)
# print the JSON string representation of the object
print(SBAuthorizationRuleListResult.to_json())

# convert the object into a dict
sb_authorization_rule_list_result_dict = sb_authorization_rule_list_result_instance.to_dict()
# create an instance of SBAuthorizationRuleListResult from a dict
sb_authorization_rule_list_result_from_dict = SBAuthorizationRuleListResult.from_dict(sb_authorization_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



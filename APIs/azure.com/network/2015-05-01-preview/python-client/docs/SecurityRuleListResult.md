# SecurityRuleListResult

Response for ListSecurityRule Api service callRetrieves all security rules that belongs to a network security group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[SecurityRule]**](SecurityRule.md) | Gets security rules in a network security group | [optional] 

## Example

```python
from openapi_client.models.security_rule_list_result import SecurityRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityRuleListResult from a JSON string
security_rule_list_result_instance = SecurityRuleListResult.from_json(json)
# print the JSON string representation of the object
print(SecurityRuleListResult.to_json())

# convert the object into a dict
security_rule_list_result_dict = security_rule_list_result_instance.to_dict()
# create an instance of SecurityRuleListResult from a dict
security_rule_list_result_from_dict = SecurityRuleListResult.from_dict(security_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



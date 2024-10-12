# CustomRuleList

Defines contents of custom rules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[CustomRule]**](CustomRule.md) | List of rules | [optional] 

## Example

```python
from openapi_client.models.custom_rule_list import CustomRuleList

# TODO update the JSON string below
json = "{}"
# create an instance of CustomRuleList from a JSON string
custom_rule_list_instance = CustomRuleList.from_json(json)
# print the JSON string representation of the object
print(CustomRuleList.to_json())

# convert the object into a dict
custom_rule_list_dict = custom_rule_list_instance.to_dict()
# create an instance of CustomRuleList from a dict
custom_rule_list_from_dict = CustomRuleList.from_dict(custom_rule_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



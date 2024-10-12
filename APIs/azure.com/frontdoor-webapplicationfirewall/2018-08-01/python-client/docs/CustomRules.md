# CustomRules

Defines contents of custom rules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[CustomRule]**](CustomRule.md) | List of rules | [optional] 

## Example

```python
from openapi_client.models.custom_rules import CustomRules

# TODO update the JSON string below
json = "{}"
# create an instance of CustomRules from a JSON string
custom_rules_instance = CustomRules.from_json(json)
# print the JSON string representation of the object
print(CustomRules.to_json())

# convert the object into a dict
custom_rules_dict = custom_rules_instance.to_dict()
# create an instance of CustomRules from a dict
custom_rules_from_dict = CustomRules.from_dict(custom_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



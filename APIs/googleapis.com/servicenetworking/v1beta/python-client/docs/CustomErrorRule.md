# CustomErrorRule

A custom error rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_error_type** | **bool** | Mark this message as possible payload in error response. Otherwise, objects of this type will be filtered when they appear in error payload. | [optional] 
**selector** | **str** | Selects messages to which this rule applies. Refer to selector for syntax details. | [optional] 

## Example

```python
from openapi_client.models.custom_error_rule import CustomErrorRule

# TODO update the JSON string below
json = "{}"
# create an instance of CustomErrorRule from a JSON string
custom_error_rule_instance = CustomErrorRule.from_json(json)
# print the JSON string representation of the object
print(CustomErrorRule.to_json())

# convert the object into a dict
custom_error_rule_dict = custom_error_rule_instance.to_dict()
# create an instance of CustomErrorRule from a dict
custom_error_rule_from_dict = CustomErrorRule.from_dict(custom_error_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



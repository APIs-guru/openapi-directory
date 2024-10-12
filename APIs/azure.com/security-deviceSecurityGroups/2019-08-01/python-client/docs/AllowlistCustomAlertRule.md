# AllowlistCustomAlertRule

A custom alert rule that checks if a value (depends on the custom alert type) is allowed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowlist_values** | **List[str]** | The values to allow. The format of the values depends on the rule type. | 
**rule_type** | **str** | The type of the custom alert rule. | [optional] 
**value_type** | **str** | The value type of the items in the list. | [optional] [readonly] 
**description** | **str** | The description of the custom alert. | [optional] [readonly] 
**display_name** | **str** | The display name of the custom alert. | [optional] [readonly] 
**is_enabled** | **bool** | Status of the custom alert. | 

## Example

```python
from openapi_client.models.allowlist_custom_alert_rule import AllowlistCustomAlertRule

# TODO update the JSON string below
json = "{}"
# create an instance of AllowlistCustomAlertRule from a JSON string
allowlist_custom_alert_rule_instance = AllowlistCustomAlertRule.from_json(json)
# print the JSON string representation of the object
print(AllowlistCustomAlertRule.to_json())

# convert the object into a dict
allowlist_custom_alert_rule_dict = allowlist_custom_alert_rule_instance.to_dict()
# create an instance of AllowlistCustomAlertRule from a dict
allowlist_custom_alert_rule_from_dict = AllowlistCustomAlertRule.from_dict(allowlist_custom_alert_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



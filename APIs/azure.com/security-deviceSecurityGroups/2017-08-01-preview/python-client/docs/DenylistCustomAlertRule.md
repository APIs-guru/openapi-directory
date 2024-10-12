# DenylistCustomAlertRule

A custom alert rule that checks if a value (depends on the custom alert type) is denied

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**denylist_values** | **List[str]** | The values to deny. The format of the values depends on the rule type. | 
**value_type** | **str** | The value type of the items in the list | [optional] [readonly] 
**description** | **str** | The description of the custom alert. | [optional] [readonly] 
**display_name** | **str** | The display name of the custom alert. | [optional] [readonly] 
**is_enabled** | **bool** | Whether the custom alert is enabled. | 
**rule_type** | **str** | The type of the custom alert rule. | 

## Example

```python
from openapi_client.models.denylist_custom_alert_rule import DenylistCustomAlertRule

# TODO update the JSON string below
json = "{}"
# create an instance of DenylistCustomAlertRule from a JSON string
denylist_custom_alert_rule_instance = DenylistCustomAlertRule.from_json(json)
# print the JSON string representation of the object
print(DenylistCustomAlertRule.to_json())

# convert the object into a dict
denylist_custom_alert_rule_dict = denylist_custom_alert_rule_instance.to_dict()
# create an instance of DenylistCustomAlertRule from a dict
denylist_custom_alert_rule_from_dict = DenylistCustomAlertRule.from_dict(denylist_custom_alert_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



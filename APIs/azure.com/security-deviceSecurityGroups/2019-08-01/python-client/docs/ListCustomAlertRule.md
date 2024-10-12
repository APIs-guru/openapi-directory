# ListCustomAlertRule

A List custom alert rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value_type** | **str** | The value type of the items in the list. | [optional] [readonly] 
**description** | **str** | The description of the custom alert. | [optional] [readonly] 
**display_name** | **str** | The display name of the custom alert. | [optional] [readonly] 
**is_enabled** | **bool** | Status of the custom alert. | 
**rule_type** | **str** | The type of the custom alert rule. | 

## Example

```python
from openapi_client.models.list_custom_alert_rule import ListCustomAlertRule

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomAlertRule from a JSON string
list_custom_alert_rule_instance = ListCustomAlertRule.from_json(json)
# print the JSON string representation of the object
print(ListCustomAlertRule.to_json())

# convert the object into a dict
list_custom_alert_rule_dict = list_custom_alert_rule_instance.to_dict()
# create an instance of ListCustomAlertRule from a dict
list_custom_alert_rule_from_dict = ListCustomAlertRule.from_dict(list_custom_alert_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



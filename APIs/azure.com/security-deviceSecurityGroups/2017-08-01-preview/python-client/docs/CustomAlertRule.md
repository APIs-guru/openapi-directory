# CustomAlertRule

A custom alert rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the custom alert. | [optional] [readonly] 
**display_name** | **str** | The display name of the custom alert. | [optional] [readonly] 
**is_enabled** | **bool** | Whether the custom alert is enabled. | 
**rule_type** | **str** | The type of the custom alert rule. | 

## Example

```python
from openapi_client.models.custom_alert_rule import CustomAlertRule

# TODO update the JSON string below
json = "{}"
# create an instance of CustomAlertRule from a JSON string
custom_alert_rule_instance = CustomAlertRule.from_json(json)
# print the JSON string representation of the object
print(CustomAlertRule.to_json())

# convert the object into a dict
custom_alert_rule_dict = custom_alert_rule_instance.to_dict()
# create an instance of CustomAlertRule from a dict
custom_alert_rule_from_dict = CustomAlertRule.from_dict(custom_alert_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ThresholdCustomAlertRule

A custom alert rule that checks if a value (depends on the custom alert type) is within the given range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_threshold** | **int** | The maximum threshold. | 
**min_threshold** | **int** | The minimum threshold. | 
**description** | **str** | The description of the custom alert. | [optional] [readonly] 
**display_name** | **str** | The display name of the custom alert. | [optional] [readonly] 
**is_enabled** | **bool** | Status of the custom alert. | 
**rule_type** | **str** | The type of the custom alert rule. | 

## Example

```python
from openapi_client.models.threshold_custom_alert_rule import ThresholdCustomAlertRule

# TODO update the JSON string below
json = "{}"
# create an instance of ThresholdCustomAlertRule from a JSON string
threshold_custom_alert_rule_instance = ThresholdCustomAlertRule.from_json(json)
# print the JSON string representation of the object
print(ThresholdCustomAlertRule.to_json())

# convert the object into a dict
threshold_custom_alert_rule_dict = threshold_custom_alert_rule_instance.to_dict()
# create an instance of ThresholdCustomAlertRule from a dict
threshold_custom_alert_rule_from_dict = ThresholdCustomAlertRule.from_dict(threshold_custom_alert_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



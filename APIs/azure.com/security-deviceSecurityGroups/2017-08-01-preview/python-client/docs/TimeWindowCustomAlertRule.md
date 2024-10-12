# TimeWindowCustomAlertRule

A custom alert rule that checks if the number of activities (depends on the custom alert type) in a time window is within the given range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule_type** | **str** | The type of the custom alert rule. | [optional] 
**time_window_size** | **str** | The time window size in iso8601 format. | 
**description** | **str** | The description of the custom alert. | [optional] [readonly] 
**display_name** | **str** | The display name of the custom alert. | [optional] [readonly] 
**is_enabled** | **bool** | Whether the custom alert is enabled. | 
**max_threshold** | **int** | The maximum threshold. | 
**min_threshold** | **int** | The minimum threshold. | 

## Example

```python
from openapi_client.models.time_window_custom_alert_rule import TimeWindowCustomAlertRule

# TODO update the JSON string below
json = "{}"
# create an instance of TimeWindowCustomAlertRule from a JSON string
time_window_custom_alert_rule_instance = TimeWindowCustomAlertRule.from_json(json)
# print the JSON string representation of the object
print(TimeWindowCustomAlertRule.to_json())

# convert the object into a dict
time_window_custom_alert_rule_dict = time_window_custom_alert_rule_instance.to_dict()
# create an instance of TimeWindowCustomAlertRule from a dict
time_window_custom_alert_rule_from_dict = TimeWindowCustomAlertRule.from_dict(time_window_custom_alert_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



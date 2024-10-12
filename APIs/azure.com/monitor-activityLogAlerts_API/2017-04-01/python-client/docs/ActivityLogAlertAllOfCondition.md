# ActivityLogAlertAllOfCondition

An Activity Log alert condition that is met when all its member conditions are met.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_of** | [**List[ActivityLogAlertLeafCondition]**](ActivityLogAlertLeafCondition.md) | The list of activity log alert conditions. | 

## Example

```python
from openapi_client.models.activity_log_alert_all_of_condition import ActivityLogAlertAllOfCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogAlertAllOfCondition from a JSON string
activity_log_alert_all_of_condition_instance = ActivityLogAlertAllOfCondition.from_json(json)
# print the JSON string representation of the object
print(ActivityLogAlertAllOfCondition.to_json())

# convert the object into a dict
activity_log_alert_all_of_condition_dict = activity_log_alert_all_of_condition_instance.to_dict()
# create an instance of ActivityLogAlertAllOfCondition from a dict
activity_log_alert_all_of_condition_from_dict = ActivityLogAlertAllOfCondition.from_dict(activity_log_alert_all_of_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



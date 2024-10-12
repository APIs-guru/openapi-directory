# ActivityLogAlert

An Azure activity log alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**ActivityLogAlertActionList**](ActivityLogAlertActionList.md) |  | 
**condition** | [**ActivityLogAlertAllOfCondition**](ActivityLogAlertAllOfCondition.md) |  | 
**description** | **str** | A description of this activity log alert. | [optional] 
**enabled** | **bool** | Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated. | [optional] [default to True]
**scopes** | **List[str]** | A list of resourceIds that will be used as prefixes. The alert will only apply to activityLogs with resourceIds that fall under one of these prefixes. This list must include at least one item. | 

## Example

```python
from openapi_client.models.activity_log_alert import ActivityLogAlert

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogAlert from a JSON string
activity_log_alert_instance = ActivityLogAlert.from_json(json)
# print the JSON string representation of the object
print(ActivityLogAlert.to_json())

# convert the object into a dict
activity_log_alert_dict = activity_log_alert_instance.to_dict()
# create an instance of ActivityLogAlert from a dict
activity_log_alert_from_dict = ActivityLogAlert.from_dict(activity_log_alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



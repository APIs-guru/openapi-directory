# ActivityLogAlertActionList

A list of activity log alert actions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_groups** | [**List[ActivityLogAlertActionGroup]**](ActivityLogAlertActionGroup.md) | The list of activity log alerts. | [optional] 

## Example

```python
from openapi_client.models.activity_log_alert_action_list import ActivityLogAlertActionList

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogAlertActionList from a JSON string
activity_log_alert_action_list_instance = ActivityLogAlertActionList.from_json(json)
# print the JSON string representation of the object
print(ActivityLogAlertActionList.to_json())

# convert the object into a dict
activity_log_alert_action_list_dict = activity_log_alert_action_list_instance.to_dict()
# create an instance of ActivityLogAlertActionList from a dict
activity_log_alert_action_list_from_dict = ActivityLogAlertActionList.from_dict(activity_log_alert_action_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



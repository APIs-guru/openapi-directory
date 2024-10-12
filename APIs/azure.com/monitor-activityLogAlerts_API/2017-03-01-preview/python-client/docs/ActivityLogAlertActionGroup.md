# ActivityLogAlertActionGroup

A pointer to an Azure Action Group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_group_id** | **str** | The resourceId of the action group. This cannot be null or empty. | 
**webhook_properties** | **object** | The dictionary of custom properties to include with the post operation. These data are appended to the webhook payload. | [optional] 

## Example

```python
from openapi_client.models.activity_log_alert_action_group import ActivityLogAlertActionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogAlertActionGroup from a JSON string
activity_log_alert_action_group_instance = ActivityLogAlertActionGroup.from_json(json)
# print the JSON string representation of the object
print(ActivityLogAlertActionGroup.to_json())

# convert the object into a dict
activity_log_alert_action_group_dict = activity_log_alert_action_group_instance.to_dict()
# create an instance of ActivityLogAlertActionGroup from a dict
activity_log_alert_action_group_from_dict = ActivityLogAlertActionGroup.from_dict(activity_log_alert_action_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



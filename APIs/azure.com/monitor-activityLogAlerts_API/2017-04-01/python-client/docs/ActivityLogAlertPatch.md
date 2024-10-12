# ActivityLogAlertPatch

An Azure activity log alert for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated. | [optional] [default to True]

## Example

```python
from openapi_client.models.activity_log_alert_patch import ActivityLogAlertPatch

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogAlertPatch from a JSON string
activity_log_alert_patch_instance = ActivityLogAlertPatch.from_json(json)
# print the JSON string representation of the object
print(ActivityLogAlertPatch.to_json())

# convert the object into a dict
activity_log_alert_patch_dict = activity_log_alert_patch_instance.to_dict()
# create an instance of ActivityLogAlertPatch from a dict
activity_log_alert_patch_from_dict = ActivityLogAlertPatch.from_dict(activity_log_alert_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



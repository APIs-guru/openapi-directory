# ActivityLogAlertPatchBody

An activity log alert object for the body of patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ActivityLogAlertPatch**](ActivityLogAlertPatch.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.activity_log_alert_patch_body import ActivityLogAlertPatchBody

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogAlertPatchBody from a JSON string
activity_log_alert_patch_body_instance = ActivityLogAlertPatchBody.from_json(json)
# print the JSON string representation of the object
print(ActivityLogAlertPatchBody.to_json())

# convert the object into a dict
activity_log_alert_patch_body_dict = activity_log_alert_patch_body_instance.to_dict()
# create an instance of ActivityLogAlertPatchBody from a dict
activity_log_alert_patch_body_from_dict = ActivityLogAlertPatchBody.from_dict(activity_log_alert_patch_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



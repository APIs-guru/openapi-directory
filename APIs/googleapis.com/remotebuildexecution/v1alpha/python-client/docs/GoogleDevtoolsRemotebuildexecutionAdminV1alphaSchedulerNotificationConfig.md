# GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig

Defines configurations for an instance's scheduler notifications, where a target Pub/Sub topic will be notified whenever a task (e.g. an action or reservation) completes on this instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | **str** | The Pub/Sub topic resource name to issue notifications to. Note that the topic does not need to be owned by the same project as this instance. Format: &#x60;projects//topics/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_scheduler_notification_config import GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_scheduler_notification_config_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_scheduler_notification_config_dict = google_devtools_remotebuildexecution_admin_v1alpha_scheduler_notification_config_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig from a dict
google_devtools_remotebuildexecution_admin_v1alpha_scheduler_notification_config_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_scheduler_notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



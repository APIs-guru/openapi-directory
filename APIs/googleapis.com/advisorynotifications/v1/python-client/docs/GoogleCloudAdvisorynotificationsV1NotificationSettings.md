# GoogleCloudAdvisorynotificationsV1NotificationSettings

Settings for each NotificationType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the associated NotificationType is enabled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_advisorynotifications_v1_notification_settings import GoogleCloudAdvisorynotificationsV1NotificationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAdvisorynotificationsV1NotificationSettings from a JSON string
google_cloud_advisorynotifications_v1_notification_settings_instance = GoogleCloudAdvisorynotificationsV1NotificationSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAdvisorynotificationsV1NotificationSettings.to_json())

# convert the object into a dict
google_cloud_advisorynotifications_v1_notification_settings_dict = google_cloud_advisorynotifications_v1_notification_settings_instance.to_dict()
# create an instance of GoogleCloudAdvisorynotificationsV1NotificationSettings from a dict
google_cloud_advisorynotifications_v1_notification_settings_from_dict = GoogleCloudAdvisorynotificationsV1NotificationSettings.from_dict(google_cloud_advisorynotifications_v1_notification_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



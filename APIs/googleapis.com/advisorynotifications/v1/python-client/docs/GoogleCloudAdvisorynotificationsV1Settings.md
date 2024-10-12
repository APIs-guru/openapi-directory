# GoogleCloudAdvisorynotificationsV1Settings

Settings for Advisory Notifications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Required. Fingerprint for optimistic concurrency returned in Get requests. Must be provided for Update requests. If the value provided does not match the value known to the server, ABORTED will be thrown, and the client should retry the read-modify-write cycle. | [optional] 
**name** | **str** | Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings. | [optional] 
**notification_settings** | [**Dict[str, GoogleCloudAdvisorynotificationsV1NotificationSettings]**](GoogleCloudAdvisorynotificationsV1NotificationSettings.md) | Required. Map of each notification type and its settings to get/set all settings at once. The server will validate the value for each notification type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_advisorynotifications_v1_settings import GoogleCloudAdvisorynotificationsV1Settings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAdvisorynotificationsV1Settings from a JSON string
google_cloud_advisorynotifications_v1_settings_instance = GoogleCloudAdvisorynotificationsV1Settings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAdvisorynotificationsV1Settings.to_json())

# convert the object into a dict
google_cloud_advisorynotifications_v1_settings_dict = google_cloud_advisorynotifications_v1_settings_instance.to_dict()
# create an instance of GoogleCloudAdvisorynotificationsV1Settings from a dict
google_cloud_advisorynotifications_v1_settings_from_dict = GoogleCloudAdvisorynotificationsV1Settings.from_dict(google_cloud_advisorynotifications_v1_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



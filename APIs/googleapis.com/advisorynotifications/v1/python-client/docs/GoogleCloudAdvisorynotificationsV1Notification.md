# GoogleCloudAdvisorynotificationsV1Notification

A notification object for notifying customers about security and privacy issues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time the notification was created. | [optional] [readonly] 
**messages** | [**List[GoogleCloudAdvisorynotificationsV1Message]**](GoogleCloudAdvisorynotificationsV1Message.md) | A list of messages in the notification. | [optional] 
**name** | **str** | The resource name of the notification. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{project}/locations/{location}/notifications/{notification}. | [optional] 
**notification_type** | **str** | Type of notification | [optional] 
**subject** | [**GoogleCloudAdvisorynotificationsV1Subject**](GoogleCloudAdvisorynotificationsV1Subject.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_advisorynotifications_v1_notification import GoogleCloudAdvisorynotificationsV1Notification

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAdvisorynotificationsV1Notification from a JSON string
google_cloud_advisorynotifications_v1_notification_instance = GoogleCloudAdvisorynotificationsV1Notification.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAdvisorynotificationsV1Notification.to_json())

# convert the object into a dict
google_cloud_advisorynotifications_v1_notification_dict = google_cloud_advisorynotifications_v1_notification_instance.to_dict()
# create an instance of GoogleCloudAdvisorynotificationsV1Notification from a dict
google_cloud_advisorynotifications_v1_notification_from_dict = GoogleCloudAdvisorynotificationsV1Notification.from_dict(google_cloud_advisorynotifications_v1_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



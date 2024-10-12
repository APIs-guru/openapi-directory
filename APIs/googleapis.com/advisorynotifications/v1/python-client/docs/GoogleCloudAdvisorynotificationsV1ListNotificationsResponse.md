# GoogleCloudAdvisorynotificationsV1ListNotificationsResponse

Response of ListNotifications endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**notifications** | [**List[GoogleCloudAdvisorynotificationsV1Notification]**](GoogleCloudAdvisorynotificationsV1Notification.md) | List of notifications under a given parent. | [optional] 
**total_size** | **int** | Estimation of a total number of notifications. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_advisorynotifications_v1_list_notifications_response import GoogleCloudAdvisorynotificationsV1ListNotificationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAdvisorynotificationsV1ListNotificationsResponse from a JSON string
google_cloud_advisorynotifications_v1_list_notifications_response_instance = GoogleCloudAdvisorynotificationsV1ListNotificationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAdvisorynotificationsV1ListNotificationsResponse.to_json())

# convert the object into a dict
google_cloud_advisorynotifications_v1_list_notifications_response_dict = google_cloud_advisorynotifications_v1_list_notifications_response_instance.to_dict()
# create an instance of GoogleCloudAdvisorynotificationsV1ListNotificationsResponse from a dict
google_cloud_advisorynotifications_v1_list_notifications_response_from_dict = GoogleCloudAdvisorynotificationsV1ListNotificationsResponse.from_dict(google_cloud_advisorynotifications_v1_list_notifications_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



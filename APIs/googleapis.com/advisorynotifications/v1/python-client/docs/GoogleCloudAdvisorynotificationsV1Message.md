# GoogleCloudAdvisorynotificationsV1Message

A message which contains notification details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[GoogleCloudAdvisorynotificationsV1Attachment]**](GoogleCloudAdvisorynotificationsV1Attachment.md) | The attachments to download. | [optional] 
**body** | [**GoogleCloudAdvisorynotificationsV1MessageBody**](GoogleCloudAdvisorynotificationsV1MessageBody.md) |  | [optional] 
**create_time** | **str** | The Message creation timestamp. | [optional] 
**localization_time** | **str** | Time when Message was localized | [optional] 

## Example

```python
from openapi_client.models.google_cloud_advisorynotifications_v1_message import GoogleCloudAdvisorynotificationsV1Message

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAdvisorynotificationsV1Message from a JSON string
google_cloud_advisorynotifications_v1_message_instance = GoogleCloudAdvisorynotificationsV1Message.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAdvisorynotificationsV1Message.to_json())

# convert the object into a dict
google_cloud_advisorynotifications_v1_message_dict = google_cloud_advisorynotifications_v1_message_instance.to_dict()
# create an instance of GoogleCloudAdvisorynotificationsV1Message from a dict
google_cloud_advisorynotifications_v1_message_from_dict = GoogleCloudAdvisorynotificationsV1Message.from_dict(google_cloud_advisorynotifications_v1_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



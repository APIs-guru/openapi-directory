# GoogleCloudAdvisorynotificationsV1MessageBody

A message body containing text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | [**GoogleCloudAdvisorynotificationsV1Text**](GoogleCloudAdvisorynotificationsV1Text.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_advisorynotifications_v1_message_body import GoogleCloudAdvisorynotificationsV1MessageBody

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAdvisorynotificationsV1MessageBody from a JSON string
google_cloud_advisorynotifications_v1_message_body_instance = GoogleCloudAdvisorynotificationsV1MessageBody.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAdvisorynotificationsV1MessageBody.to_json())

# convert the object into a dict
google_cloud_advisorynotifications_v1_message_body_dict = google_cloud_advisorynotifications_v1_message_body_instance.to_dict()
# create an instance of GoogleCloudAdvisorynotificationsV1MessageBody from a dict
google_cloud_advisorynotifications_v1_message_body_from_dict = GoogleCloudAdvisorynotificationsV1MessageBody.from_dict(google_cloud_advisorynotifications_v1_message_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



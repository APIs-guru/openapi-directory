# GoogleCloudAdvisorynotificationsV1Attachment

Attachment with specific information about the issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csv** | [**GoogleCloudAdvisorynotificationsV1Csv**](GoogleCloudAdvisorynotificationsV1Csv.md) |  | [optional] 
**display_name** | **str** | The title of the attachment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_advisorynotifications_v1_attachment import GoogleCloudAdvisorynotificationsV1Attachment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAdvisorynotificationsV1Attachment from a JSON string
google_cloud_advisorynotifications_v1_attachment_instance = GoogleCloudAdvisorynotificationsV1Attachment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAdvisorynotificationsV1Attachment.to_json())

# convert the object into a dict
google_cloud_advisorynotifications_v1_attachment_dict = google_cloud_advisorynotifications_v1_attachment_instance.to_dict()
# create an instance of GoogleCloudAdvisorynotificationsV1Attachment from a dict
google_cloud_advisorynotifications_v1_attachment_from_dict = GoogleCloudAdvisorynotificationsV1Attachment.from_dict(google_cloud_advisorynotifications_v1_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



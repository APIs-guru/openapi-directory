# GoogleCloudAdvisorynotificationsV1Subject

A subject line of a notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | [**GoogleCloudAdvisorynotificationsV1Text**](GoogleCloudAdvisorynotificationsV1Text.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_advisorynotifications_v1_subject import GoogleCloudAdvisorynotificationsV1Subject

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAdvisorynotificationsV1Subject from a JSON string
google_cloud_advisorynotifications_v1_subject_instance = GoogleCloudAdvisorynotificationsV1Subject.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAdvisorynotificationsV1Subject.to_json())

# convert the object into a dict
google_cloud_advisorynotifications_v1_subject_dict = google_cloud_advisorynotifications_v1_subject_instance.to_dict()
# create an instance of GoogleCloudAdvisorynotificationsV1Subject from a dict
google_cloud_advisorynotifications_v1_subject_from_dict = GoogleCloudAdvisorynotificationsV1Subject.from_dict(google_cloud_advisorynotifications_v1_subject_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



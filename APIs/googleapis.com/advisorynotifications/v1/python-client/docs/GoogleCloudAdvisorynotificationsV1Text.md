# GoogleCloudAdvisorynotificationsV1Text

A text object containing the English text and its localized copies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**en_text** | **str** | The English copy. | [optional] 
**localization_state** | **str** | Status of the localization. | [optional] 
**localized_text** | **str** | The requested localized copy (if applicable). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_advisorynotifications_v1_text import GoogleCloudAdvisorynotificationsV1Text

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAdvisorynotificationsV1Text from a JSON string
google_cloud_advisorynotifications_v1_text_instance = GoogleCloudAdvisorynotificationsV1Text.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAdvisorynotificationsV1Text.to_json())

# convert the object into a dict
google_cloud_advisorynotifications_v1_text_dict = google_cloud_advisorynotifications_v1_text_instance.to_dict()
# create an instance of GoogleCloudAdvisorynotificationsV1Text from a dict
google_cloud_advisorynotifications_v1_text_from_dict = GoogleCloudAdvisorynotificationsV1Text.from_dict(google_cloud_advisorynotifications_v1_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



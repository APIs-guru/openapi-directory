# GoogleCloudContactcenterinsightsV1alpha1GcsSource

A Cloud Storage source of conversation data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_uri** | **str** | Cloud Storage URI that points to a file that contains the conversation audio. | [optional] 
**transcript_uri** | **str** | Immutable. Cloud Storage URI that points to a file that contains the conversation transcript. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_gcs_source import GoogleCloudContactcenterinsightsV1alpha1GcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1GcsSource from a JSON string
google_cloud_contactcenterinsights_v1alpha1_gcs_source_instance = GoogleCloudContactcenterinsightsV1alpha1GcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1GcsSource.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_gcs_source_dict = google_cloud_contactcenterinsights_v1alpha1_gcs_source_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1GcsSource from a dict
google_cloud_contactcenterinsights_v1alpha1_gcs_source_from_dict = GoogleCloudContactcenterinsightsV1alpha1GcsSource.from_dict(google_cloud_contactcenterinsights_v1alpha1_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



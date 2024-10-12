# GoogleCloudAiplatformV1GcsSource

The Google Cloud Storage location for the input content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uris** | **List[str]** | Required. Google Cloud Storage URI(-s) to the input file(s). May contain wildcards. For more information on wildcards, see https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_gcs_source import GoogleCloudAiplatformV1GcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1GcsSource from a JSON string
google_cloud_aiplatform_v1_gcs_source_instance = GoogleCloudAiplatformV1GcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1GcsSource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_gcs_source_dict = google_cloud_aiplatform_v1_gcs_source_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1GcsSource from a dict
google_cloud_aiplatform_v1_gcs_source_from_dict = GoogleCloudAiplatformV1GcsSource.from_dict(google_cloud_aiplatform_v1_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



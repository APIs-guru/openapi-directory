# GoogleCloudDatalabelingV1beta1GcsSource

Source of the Cloud Storage file to be imported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_uri** | **str** | Required. The input URI of source file. This must be a Cloud Storage path (&#x60;gs://...&#x60;). | [optional] 
**mime_type** | **str** | Required. The format of the source file. Only \&quot;text/csv\&quot; is supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_gcs_source import GoogleCloudDatalabelingV1beta1GcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1GcsSource from a JSON string
google_cloud_datalabeling_v1beta1_gcs_source_instance = GoogleCloudDatalabelingV1beta1GcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1GcsSource.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_gcs_source_dict = google_cloud_datalabeling_v1beta1_gcs_source_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1GcsSource from a dict
google_cloud_datalabeling_v1beta1_gcs_source_from_dict = GoogleCloudDatalabelingV1beta1GcsSource.from_dict(google_cloud_datalabeling_v1beta1_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



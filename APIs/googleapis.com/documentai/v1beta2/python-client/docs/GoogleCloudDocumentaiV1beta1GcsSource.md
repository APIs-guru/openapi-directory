# GoogleCloudDocumentaiV1beta1GcsSource

The Google Cloud Storage location where the input file will be read from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta1_gcs_source import GoogleCloudDocumentaiV1beta1GcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta1GcsSource from a JSON string
google_cloud_documentai_v1beta1_gcs_source_instance = GoogleCloudDocumentaiV1beta1GcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta1GcsSource.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta1_gcs_source_dict = google_cloud_documentai_v1beta1_gcs_source_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta1GcsSource from a dict
google_cloud_documentai_v1beta1_gcs_source_from_dict = GoogleCloudDocumentaiV1beta1GcsSource.from_dict(google_cloud_documentai_v1beta1_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



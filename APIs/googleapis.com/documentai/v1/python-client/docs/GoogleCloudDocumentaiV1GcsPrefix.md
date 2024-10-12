# GoogleCloudDocumentaiV1GcsPrefix

Specifies all documents on Cloud Storage with a common prefix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_uri_prefix** | **str** | The URI prefix. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_gcs_prefix import GoogleCloudDocumentaiV1GcsPrefix

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1GcsPrefix from a JSON string
google_cloud_documentai_v1_gcs_prefix_instance = GoogleCloudDocumentaiV1GcsPrefix.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1GcsPrefix.to_json())

# convert the object into a dict
google_cloud_documentai_v1_gcs_prefix_dict = google_cloud_documentai_v1_gcs_prefix_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1GcsPrefix from a dict
google_cloud_documentai_v1_gcs_prefix_from_dict = GoogleCloudDocumentaiV1GcsPrefix.from_dict(google_cloud_documentai_v1_gcs_prefix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudDocumentaiV1beta2OutputConfig

The desired output location and metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | [**GoogleCloudDocumentaiV1beta2GcsDestination**](GoogleCloudDocumentaiV1beta2GcsDestination.md) |  | [optional] 
**pages_per_shard** | **int** | The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If &#x60;pages_per_shard&#x60; &#x3D; 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard &#x3D; 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_output_config import GoogleCloudDocumentaiV1beta2OutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2OutputConfig from a JSON string
google_cloud_documentai_v1beta2_output_config_instance = GoogleCloudDocumentaiV1beta2OutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2OutputConfig.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_output_config_dict = google_cloud_documentai_v1beta2_output_config_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2OutputConfig from a dict
google_cloud_documentai_v1beta2_output_config_from_dict = GoogleCloudDocumentaiV1beta2OutputConfig.from_dict(google_cloud_documentai_v1beta2_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



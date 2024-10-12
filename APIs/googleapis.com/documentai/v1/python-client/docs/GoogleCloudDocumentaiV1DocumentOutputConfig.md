# GoogleCloudDocumentaiV1DocumentOutputConfig

Config that controls the output of documents. All documents will be written as a JSON file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_output_config** | [**GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig**](GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_output_config import GoogleCloudDocumentaiV1DocumentOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentOutputConfig from a JSON string
google_cloud_documentai_v1_document_output_config_instance = GoogleCloudDocumentaiV1DocumentOutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentOutputConfig.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_output_config_dict = google_cloud_documentai_v1_document_output_config_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentOutputConfig from a dict
google_cloud_documentai_v1_document_output_config_from_dict = GoogleCloudDocumentaiV1DocumentOutputConfig.from_dict(google_cloud_documentai_v1_document_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



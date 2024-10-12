# GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig

The configuration used when outputting documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_mask** | **str** | Specifies which fields to include in the output documents. Only supports top level document and pages field so it must be in the form of &#x60;{document_field_name}&#x60; or &#x60;pages.{page_field_name}&#x60;. | [optional] 
**gcs_uri** | **str** | The Cloud Storage uri (a directory) of the output. | [optional] 
**sharding_config** | [**GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig**](GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_output_config_gcs_output_config import GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig from a JSON string
google_cloud_documentai_v1beta3_document_output_config_gcs_output_config_instance = GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_output_config_gcs_output_config_dict = google_cloud_documentai_v1beta3_document_output_config_gcs_output_config_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig from a dict
google_cloud_documentai_v1beta3_document_output_config_gcs_output_config_from_dict = GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig.from_dict(google_cloud_documentai_v1beta3_document_output_config_gcs_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig

The message for input config in batch process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | **str** | The Cloud Storage location as the source of the document. | [optional] 
**mime_type** | **str** | An IANA published [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml) of the input. If the input is a raw document, refer to [supported file types](https://cloud.google.com/document-ai/docs/file-types) for the list of media types. If the input is a Document, the type should be &#x60;application/json&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_batch_process_request_batch_input_config import GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig from a JSON string
google_cloud_documentai_v1beta3_batch_process_request_batch_input_config_instance = GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_batch_process_request_batch_input_config_dict = google_cloud_documentai_v1beta3_batch_process_request_batch_input_config_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig from a dict
google_cloud_documentai_v1beta3_batch_process_request_batch_input_config_from_dict = GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig.from_dict(google_cloud_documentai_v1beta3_batch_process_request_batch_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



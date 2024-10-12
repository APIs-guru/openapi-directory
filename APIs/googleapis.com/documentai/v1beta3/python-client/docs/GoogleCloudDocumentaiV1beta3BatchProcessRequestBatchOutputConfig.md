# GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig

The output configuration in the BatchProcessDocuments method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | **str** | The output Cloud Storage directory to put the processed documents. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_batch_process_request_batch_output_config import GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig from a JSON string
google_cloud_documentai_v1beta3_batch_process_request_batch_output_config_instance = GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_batch_process_request_batch_output_config_dict = google_cloud_documentai_v1beta3_batch_process_request_batch_output_config_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig from a dict
google_cloud_documentai_v1beta3_batch_process_request_batch_output_config_from_dict = GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig.from_dict(google_cloud_documentai_v1beta3_batch_process_request_batch_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



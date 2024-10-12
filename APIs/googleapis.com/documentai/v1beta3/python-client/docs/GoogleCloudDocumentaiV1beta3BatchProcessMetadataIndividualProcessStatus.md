# GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus

The status of a each individual document in the batch process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**human_review_operation** | **str** | The name of the operation triggered by the processed document. If the human review process isn&#39;t triggered, this field will be empty. It has the same response type and metadata as the long-running operation returned by the ReviewDocument method. | [optional] 
**human_review_status** | [**GoogleCloudDocumentaiV1beta3HumanReviewStatus**](GoogleCloudDocumentaiV1beta3HumanReviewStatus.md) |  | [optional] 
**input_gcs_source** | **str** | The source of the document, same as the input_gcs_source field in the request when the batch process started. | [optional] 
**output_gcs_destination** | **str** | The Cloud Storage output destination (in the request as DocumentOutputConfig.GcsOutputConfig.gcs_uri) of the processed document if it was successful, otherwise empty. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_batch_process_metadata_individual_process_status import GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus from a JSON string
google_cloud_documentai_v1beta3_batch_process_metadata_individual_process_status_instance = GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_batch_process_metadata_individual_process_status_dict = google_cloud_documentai_v1beta3_batch_process_metadata_individual_process_status_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus from a dict
google_cloud_documentai_v1beta3_batch_process_metadata_individual_process_status_from_dict = GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus.from_dict(google_cloud_documentai_v1beta3_batch_process_metadata_individual_process_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



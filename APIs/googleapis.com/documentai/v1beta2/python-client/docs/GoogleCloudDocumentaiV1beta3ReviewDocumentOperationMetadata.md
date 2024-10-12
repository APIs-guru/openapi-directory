# GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata

The long-running operation metadata for the ReviewDocument method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_metadata** | [**GoogleCloudDocumentaiV1beta3CommonOperationMetadata**](GoogleCloudDocumentaiV1beta3CommonOperationMetadata.md) |  | [optional] 
**create_time** | **str** | The creation time of the operation. | [optional] 
**question_id** | **str** | The Crowd Compute question ID. | [optional] 
**state** | **str** | Used only when Operation.done is false. | [optional] 
**state_message** | **str** | A message providing more details about the current state of processing. For example, the error message if the operation is failed. | [optional] 
**update_time** | **str** | The last update time of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_review_document_operation_metadata import GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata from a JSON string
google_cloud_documentai_v1beta3_review_document_operation_metadata_instance = GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_review_document_operation_metadata_dict = google_cloud_documentai_v1beta3_review_document_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata from a dict
google_cloud_documentai_v1beta3_review_document_operation_metadata_from_dict = GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata.from_dict(google_cloud_documentai_v1beta3_review_document_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



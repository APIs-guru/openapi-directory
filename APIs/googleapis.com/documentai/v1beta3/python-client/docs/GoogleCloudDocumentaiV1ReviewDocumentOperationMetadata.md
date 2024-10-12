# GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata

The long-running operation metadata for the ReviewDocument method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_metadata** | [**GoogleCloudDocumentaiV1CommonOperationMetadata**](GoogleCloudDocumentaiV1CommonOperationMetadata.md) |  | [optional] 
**question_id** | **str** | The Crowd Compute question ID. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_review_document_operation_metadata import GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata from a JSON string
google_cloud_documentai_v1_review_document_operation_metadata_instance = GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_v1_review_document_operation_metadata_dict = google_cloud_documentai_v1_review_document_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata from a dict
google_cloud_documentai_v1_review_document_operation_metadata_from_dict = GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata.from_dict(google_cloud_documentai_v1_review_document_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



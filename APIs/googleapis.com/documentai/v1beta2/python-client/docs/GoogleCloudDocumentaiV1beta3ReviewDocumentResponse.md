# GoogleCloudDocumentaiV1beta3ReviewDocumentResponse

Response message for the ReviewDocument method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | **str** | The Cloud Storage uri for the human reviewed document if the review is succeeded. | [optional] 
**rejection_reason** | **str** | The reason why the review is rejected by reviewer. | [optional] 
**state** | **str** | The state of the review operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_review_document_response import GoogleCloudDocumentaiV1beta3ReviewDocumentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ReviewDocumentResponse from a JSON string
google_cloud_documentai_v1beta3_review_document_response_instance = GoogleCloudDocumentaiV1beta3ReviewDocumentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ReviewDocumentResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_review_document_response_dict = google_cloud_documentai_v1beta3_review_document_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ReviewDocumentResponse from a dict
google_cloud_documentai_v1beta3_review_document_response_from_dict = GoogleCloudDocumentaiV1beta3ReviewDocumentResponse.from_dict(google_cloud_documentai_v1beta3_review_document_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



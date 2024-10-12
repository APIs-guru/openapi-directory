# GoogleCloudDocumentaiV1ReviewDocumentRequest

Request message for the ReviewDocument method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_schema** | [**GoogleCloudDocumentaiV1DocumentSchema**](GoogleCloudDocumentaiV1DocumentSchema.md) |  | [optional] 
**enable_schema_validation** | **bool** | Whether the validation should be performed on the ad-hoc review request. | [optional] 
**inline_document** | [**GoogleCloudDocumentaiV1Document**](GoogleCloudDocumentaiV1Document.md) |  | [optional] 
**priority** | **str** | The priority of the human review task. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_review_document_request import GoogleCloudDocumentaiV1ReviewDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1ReviewDocumentRequest from a JSON string
google_cloud_documentai_v1_review_document_request_instance = GoogleCloudDocumentaiV1ReviewDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1ReviewDocumentRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1_review_document_request_dict = google_cloud_documentai_v1_review_document_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1ReviewDocumentRequest from a dict
google_cloud_documentai_v1_review_document_request_from_dict = GoogleCloudDocumentaiV1ReviewDocumentRequest.from_dict(google_cloud_documentai_v1_review_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



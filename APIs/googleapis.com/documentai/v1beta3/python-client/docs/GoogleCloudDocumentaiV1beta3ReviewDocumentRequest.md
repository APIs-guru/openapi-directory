# GoogleCloudDocumentaiV1beta3ReviewDocumentRequest

Request message for the ReviewDocument method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**GoogleCloudDocumentaiV1beta3Document**](GoogleCloudDocumentaiV1beta3Document.md) |  | [optional] 
**document_schema** | [**GoogleCloudDocumentaiV1beta3DocumentSchema**](GoogleCloudDocumentaiV1beta3DocumentSchema.md) |  | [optional] 
**enable_schema_validation** | **bool** | Whether the validation should be performed on the ad-hoc review request. | [optional] 
**inline_document** | [**GoogleCloudDocumentaiV1beta3Document**](GoogleCloudDocumentaiV1beta3Document.md) |  | [optional] 
**priority** | **str** | The priority of the human review task. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_review_document_request import GoogleCloudDocumentaiV1beta3ReviewDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ReviewDocumentRequest from a JSON string
google_cloud_documentai_v1beta3_review_document_request_instance = GoogleCloudDocumentaiV1beta3ReviewDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ReviewDocumentRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_review_document_request_dict = google_cloud_documentai_v1beta3_review_document_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ReviewDocumentRequest from a dict
google_cloud_documentai_v1beta3_review_document_request_from_dict = GoogleCloudDocumentaiV1beta3ReviewDocumentRequest.from_dict(google_cloud_documentai_v1beta3_review_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



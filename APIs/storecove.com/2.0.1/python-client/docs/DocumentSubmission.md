# DocumentSubmission

The document you want Storecove to send, with some meta-data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) | DEPRECATED. Use the attachments array inside the &#39;document&#39; property. An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding. | [optional] 
**create_primary_image** | **bool** | DEPRECATED. In the future we will no longer support creating PDF invoices. Whether or not to create a primary image (PDF) if one is not provided. For customers who started from April 1st 2023, the default is false. For customers who started before that, the default is true. | [optional] 
**document** | [**SendableDocument**](SendableDocument.md) |  | [optional] 
**idempotency_guid** | **str** | A guid that you generated for this DocumentSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed and any subsequent ones will trigger an HTTP 422 Unprocessable Entity response. | [optional] 
**legal_entity_id** | **int** | The id of the LegalEntity this document should be sent on behalf of. Either legalEntityId or receiveGuid is mandatory. | [optional] 
**receive_guid** | **str** | The GUID that was in the received_document webhook. Either legalEntityId or receiveGuid is mandatory. This field is used for sending response documents, such as InvoiceReponse and OrderResponse. | [optional] 
**routing** | [**Routing**](Routing.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_submission import DocumentSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSubmission from a JSON string
document_submission_instance = DocumentSubmission.from_json(json)
# print the JSON string representation of the object
print(DocumentSubmission.to_json())

# convert the object into a dict
document_submission_dict = document_submission_instance.to_dict()
# create an instance of DocumentSubmission from a dict
document_submission_from_dict = DocumentSubmission.from_dict(document_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# InvoiceSubmission

DEPRECATED. The invoice you want Storecove to process, with some meta-data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) | An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding. | [optional] 
**create_primary_image** | **bool** | DEPRECATED. In the future we will no longer support creating PDF invoices. Whether or not to create a primary image (PDF) if one is not provided. For customers who started from December 1st 2022, the default is false. For customers who started before that, the default is true. | [optional] 
**document** | **str** | DEPRECATED. Use attachments. | [optional] 
**document_url** | **str** | DEPRECATED. Use attachments. | [optional] 
**idempotency_guid** | **str** | A guid that you generated for this InvoiceSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed. | [optional] 
**invoice** | [**Invoice**](Invoice.md) |  | [optional] 
**invoice_data** | [**InvoiceData**](InvoiceData.md) |  | [optional] 
**invoice_recipient** | [**InvoiceRecipient**](InvoiceRecipient.md) |  | [optional] 
**legal_entity_id** | **int** | The id of the LegalEntity this invoice should be sent for. | [optional] 
**legal_supplier_id** | **int** | DEPRECATED. Use legalEntityId | [optional] 
**mode** | **str** | DEPRECATED. | [optional] 
**routing** | [**Routing**](Routing.md) |  | [optional] 
**supplier_id** | **int** | DEPRECATED. | [optional] 

## Example

```python
from openapi_client.models.invoice_submission import InvoiceSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSubmission from a JSON string
invoice_submission_instance = InvoiceSubmission.from_json(json)
# print the JSON string representation of the object
print(InvoiceSubmission.to_json())

# convert the object into a dict
invoice_submission_dict = invoice_submission_instance.to_dict()
# create an instance of InvoiceSubmission from a dict
invoice_submission_from_dict = InvoiceSubmission.from_dict(invoice_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DocumentInvoiceResponse

The invoice response to send or received.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clarifications** | [**List[InvoiceResponseClarification]**](InvoiceResponseClarification.md) | A list of clarifications why a received invoice was rejected (RE) or under query (UQ) and what action to take. | [optional] 
**effective_date** | **str** | The date when the status became effective. Format: yyyy-mm-dd. | [optional] 
**note** | **str** | A note to add to the invoice reponse | [optional] 
**response_code** | **str** | The response code. For details see https://docs.peppol.eu/poacc/upgrade-3/codelist/UNCL4343-T111/ | 

## Example

```python
from openapi_client.models.document_invoice_response import DocumentInvoiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentInvoiceResponse from a JSON string
document_invoice_response_instance = DocumentInvoiceResponse.from_json(json)
# print the JSON string representation of the object
print(DocumentInvoiceResponse.to_json())

# convert the object into a dict
document_invoice_response_dict = document_invoice_response_instance.to_dict()
# create an instance of DocumentInvoiceResponse from a dict
document_invoice_response_from_dict = DocumentInvoiceResponse.from_dict(document_invoice_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



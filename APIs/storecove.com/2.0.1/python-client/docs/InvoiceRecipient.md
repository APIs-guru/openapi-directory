# InvoiceRecipient

The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | The email addresses the invoice should be sent to if none of the other identifiers can be used | [optional] 
**public_identifiers** | [**List[PublicIdentifier]**](PublicIdentifier.md) | A list of public identifiers that uniquely identify this customer. | [optional] 

## Example

```python
from openapi_client.models.invoice_recipient import InvoiceRecipient

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceRecipient from a JSON string
invoice_recipient_instance = InvoiceRecipient.from_json(json)
# print the JSON string representation of the object
print(InvoiceRecipient.to_json())

# convert the object into a dict
invoice_recipient_dict = invoice_recipient_instance.to_dict()
# create an instance of InvoiceRecipient from a dict
invoice_recipient_from_dict = InvoiceRecipient.from_dict(invoice_recipient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



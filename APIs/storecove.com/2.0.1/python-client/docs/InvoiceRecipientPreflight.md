# InvoiceRecipientPreflight

Identifies the invoice recipient to preflight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_identifiers** | [**List[PublicIdentifier]**](PublicIdentifier.md) | A list of public identifiers that uniquely identify this customer. | [optional] 

## Example

```python
from openapi_client.models.invoice_recipient_preflight import InvoiceRecipientPreflight

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceRecipientPreflight from a JSON string
invoice_recipient_preflight_instance = InvoiceRecipientPreflight.from_json(json)
# print the JSON string representation of the object
print(InvoiceRecipientPreflight.to_json())

# convert the object into a dict
invoice_recipient_preflight_dict = invoice_recipient_preflight_instance.to_dict()
# create an instance of InvoiceRecipientPreflight from a dict
invoice_recipient_preflight_from_dict = InvoiceRecipientPreflight.from_dict(invoice_recipient_preflight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



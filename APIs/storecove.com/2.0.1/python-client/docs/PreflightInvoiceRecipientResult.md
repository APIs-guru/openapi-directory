# PreflightInvoiceRecipientResult

The result of preflighting an invoice recipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The result code of the preflight request | [optional] 

## Example

```python
from openapi_client.models.preflight_invoice_recipient_result import PreflightInvoiceRecipientResult

# TODO update the JSON string below
json = "{}"
# create an instance of PreflightInvoiceRecipientResult from a JSON string
preflight_invoice_recipient_result_instance = PreflightInvoiceRecipientResult.from_json(json)
# print the JSON string representation of the object
print(PreflightInvoiceRecipientResult.to_json())

# convert the object into a dict
preflight_invoice_recipient_result_dict = preflight_invoice_recipient_result_instance.to_dict()
# create an instance of PreflightInvoiceRecipientResult from a dict
preflight_invoice_recipient_result_from_dict = PreflightInvoiceRecipientResult.from_dict(preflight_invoice_recipient_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



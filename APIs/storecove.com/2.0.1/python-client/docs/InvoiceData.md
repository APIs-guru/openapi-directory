# InvoiceData

The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_strategy** | **str** | How to interpret the document. | [optional] 
**document** | **str** | The base64 encoded version of the document. | [optional] 

## Example

```python
from openapi_client.models.invoice_data import InvoiceData

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceData from a JSON string
invoice_data_instance = InvoiceData.from_json(json)
# print the JSON string representation of the object
print(InvoiceData.to_json())

# convert the object into a dict
invoice_data_dict = invoice_data_instance.to_dict()
# create an instance of InvoiceData from a dict
invoice_data_from_dict = InvoiceData.from_dict(invoice_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



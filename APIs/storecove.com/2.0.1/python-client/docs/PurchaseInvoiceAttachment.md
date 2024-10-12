# PurchaseInvoiceAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | The attachment content type (mime type). | [optional] 
**document** | **str** | The Base64 encoded document attachment. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_attachment import PurchaseInvoiceAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceAttachment from a JSON string
purchase_invoice_attachment_instance = PurchaseInvoiceAttachment.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceAttachment.to_json())

# convert the object into a dict
purchase_invoice_attachment_dict = purchase_invoice_attachment_instance.to_dict()
# create an instance of PurchaseInvoiceAttachment from a dict
purchase_invoice_attachment_from_dict = PurchaseInvoiceAttachment.from_dict(purchase_invoice_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



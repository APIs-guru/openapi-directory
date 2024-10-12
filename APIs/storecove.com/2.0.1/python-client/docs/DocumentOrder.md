# DocumentOrder

The order to send.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting_cost** | **str** | The buyer&#39;s accounting cost centre for this document. | [optional] 
**allowance_charges** | [**List[AllowanceCharge]**](AllowanceCharge.md) | An array of allowance charges. | [optional] 
**amount_including_tax** | **float** | Total amount including Tax. | 
**attachments** | [**List[Attachment]**](Attachment.md) | An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding. | [optional] 
**delivery** | [**Delivery**](Delivery.md) |  | [optional] 
**delivery_terms** | [**DeliveryTerms**](DeliveryTerms.md) |  | [optional] 
**document_currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [optional] 
**document_number** | **str** | The number you assigned to the document. | 
**issue_date** | **str** | Format: yyyy-mm-dd. | 
**issue_time** | **str** | Format: hh:mm:ss±zzzz  | [optional] 
**note** | **str** | A note to add to the document | [optional] 
**order_lines** | [**List[OrderLine]**](OrderLine.md) | An array of order lines. | 
**order_type** | **str** | The type of this order. | [optional] [default to 'regular']
**payment_terms** | [**PaymentTerms**](PaymentTerms.md) |  | [optional] 
**references** | [**List[Reference]**](Reference.md) | An array of references to other documents. Note that many syntaxes do not support multiple references of the same type in which case they will be concatenated with &#39;,&#39;. Also, not all syntaxes and doucments support all documentTypes. | [optional] 
**seller_supplier_party** | [**SellerSupplierParty**](SellerSupplierParty.md) |  | 
**tax_system** | **str** | The tax system used for the invoice. The system &#39;tax_line_percentages&#39; is the only one currently supported. | [optional] [default to 'tax_line_percentages']
**time_zone** | **str** | Format: ±zzzz, where ±zzzz is the difference from UTC, e.g. +0100 or -0900 etc. The timezone will also apply to the document issue date if this field is provided. | [optional] 
**validity_period** | **str** | The period (or specific date) to which the invoice applies. Format: yyyy-mm-dd - yyyy-mm-dd. | [optional] 

## Example

```python
from openapi_client.models.document_order import DocumentOrder

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentOrder from a JSON string
document_order_instance = DocumentOrder.from_json(json)
# print the JSON string representation of the object
print(DocumentOrder.to_json())

# convert the object into a dict
document_order_dict = document_order_instance.to_dict()
# create an instance of DocumentOrder from a dict
document_order_from_dict = DocumentOrder.from_dict(document_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



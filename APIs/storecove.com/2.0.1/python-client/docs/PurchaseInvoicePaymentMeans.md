# PurchaseInvoicePaymentMeans


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | The account number to which to transfer. | [optional] 
**branch_code** | **str** | The code identifying the bank branch. May contain a BIC/SWIFT or something appropriate for the payment method, such as \&quot;NPP\&quot; for type NppPaymentMean. | [optional] 
**holder** | **str** | The account holder name to which to transfer. | [optional] 
**mandate** | **str** | The mandate, used only for type DirectDebitPaymentMean. | [optional] 
**network** | **str** | The payment network. Used only for type CardPaymentType. | [optional] 
**payment_id** | **str** | The payment id to use when making the payment. The invoice sender will use this to match the received funds to the invoice. | [optional] 
**type** | **str** | The type of payment means. Which type are returned is determined by the &amp;pmv&#x3D; query parameter. For details see documentation for that field. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_payment_means import PurchaseInvoicePaymentMeans

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoicePaymentMeans from a JSON string
purchase_invoice_payment_means_instance = PurchaseInvoicePaymentMeans.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoicePaymentMeans.to_json())

# convert the object into a dict
purchase_invoice_payment_means_dict = purchase_invoice_payment_means_instance.to_dict()
# create an instance of PurchaseInvoicePaymentMeans from a dict
purchase_invoice_payment_means_from_dict = PurchaseInvoicePaymentMeans.from_dict(purchase_invoice_payment_means_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PurchaseInvoiceSenderBillingContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email of the billing contact. | [optional] 
**first_name** | **str** | The first name of the billing contact. | [optional] 
**last_name** | **str** | The last name of the billing contact. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_sender_billing_contact import PurchaseInvoiceSenderBillingContact

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceSenderBillingContact from a JSON string
purchase_invoice_sender_billing_contact_instance = PurchaseInvoiceSenderBillingContact.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceSenderBillingContact.to_json())

# convert the object into a dict
purchase_invoice_sender_billing_contact_dict = purchase_invoice_sender_billing_contact_instance.to_dict()
# create an instance of PurchaseInvoiceSenderBillingContact from a dict
purchase_invoice_sender_billing_contact_from_dict = PurchaseInvoiceSenderBillingContact.from_dict(purchase_invoice_sender_billing_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



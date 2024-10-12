# PurchaseInvoiceSender


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_contact** | [**PurchaseInvoiceSenderBillingContact**](PurchaseInvoiceSenderBillingContact.md) |  | [optional] 
**building_number** | **str** | The building number. Used in SA. | [optional] 
**city** | **str** | The city. | [optional] 
**country** | **str** | The country. | [optional] 
**county** | **str** | The county. | [optional] 
**department** | **str** | The department who sent the invoice. | [optional] 
**identifiers** | [**List[PeppolIdentifier]**](PeppolIdentifier.md) | The array of identifiers for this sender. | [optional] 
**legal_name** | **str** | The legal name of the party who sent the invoice. | [optional] 
**line1** | **str** | The address | [optional] 
**line2** | **str** | The address, line 2 | [optional] 
**neighborhood** | **str** | The neighborhood. Used in SA. | [optional] 
**party_name** | **str** | The party who sent the invoice. | [optional] 
**peppol_identifiers** | [**PeppolIdentifier**](PeppolIdentifier.md) |  | [optional] 
**secondary_number** | **str** | The secondary number. Used in SA. | [optional] 
**zip** | **str** | The zip code. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_sender import PurchaseInvoiceSender

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceSender from a JSON string
purchase_invoice_sender_instance = PurchaseInvoiceSender.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceSender.to_json())

# convert the object into a dict
purchase_invoice_sender_dict = purchase_invoice_sender_instance.to_dict()
# create an instance of PurchaseInvoiceSender from a dict
purchase_invoice_sender_from_dict = PurchaseInvoiceSender.from_dict(purchase_invoice_sender_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



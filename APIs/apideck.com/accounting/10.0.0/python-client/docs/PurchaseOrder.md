# PurchaseOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting_by_row** | **bool** | Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. | [optional] 
**bank_account** | [**BankAccount**](BankAccount.md) |  | [optional] 
**channel** | **str** | The channel through which the transaction is processed. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**currency_rate** | **float** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**delivery_date** | **date** | The date on which the purchase order is to be delivered - YYYY-MM-DD. | [optional] 
**discount_percentage** | **float** | Discount percentage applied to this transaction. | [optional] 
**downstream_id** | **str** | The third-party API ID of original entity | [optional] [readonly] 
**due_date** | **date** | The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD. | [optional] 
**expected_arrival_date** | **date** | The date on which the order is expected to arrive - YYYY-MM-DD. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**issued_date** | **date** | Date purchase order was issued - YYYY-MM-DD. | [optional] 
**ledger_account** | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
**line_items** | [**List[InvoiceLineItem]**](InvoiceLineItem.md) |  | [optional] 
**memo** | **str** | Message for the supplier. This text appears on the Purchase Order. | [optional] 
**payment_method** | **str** | Payment method used for the transaction, such as cash, credit card, bank transfer, or check | [optional] 
**po_number** | **str** | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. | [optional] 
**reference** | **str** | Optional purchase order reference. | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**shipping_address** | [**Address**](Address.md) |  | [optional] 
**status** | **str** |  | [optional] 
**sub_total** | **float** | Sub-total amount, normally before tax. | [optional] 
**supplier** | [**LinkedSupplier**](LinkedSupplier.md) |  | [optional] 
**tax_code** | **str** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
**tax_inclusive** | **bool** | Amounts are including tax | [optional] 
**template_id** | **str** | Optional purchase order template | [optional] 
**total** | **float** | Total amount of invoice, including tax. | [optional] 
**total_tax** | **float** | Total tax amount applied to this invoice. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.purchase_order import PurchaseOrder

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseOrder from a JSON string
purchase_order_instance = PurchaseOrder.from_json(json)
# print the JSON string representation of the object
print(PurchaseOrder.to_json())

# convert the object into a dict
purchase_order_dict = purchase_order_instance.to_dict()
# create an instance of PurchaseOrder from a dict
purchase_order_from_dict = PurchaseOrder.from_dict(purchase_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Bill


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting_by_row** | **bool** | Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. | [optional] 
**balance** | **float** | Balance of bill due. | [optional] 
**bank_account** | [**BankAccount**](BankAccount.md) |  | [optional] 
**bill_date** | **date** | Date bill was issued - YYYY-MM-DD. | [optional] 
**bill_number** | **str** | Reference to supplier bill number | [optional] 
**channel** | **str** | The channel through which the transaction is processed. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**currency_rate** | **float** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**deposit** | **float** | Amount of deposit made to this bill. | [optional] 
**discount_percentage** | **float** | Discount percentage applied to this transaction. | [optional] 
**downstream_id** | **str** | The third-party API ID of original entity | [optional] [readonly] 
**due_date** | **date** | The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**language** | **str** | language code according to ISO 639-1. For the United States - EN | [optional] 
**ledger_account** | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
**line_items** | [**List[BillLineItem]**](BillLineItem.md) |  | [optional] 
**notes** | **str** |  | [optional] 
**paid_date** | **date** | The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD. | [optional] 
**payment_method** | **str** | Payment method used for the transaction, such as cash, credit card, bank transfer, or check | [optional] 
**po_number** | **str** | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. | [optional] 
**reference** | **str** | Optional bill reference. | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**status** | **str** | Invoice status | [optional] 
**sub_total** | **float** | Sub-total amount, normally before tax. | [optional] 
**supplier** | [**LinkedSupplier**](LinkedSupplier.md) |  | [optional] 
**tax_code** | **str** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
**tax_inclusive** | **bool** | Amounts are including tax | [optional] 
**terms** | **str** | Terms of payment. | [optional] 
**total** | **float** | Total amount of bill, including tax. | [optional] 
**total_tax** | **float** | Total tax amount applied to this bill. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bill import Bill

# TODO update the JSON string below
json = "{}"
# create an instance of Bill from a JSON string
bill_instance = Bill.from_json(json)
# print the JSON string representation of the object
print(Bill.to_json())

# convert the object into a dict
bill_dict = bill_instance.to_dict()
# create an instance of Bill from a dict
bill_from_dict = Bill.from_dict(bill_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



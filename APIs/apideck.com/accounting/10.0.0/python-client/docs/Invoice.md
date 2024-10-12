# Invoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting_by_row** | **bool** | Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. | [optional] 
**balance** | **float** | Balance of invoice due. | [optional] 
**bank_account** | [**BankAccount**](BankAccount.md) |  | [optional] 
**billing_address** | [**Address**](Address.md) |  | [optional] 
**channel** | **str** | The channel through which the transaction is processed. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**currency_rate** | **float** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**customer** | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
**customer_memo** | **str** | Customer memo | [optional] 
**deposit** | **float** | Amount of deposit made to this invoice. | [optional] 
**discount_amount** | **float** | Discount amount applied to this invoice. | [optional] 
**discount_percentage** | **float** | Discount percentage applied to this invoice. | [optional] 
**downstream_id** | **str** | The third-party API ID of original entity | [optional] [readonly] 
**due_date** | **date** | The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**invoice_date** | **date** | Date invoice was issued - YYYY-MM-DD. | [optional] 
**invoice_sent** | **bool** | Invoice sent to contact/customer. | [optional] 
**language** | **str** | language code according to ISO 639-1. For the United States - EN | [optional] 
**ledger_account** | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
**line_items** | [**List[InvoiceLineItem]**](InvoiceLineItem.md) |  | [optional] 
**number** | **str** | Invoice number. | [optional] 
**payment_method** | **str** | Payment method used for the transaction, such as cash, credit card, bank transfer, or check | [optional] 
**po_number** | **str** | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. | [optional] 
**reference** | **str** | Optional invoice reference. | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**shipping_address** | [**Address**](Address.md) |  | [optional] 
**source_document_url** | **str** | URL link to a source document - shown as &#39;Go to [appName]&#39; in the downstream app. Currently only supported for Xero. | [optional] 
**status** | **str** | Invoice status | [optional] 
**sub_total** | **float** | Sub-total amount, normally before tax. | [optional] 
**tax_code** | **str** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
**tax_inclusive** | **bool** | Amounts are including tax | [optional] 
**template_id** | **str** | Optional invoice template | [optional] 
**terms** | **str** | Terms of payment. | [optional] 
**total** | **float** | Total amount of invoice, including tax. | [optional] 
**total_tax** | **float** | Total tax amount applied to this invoice. | [optional] 
**tracking_category** | [**LinkedTrackingCategory**](LinkedTrackingCategory.md) |  | [optional] 
**type** | **str** | Invoice type | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.invoice import Invoice

# TODO update the JSON string below
json = "{}"
# create an instance of Invoice from a JSON string
invoice_instance = Invoice.from_json(json)
# print the JSON string representation of the object
print(Invoice.to_json())

# convert the object into a dict
invoice_dict = invoice_instance.to_dict()
# create an instance of Invoice from a dict
invoice_from_dict = Invoice.from_dict(invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



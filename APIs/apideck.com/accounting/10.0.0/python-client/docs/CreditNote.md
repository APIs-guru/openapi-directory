# CreditNote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
**allocations** | [**List[CreditNoteAllocationsInner]**](CreditNoteAllocationsInner.md) |  | [optional] 
**balance** | **float** | The balance reflecting any payments made against the transaction. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**currency_rate** | **float** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**customer** | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
**date_issued** | **datetime** | Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD | [optional] 
**date_paid** | **datetime** | Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD | [optional] 
**id** | **str** | Unique identifier representing the entity | [readonly] 
**line_items** | [**List[InvoiceLineItem]**](InvoiceLineItem.md) |  | [optional] 
**note** | **str** | Optional note to be associated with the credit note. | [optional] 
**number** | **str** | Credit note number. | [optional] 
**reference** | **str** | Optional reference message ie: Debit remittance detail. | [optional] 
**remaining_credit** | **float** | Indicates the total credit amount still available to apply towards the payment. | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**status** | **str** | Status of credit notes | [optional] 
**sub_total** | **float** | Sub-total amount, normally before tax. | [optional] 
**tax_code** | **str** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
**tax_inclusive** | **bool** | Amounts are including tax | [optional] 
**terms** | **str** | Optional terms to be associated with the credit note. | [optional] 
**total_amount** | **float** | Amount of transaction | 
**total_tax** | **float** | Total tax amount applied to this invoice. | [optional] 
**type** | **str** | Type of payment | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.credit_note import CreditNote

# TODO update the JSON string below
json = "{}"
# create an instance of CreditNote from a JSON string
credit_note_instance = CreditNote.from_json(json)
# print the JSON string representation of the object
print(CreditNote.to_json())

# convert the object into a dict
credit_note_dict = credit_note_instance.to_dict()
# create an instance of CreditNote from a dict
credit_note_from_dict = CreditNote.from_dict(credit_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



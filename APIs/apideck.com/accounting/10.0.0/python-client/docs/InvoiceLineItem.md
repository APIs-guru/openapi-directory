# InvoiceLineItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | User defined item code | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**department_id** | **str** | Department id | [optional] 
**description** | **str** | User defined description | [optional] 
**discount_amount** | **float** | Discount amount applied to the line item when supported downstream. | [optional] 
**discount_percentage** | **float** | Discount percentage applied to the line item when supported downstream. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**item** | [**LinkedInvoiceItem**](LinkedInvoiceItem.md) |  | [optional] 
**ledger_account** | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
**line_number** | **int** | Line number in the invoice | [optional] 
**location_id** | **str** | Location id | [optional] 
**quantity** | **float** |  | [optional] 
**row_id** | **str** | Row ID | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**tax_amount** | **float** | Tax amount | [optional] 
**tax_rate** | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
**total_amount** | **float** | Total amount of the line item | [optional] 
**type** | **str** | Item type | [optional] 
**unit_of_measure** | **str** | Description of the unit type the item is sold as, ie: kg, hour. | [optional] 
**unit_price** | **float** |  | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.invoice_line_item import InvoiceLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceLineItem from a JSON string
invoice_line_item_instance = InvoiceLineItem.from_json(json)
# print the JSON string representation of the object
print(InvoiceLineItem.to_json())

# convert the object into a dict
invoice_line_item_dict = invoice_line_item_instance.to_dict()
# create an instance of InvoiceLineItem from a dict
invoice_line_item_from_dict = InvoiceLineItem.from_dict(invoice_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



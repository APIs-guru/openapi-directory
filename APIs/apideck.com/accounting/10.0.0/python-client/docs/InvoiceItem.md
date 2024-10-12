# InvoiceItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**asset_account** | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
**code** | **str** | User defined item code | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**description** | **str** | A short description of the item | [optional] 
**expense_account** | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
**id** | **str** | The ID of the item. | [optional] [readonly] 
**income_account** | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
**inventory_date** | **date** | The date of opening balance if inventory item is tracked - YYYY-MM-DD. | [optional] 
**name** | **str** | Item name | [optional] 
**purchase_details** | [**InvoiceItemPurchaseDetails**](InvoiceItemPurchaseDetails.md) |  | [optional] 
**purchased** | **bool** | Item is available for purchase transactions | [optional] 
**quantity** | **float** |  | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**sales_details** | [**InvoiceItemPurchaseDetails**](InvoiceItemPurchaseDetails.md) |  | [optional] 
**sold** | **bool** | Item will be available on sales transactions | [optional] 
**taxable** | **bool** | If true, transactions for this item are taxable | [optional] 
**tracked** | **bool** | Item is inventoried | [optional] 
**tracking_category** | [**LinkedTrackingCategory**](LinkedTrackingCategory.md) |  | [optional] 
**type** | **str** | Item type | [optional] 
**unit_price** | **float** |  | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.invoice_item import InvoiceItem

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceItem from a JSON string
invoice_item_instance = InvoiceItem.from_json(json)
# print the JSON string representation of the object
print(InvoiceItem.to_json())

# convert the object into a dict
invoice_item_dict = invoice_item_instance.to_dict()
# create an instance of InvoiceItem from a dict
invoice_item_from_dict = InvoiceItem.from_dict(invoice_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



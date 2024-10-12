# JournalEntryLineItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
**department_id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**description** | **str** | User defined description | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**ledger_account** | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | 
**location_id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**sub_total** | **float** | Sub-total amount, normally before tax. | [optional] 
**supplier** | [**LinkedSupplier**](LinkedSupplier.md) |  | [optional] 
**tax_amount** | **float** | Tax amount | [optional] 
**tax_rate** | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
**total_amount** | **float** | Debit entries are considered positive, and credit entries are considered negative. | [optional] 
**tracking_category** | [**LinkedTrackingCategory**](LinkedTrackingCategory.md) |  | [optional] 
**type** | **str** | Debit entries are considered positive, and credit entries are considered negative. | 

## Example

```python
from openapi_client.models.journal_entry_line_item import JournalEntryLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of JournalEntryLineItem from a JSON string
journal_entry_line_item_instance = JournalEntryLineItem.from_json(json)
# print the JSON string representation of the object
print(JournalEntryLineItem.to_json())

# convert the object into a dict
journal_entry_line_item_dict = journal_entry_line_item_instance.to_dict()
# create an instance of JournalEntryLineItem from a dict
journal_entry_line_item_from_dict = JournalEntryLineItem.from_dict(journal_entry_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



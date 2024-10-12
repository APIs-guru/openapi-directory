# JournalEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**currency_rate** | **float** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**journal_symbol** | **str** | Journal symbol of the entry. For example IND for indirect costs | [optional] 
**line_items** | [**List[JournalEntryLineItem]**](JournalEntryLineItem.md) | Requires a minimum of 2 line items that sum to 0 | [optional] 
**memo** | **str** | Reference for the journal entry. | [optional] 
**number** | **str** | Journal entry number. | [optional] 
**posted_at** | **datetime** | This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated. | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**tax_code** | **str** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
**tax_type** | **str** | The specific category of tax associated with a transaction like sales or purchase | [optional] 
**title** | **str** | Journal entry title | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.journal_entry import JournalEntry

# TODO update the JSON string below
json = "{}"
# create an instance of JournalEntry from a JSON string
journal_entry_instance = JournalEntry.from_json(json)
# print the JSON string representation of the object
print(JournalEntry.to_json())

# convert the object into a dict
journal_entry_dict = journal_entry_instance.to_dict()
# create an instance of JournalEntry from a dict
journal_entry_from_dict = JournalEntry.from_dict(journal_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



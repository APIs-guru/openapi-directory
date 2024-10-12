# WritableJournalEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_object** | **object** |  | [optional] [readonly] 
**assigned_object_id** | **int** |  | 
**assigned_object_type** | **str** |  | 
**comments** | **str** |  | 
**created** | **datetime** |  | [optional] [readonly] 
**created_by** | **int** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**kind** | **str** |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_journal_entry import WritableJournalEntry

# TODO update the JSON string below
json = "{}"
# create an instance of WritableJournalEntry from a JSON string
writable_journal_entry_instance = WritableJournalEntry.from_json(json)
# print the JSON string representation of the object
print(WritableJournalEntry.to_json())

# convert the object into a dict
writable_journal_entry_dict = writable_journal_entry_instance.to_dict()
# create an instance of WritableJournalEntry from a dict
writable_journal_entry_from_dict = WritableJournalEntry.from_dict(writable_journal_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



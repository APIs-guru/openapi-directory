# DeleteJournalEntryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.delete_journal_entry_response import DeleteJournalEntryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteJournalEntryResponse from a JSON string
delete_journal_entry_response_instance = DeleteJournalEntryResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteJournalEntryResponse.to_json())

# convert the object into a dict
delete_journal_entry_response_dict = delete_journal_entry_response_instance.to_dict()
# create an instance of DeleteJournalEntryResponse from a dict
delete_journal_entry_response_from_dict = DeleteJournalEntryResponse.from_dict(delete_journal_entry_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ListGlossaryEntriesResponse

Response message for ListGlossaryEntries

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**glossary_entries** | [**List[GlossaryEntry]**](GlossaryEntry.md) | Optional. The Glossary Entries | [optional] 
**next_page_token** | **str** | Optional. A token to retrieve a page of results. Pass this value in the [ListGLossaryEntriesRequest.page_token] field in the subsequent calls. | [optional] 

## Example

```python
from openapi_client.models.list_glossary_entries_response import ListGlossaryEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGlossaryEntriesResponse from a JSON string
list_glossary_entries_response_instance = ListGlossaryEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListGlossaryEntriesResponse.to_json())

# convert the object into a dict
list_glossary_entries_response_dict = list_glossary_entries_response_instance.to_dict()
# create an instance of ListGlossaryEntriesResponse from a dict
list_glossary_entries_response_from_dict = ListGlossaryEntriesResponse.from_dict(list_glossary_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ListLogEntriesResponse

Result returned from ListLogEntries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[LogEntry]**](LogEntry.md) | A list of log entries. If entries is empty, nextPageToken may still be returned, indicating that more entries may exist. See nextPageToken for more information. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.If a value for next_page_token appears and the entries field is empty, it means that the search found no log entries so far but it did not have time to search all the possible log entries. Retry the method with this value for page_token to continue the search. Alternatively, consider speeding up the search by changing your filter to specify a single log name or resource type, or to narrow the time range of the search. | [optional] 

## Example

```python
from openapi_client.models.list_log_entries_response import ListLogEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLogEntriesResponse from a JSON string
list_log_entries_response_instance = ListLogEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListLogEntriesResponse.to_json())

# convert the object into a dict
list_log_entries_response_dict = list_log_entries_response_instance.to_dict()
# create an instance of ListLogEntriesResponse from a dict
list_log_entries_response_from_dict = ListLogEntriesResponse.from_dict(list_log_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



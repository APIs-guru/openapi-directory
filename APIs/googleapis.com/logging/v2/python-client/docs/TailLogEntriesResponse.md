# TailLogEntriesResponse

Result returned from TailLogEntries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[LogEntry]**](LogEntry.md) | A list of log entries. Each response in the stream will order entries with increasing values of LogEntry.timestamp. Ordering is not guaranteed between separate responses. | [optional] 
**suppression_info** | [**List[SuppressionInfo]**](SuppressionInfo.md) | If entries that otherwise would have been included in the session were not sent back to the client, counts of relevant entries omitted from the session with the reason that they were not included. There will be at most one of each reason per response. The counts represent the number of suppressed entries since the last streamed response. | [optional] 

## Example

```python
from openapi_client.models.tail_log_entries_response import TailLogEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TailLogEntriesResponse from a JSON string
tail_log_entries_response_instance = TailLogEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(TailLogEntriesResponse.to_json())

# convert the object into a dict
tail_log_entries_response_dict = tail_log_entries_response_instance.to_dict()
# create an instance of TailLogEntriesResponse from a dict
tail_log_entries_response_from_dict = TailLogEntriesResponse.from_dict(tail_log_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



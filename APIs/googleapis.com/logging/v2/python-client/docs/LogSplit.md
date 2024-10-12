# LogSplit

Additional information used to correlate multiple log entries. Used when a single LogEntry would exceed the Google Cloud Logging size limit and is split across multiple log entries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** | The index of this LogEntry in the sequence of split log entries. Log entries are given |index| values 0, 1, ..., n-1 for a sequence of n log entries. | [optional] 
**total_splits** | **int** | The total number of log entries that the original LogEntry was split into. | [optional] 
**uid** | **str** | A globally unique identifier for all log entries in a sequence of split log entries. All log entries with the same |LogSplit.uid| are assumed to be part of the same sequence of split log entries. | [optional] 

## Example

```python
from openapi_client.models.log_split import LogSplit

# TODO update the JSON string below
json = "{}"
# create an instance of LogSplit from a JSON string
log_split_instance = LogSplit.from_json(json)
# print the JSON string representation of the object
print(LogSplit.to_json())

# convert the object into a dict
log_split_dict = log_split_instance.to_dict()
# create an instance of LogSplit from a dict
log_split_from_dict = LogSplit.from_dict(log_split_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



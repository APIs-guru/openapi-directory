# CopyLogEntriesRequest

The parameters to CopyLogEntries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** | Required. Destination to which to copy log entries. | [optional] 
**filter** | **str** | Optional. A filter specifying which log entries to copy. The filter must be no more than 20k characters. An empty filter matches all log entries. | [optional] 
**name** | **str** | Required. Log bucket from which to copy log entries.For example:\&quot;projects/my-project/locations/global/buckets/my-source-bucket\&quot; | [optional] 

## Example

```python
from openapi_client.models.copy_log_entries_request import CopyLogEntriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CopyLogEntriesRequest from a JSON string
copy_log_entries_request_instance = CopyLogEntriesRequest.from_json(json)
# print the JSON string representation of the object
print(CopyLogEntriesRequest.to_json())

# convert the object into a dict
copy_log_entries_request_dict = copy_log_entries_request_instance.to_dict()
# create an instance of CopyLogEntriesRequest from a dict
copy_log_entries_request_from_dict = CopyLogEntriesRequest.from_dict(copy_log_entries_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



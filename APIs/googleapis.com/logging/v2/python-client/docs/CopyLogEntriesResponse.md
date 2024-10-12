# CopyLogEntriesResponse

Response type for CopyLogEntries long running operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_entries_copied_count** | **str** | Number of log entries copied. | [optional] 

## Example

```python
from openapi_client.models.copy_log_entries_response import CopyLogEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CopyLogEntriesResponse from a JSON string
copy_log_entries_response_instance = CopyLogEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(CopyLogEntriesResponse.to_json())

# convert the object into a dict
copy_log_entries_response_dict = copy_log_entries_response_instance.to_dict()
# create an instance of CopyLogEntriesResponse from a dict
copy_log_entries_response_from_dict = CopyLogEntriesResponse.from_dict(copy_log_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



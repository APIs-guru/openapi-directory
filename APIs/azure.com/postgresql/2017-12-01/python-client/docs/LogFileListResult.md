# LogFileListResult

A list of log files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[LogFile]**](LogFile.md) | The list of log files. | [optional] 

## Example

```python
from openapi_client.models.log_file_list_result import LogFileListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LogFileListResult from a JSON string
log_file_list_result_instance = LogFileListResult.from_json(json)
# print the JSON string representation of the object
print(LogFileListResult.to_json())

# convert the object into a dict
log_file_list_result_dict = log_file_list_result_instance.to_dict()
# create an instance of LogFileListResult from a dict
log_file_list_result_from_dict = LogFileListResult.from_dict(log_file_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



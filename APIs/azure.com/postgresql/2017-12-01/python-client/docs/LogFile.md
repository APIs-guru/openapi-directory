# LogFile

Represents a log file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the log file. | [optional] 
**properties** | [**LogFileProperties**](LogFileProperties.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_file import LogFile

# TODO update the JSON string below
json = "{}"
# create an instance of LogFile from a JSON string
log_file_instance = LogFile.from_json(json)
# print the JSON string representation of the object
print(LogFile.to_json())

# convert the object into a dict
log_file_dict = log_file_instance.to_dict()
# create an instance of LogFile from a dict
log_file_from_dict = LogFile.from_dict(log_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



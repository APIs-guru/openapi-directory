# LogFileProperties

The properties of a log file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | Creation timestamp of the log file. | [optional] 
**last_modified_time** | **datetime** | Last modified timestamp of the log file. | [optional] 
**name** | **str** | Log file name. | [optional] 
**size_in_kb** | **int** | Size of the log file. | [optional] 
**type** | **str** | Type of the log file. | [optional] 
**url** | **str** | The url to download the log file from. | [optional] 

## Example

```python
from openapi_client.models.log_file_properties import LogFileProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LogFileProperties from a JSON string
log_file_properties_instance = LogFileProperties.from_json(json)
# print the JSON string representation of the object
print(LogFileProperties.to_json())

# convert the object into a dict
log_file_properties_dict = log_file_properties_instance.to_dict()
# create an instance of LogFileProperties from a dict
log_file_properties_from_dict = LogFileProperties.from_dict(log_file_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# LogLine

Application log line emitted while processing a request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_message** | **str** | App-provided log message. | [optional] 
**severity** | **str** | Severity of this log entry. | [optional] 
**source_location** | [**SourceLocation**](SourceLocation.md) |  | [optional] 
**time** | **str** | Approximate time when this log entry was made. | [optional] 

## Example

```python
from openapi_client.models.log_line import LogLine

# TODO update the JSON string below
json = "{}"
# create an instance of LogLine from a JSON string
log_line_instance = LogLine.from_json(json)
# print the JSON string representation of the object
print(LogLine.to_json())

# convert the object into a dict
log_line_dict = log_line_instance.to_dict()
# create an instance of LogLine from a dict
log_line_from_dict = LogLine.from_dict(log_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



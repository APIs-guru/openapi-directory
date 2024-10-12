# V1LogEntry

An individual log entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_request** | [**V1HttpRequest**](V1HttpRequest.md) |  | [optional] 
**insert_id** | **str** | A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id. | [optional] 
**labels** | **Dict[str, str]** | A set of user-defined (key, value) data that provides additional information about the log entry. | [optional] 
**monitored_resource_labels** | **Dict[str, str]** | A set of user-defined (key, value) data that provides additional information about the moniotored resource that the log entry belongs to. | [optional] 
**name** | **str** | Required. The log to which this log entry belongs. Examples: &#x60;\&quot;syslog\&quot;&#x60;, &#x60;\&quot;book_log\&quot;&#x60;. | [optional] 
**operation** | [**V1LogEntryOperation**](V1LogEntryOperation.md) |  | [optional] 
**proto_payload** | **Dict[str, object]** | The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog. | [optional] 
**severity** | **str** | The severity of the log entry. The default value is &#x60;LogSeverity.DEFAULT&#x60;. | [optional] 
**source_location** | [**V1LogEntrySourceLocation**](V1LogEntrySourceLocation.md) |  | [optional] 
**struct_payload** | **Dict[str, object]** | The log entry payload, represented as a structure that is expressed as a JSON object. | [optional] 
**text_payload** | **str** | The log entry payload, represented as a Unicode string (UTF-8). | [optional] 
**timestamp** | **str** | The time the event described by the log entry occurred. If omitted, defaults to operation start time. | [optional] 
**trace** | **str** | Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to &#x60;//tracing.googleapis.com&#x60;. Example: &#x60;projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824&#x60; | [optional] 

## Example

```python
from openapi_client.models.v1_log_entry import V1LogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of V1LogEntry from a JSON string
v1_log_entry_instance = V1LogEntry.from_json(json)
# print the JSON string representation of the object
print(V1LogEntry.to_json())

# convert the object into a dict
v1_log_entry_dict = v1_log_entry_instance.to_dict()
# create an instance of V1LogEntry from a dict
v1_log_entry_from_dict = V1LogEntry.from_dict(v1_log_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



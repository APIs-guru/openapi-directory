# LogEntry

An individual entry in a log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_groups** | [**List[LogErrorGroup]**](LogErrorGroup.md) | Output only. The Error Reporting (https://cloud.google.com/error-reporting) error groups associated with this LogEntry. Error Reporting sets the values for this field during error group creation.For more information, see View error details( https://cloud.google.com/error-reporting/docs/viewing-errors#view_error_details)This field isn&#39;t available during log routing (https://cloud.google.com/logging/docs/routing/overview) | [optional] [readonly] 
**http_request** | [**HttpRequest**](HttpRequest.md) |  | [optional] 
**insert_id** | **str** | Optional. A unique identifier for the log entry. If you provide a value, then Logging considers other log entries in the same project, with the same timestamp, and with the same insert_id to be duplicates which are removed in a single query result. However, there are no guarantees of de-duplication in the export of logs.If the insert_id is omitted when writing a log entry, the Logging API assigns its own unique identifier in this field.In queries, the insert_id is also used to order log entries that have the same log_name and timestamp values. | [optional] 
**json_payload** | **Dict[str, object]** | The log entry payload, represented as a structure that is expressed as a JSON object. | [optional] 
**labels** | **Dict[str, str]** | Optional. A map of key, value pairs that provides additional information about the log entry. The labels can be user-defined or system-defined.User-defined labels are arbitrary key, value pairs that you can use to classify logs.System-defined labels are defined by GCP services for platform logs. They have two components - a service namespace component and the attribute name. For example: compute.googleapis.com/resource_name.Cloud Logging truncates label keys that exceed 512 B and label values that exceed 64 KB upon their associated log entry being written. The truncation is indicated by an ellipsis at the end of the character string. | [optional] 
**log_name** | **str** | Required. The resource name of the log to which this log entry belongs: \&quot;projects/[PROJECT_ID]/logs/[LOG_ID]\&quot; \&quot;organizations/[ORGANIZATION_ID]/logs/[LOG_ID]\&quot; \&quot;billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]\&quot; \&quot;folders/[FOLDER_ID]/logs/[LOG_ID]\&quot; A project number may be used in place of PROJECT_ID. The project number is translated to its corresponding PROJECT_ID internally and the log_name field will contain PROJECT_ID in queries and exports.[LOG_ID] must be URL-encoded within log_name. Example: \&quot;organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity\&quot;.[LOG_ID] must be less than 512 characters long and can only include the following characters: upper and lower case alphanumeric characters, forward-slash, underscore, hyphen, and period.For backward compatibility, if log_name begins with a forward-slash, such as /projects/..., then the log entry is processed as usual, but the forward-slash is removed. Listing the log entry will not show the leading slash and filtering for a log name with a leading slash will never return any results. | [optional] 
**metadata** | [**MonitoredResourceMetadata**](MonitoredResourceMetadata.md) |  | [optional] 
**operation** | [**LogEntryOperation**](LogEntryOperation.md) |  | [optional] 
**proto_payload** | **Dict[str, object]** | The log entry payload, represented as a protocol buffer. Some Google Cloud Platform services use this field for their log entry payloads.The following protocol buffer types are supported; user-defined types are not supported:\&quot;type.googleapis.com/google.cloud.audit.AuditLog\&quot; \&quot;type.googleapis.com/google.appengine.logging.v1.RequestLog\&quot; | [optional] 
**receive_timestamp** | **str** | Output only. The time the log entry was received by Logging. | [optional] [readonly] 
**resource** | [**MonitoredResource**](MonitoredResource.md) |  | [optional] 
**severity** | **str** | Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT. | [optional] 
**source_location** | [**LogEntrySourceLocation**](LogEntrySourceLocation.md) |  | [optional] 
**span_id** | **str** | Optional. The ID of the Cloud Trace (https://cloud.google.com/trace) span associated with the current operation in which the log is being written. For example, if a span has the REST resource name of \&quot;projects/some-project/traces/some-trace/spans/some-span-id\&quot;, then the span_id field is \&quot;some-span-id\&quot;.A Span (https://cloud.google.com/trace/docs/reference/v2/rest/v2/projects.traces/batchWrite#Span) represents a single operation within a trace. Whereas a trace may involve multiple different microservices running on multiple different machines, a span generally corresponds to a single logical operation being performed in a single instance of a microservice on one specific machine. Spans are the nodes within the tree that is a trace.Applications that are instrumented for tracing (https://cloud.google.com/trace/docs/setup) will generally assign a new, unique span ID on each incoming request. It is also common to create and record additional spans corresponding to internal processing elements as well as issuing requests to dependencies.The span ID is expected to be a 16-character, hexadecimal encoding of an 8-byte array and should not be zero. It should be unique within the trace and should, ideally, be generated in a manner that is uniformly random.Example values: 000000000000004a 7a2190356c3fc94b 0000f00300090021 d39223e101960076 | [optional] 
**split** | [**LogSplit**](LogSplit.md) |  | [optional] 
**text_payload** | **str** | The log entry payload, represented as a Unicode string (UTF-8). | [optional] 
**timestamp** | **str** | Optional. The time the event described by the log entry occurred. This time is used to compute the log entry&#39;s age and to enforce the logs retention period. If this field is omitted in a new log entry, then Logging assigns it the current time. Timestamps have nanosecond accuracy, but trailing zeros in the fractional seconds might be omitted when the timestamp is displayed.Incoming log entries must have timestamps that don&#39;t exceed the logs retention period (https://cloud.google.com/logging/quotas#logs_retention_periods) in the past, and that don&#39;t exceed 24 hours in the future. Log entries outside those time boundaries are rejected by Logging. | [optional] 
**trace** | **str** | Optional. The REST resource name of the trace being written to Cloud Trace (https://cloud.google.com/trace) in association with this log entry. For example, if your trace data is stored in the Cloud project \&quot;my-trace-project\&quot; and if the service that is creating the log entry receives a trace header that includes the trace ID \&quot;12345\&quot;, then the service should use \&quot;projects/my-trace-project/traces/12345\&quot;.The trace field provides the link between logs and traces. By using this field, you can navigate from a log entry to a trace. | [optional] 
**trace_sampled** | **bool** | Optional. The sampling decision of the span associated with the log entry at the time the log entry was created. This field corresponds to the sampled flag in the W3C trace-context specification (https://www.w3.org/TR/trace-context/#sampled-flag). A non-sampled trace value is still useful as a request correlation identifier. The default is False. | [optional] 

## Example

```python
from openapi_client.models.log_entry import LogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of LogEntry from a JSON string
log_entry_instance = LogEntry.from_json(json)
# print the JSON string representation of the object
print(LogEntry.to_json())

# convert the object into a dict
log_entry_dict = log_entry_instance.to_dict()
# create an instance of LogEntry from a dict
log_entry_from_dict = LogEntry.from_dict(log_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



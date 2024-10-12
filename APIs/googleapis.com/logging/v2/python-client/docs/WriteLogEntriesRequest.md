# WriteLogEntriesRequest

The parameters to WriteLogEntries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dry_run** | **bool** | Optional. If true, the request should expect normal response, but the entries won&#39;t be persisted nor exported. Useful for checking whether the logging API endpoints are working properly before sending valuable data. | [optional] 
**entries** | [**List[LogEntry]**](LogEntry.md) | Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method&#39;s log_name, resource, and labels fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the LogEntry type.If the timestamp or insert_id fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the entries.list method.Log entries with timestamps that are more than the logs retention period (https://cloud.google.com/logging/quotas) in the past or more than 24 hours in the future will not be available when calling entries.list. However, those log entries can still be exported with LogSinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).To improve throughput and to avoid exceeding the quota limit (https://cloud.google.com/logging/quotas) for calls to entries.write, you should try to include several log entries in this list, rather than calling this method for each individual log entry. | [optional] 
**labels** | **Dict[str, str]** | Optional. Default labels that are added to the labels field of all log entries in entries. If a log entry already has a label with the same key as a label in this parameter, then the log entry&#39;s label is not changed. See LogEntry. | [optional] 
**log_name** | **str** | Optional. A default log resource name that is assigned to all log entries in entries that do not specify a value for log_name: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example: \&quot;projects/my-project-id/logs/syslog\&quot; \&quot;organizations/123/logs/cloudaudit.googleapis.com%2Factivity\&quot; The permission logging.logEntries.create is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in logName or in an individual log entry. | [optional] 
**partial_success** | **bool** | Optional. Whether a batch&#39;s valid entries should be written even if some other entry failed due to a permanent error such as INVALID_ARGUMENT or PERMISSION_DENIED. If any entry failed, then the response status is the response status of one of the failed entries. The response will include error details in WriteLogEntriesPartialErrors.log_entry_errors keyed by the entries&#39; zero-based index in the entries. Failed requests for which no entries are written will not include per-entry errors. | [optional] 
**resource** | [**MonitoredResource**](MonitoredResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.write_log_entries_request import WriteLogEntriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WriteLogEntriesRequest from a JSON string
write_log_entries_request_instance = WriteLogEntriesRequest.from_json(json)
# print the JSON string representation of the object
print(WriteLogEntriesRequest.to_json())

# convert the object into a dict
write_log_entries_request_dict = write_log_entries_request_instance.to_dict()
# create an instance of WriteLogEntriesRequest from a dict
write_log_entries_request_from_dict = WriteLogEntriesRequest.from_dict(write_log_entries_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ListLogEntriesRequest

The parameters to ListLogEntries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Optional. A filter that chooses which log entries to return. For more information, see Logging query language (https://cloud.google.com/logging/docs/view/logging-query-language).Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of a filter is 20,000 characters. | [optional] 
**order_by** | **str** | Optional. How the results should be sorted. Presently, the only permitted values are \&quot;timestamp asc\&quot; (default) and \&quot;timestamp desc\&quot;. The first option returns entries in order of increasing values of LogEntry.timestamp (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their insert_id values. | [optional] 
**page_size** | **int** | Optional. The maximum number of results to return from this request. Default is 50. If the value is negative, the request is rejected.The presence of next_page_token in the response indicates that more results might be available. | [optional] 
**page_token** | **str** | Optional. If present, then retrieve the next batch of results from the preceding call to this method. page_token must be the value of next_page_token from the previous response. The values of other method parameters should be identical to those in the previous call. | [optional] 
**project_ids** | **List[str]** | Optional. Deprecated. Use resource_names instead. One or more project identifiers or project numbers from which to retrieve log entries. Example: \&quot;my-project-1A\&quot;. | [optional] 
**resource_names** | **List[str]** | Required. Names of one or more parent resources from which to retrieve log entries: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]Projects listed in the project_ids field are added to this list. A maximum of 100 resources may be specified in a single request. | [optional] 

## Example

```python
from openapi_client.models.list_log_entries_request import ListLogEntriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListLogEntriesRequest from a JSON string
list_log_entries_request_instance = ListLogEntriesRequest.from_json(json)
# print the JSON string representation of the object
print(ListLogEntriesRequest.to_json())

# convert the object into a dict
list_log_entries_request_dict = list_log_entries_request_instance.to_dict()
# create an instance of ListLogEntriesRequest from a dict
list_log_entries_request_from_dict = ListLogEntriesRequest.from_dict(list_log_entries_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



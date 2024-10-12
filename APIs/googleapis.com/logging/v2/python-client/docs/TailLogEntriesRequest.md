# TailLogEntriesRequest

The parameters to TailLogEntries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buffer_window** | **str** | Optional. The amount of time to buffer log entries at the server before being returned to prevent out of order results due to late arriving log entries. Valid values are between 0-60000 milliseconds. Defaults to 2000 milliseconds. | [optional] 
**filter** | **str** | Optional. Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of a filter is 20,000 characters. | [optional] 
**resource_names** | **List[str]** | Required. Name of a parent resource from which to retrieve log entries: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] | [optional] 

## Example

```python
from openapi_client.models.tail_log_entries_request import TailLogEntriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TailLogEntriesRequest from a JSON string
tail_log_entries_request_instance = TailLogEntriesRequest.from_json(json)
# print the JSON string representation of the object
print(TailLogEntriesRequest.to_json())

# convert the object into a dict
tail_log_entries_request_dict = tail_log_entries_request_instance.to_dict()
# create an instance of TailLogEntriesRequest from a dict
tail_log_entries_request_from_dict = TailLogEntriesRequest.from_dict(tail_log_entries_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



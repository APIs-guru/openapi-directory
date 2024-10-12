# GoogleCloudChannelV1FetchReportResultsRequest

Request message for CloudChannelReportsService.FetchReportResults.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | Optional. Requested page size of the report. The server may return fewer results than requested. If you don&#39;t specify a page size, the server uses a sensible default (may change over time). The maximum value is 30,000; the server will change larger values to 30,000. | [optional] 
**page_token** | **str** | Optional. A token that specifies a page of results beyond the first page. Obtained through FetchReportResultsResponse.next_page_token of the previous CloudChannelReportsService.FetchReportResults call. | [optional] 
**partition_keys** | **List[str]** | Optional. List of keys specifying which report partitions to return. If empty, returns all partitions. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_fetch_report_results_request import GoogleCloudChannelV1FetchReportResultsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1FetchReportResultsRequest from a JSON string
google_cloud_channel_v1_fetch_report_results_request_instance = GoogleCloudChannelV1FetchReportResultsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1FetchReportResultsRequest.to_json())

# convert the object into a dict
google_cloud_channel_v1_fetch_report_results_request_dict = google_cloud_channel_v1_fetch_report_results_request_instance.to_dict()
# create an instance of GoogleCloudChannelV1FetchReportResultsRequest from a dict
google_cloud_channel_v1_fetch_report_results_request_from_dict = GoogleCloudChannelV1FetchReportResultsRequest.from_dict(google_cloud_channel_v1_fetch_report_results_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



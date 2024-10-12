# GoogleCloudChannelV1FetchReportResultsResponse

Response message for CloudChannelReportsService.FetchReportResults. Contains a tabular representation of the report results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results. | [optional] 
**report_metadata** | [**GoogleCloudChannelV1ReportResultsMetadata**](GoogleCloudChannelV1ReportResultsMetadata.md) |  | [optional] 
**rows** | [**List[GoogleCloudChannelV1Row]**](GoogleCloudChannelV1Row.md) | The report&#39;s lists of values. Each row follows the settings and ordering of the columns from &#x60;report_metadata&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_fetch_report_results_response import GoogleCloudChannelV1FetchReportResultsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1FetchReportResultsResponse from a JSON string
google_cloud_channel_v1_fetch_report_results_response_instance = GoogleCloudChannelV1FetchReportResultsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1FetchReportResultsResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_fetch_report_results_response_dict = google_cloud_channel_v1_fetch_report_results_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1FetchReportResultsResponse from a dict
google_cloud_channel_v1_fetch_report_results_response_from_dict = GoogleCloudChannelV1FetchReportResultsResponse.from_dict(google_cloud_channel_v1_fetch_report_results_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



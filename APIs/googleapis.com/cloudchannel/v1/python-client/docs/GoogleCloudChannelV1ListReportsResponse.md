# GoogleCloudChannelV1ListReportsResponse

Response message for CloudChannelReportsService.ListReports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results. | [optional] 
**reports** | [**List[GoogleCloudChannelV1Report]**](GoogleCloudChannelV1Report.md) | The reports available to the partner. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_reports_response import GoogleCloudChannelV1ListReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListReportsResponse from a JSON string
google_cloud_channel_v1_list_reports_response_instance = GoogleCloudChannelV1ListReportsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListReportsResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_reports_response_dict = google_cloud_channel_v1_list_reports_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListReportsResponse from a dict
google_cloud_channel_v1_list_reports_response_from_dict = GoogleCloudChannelV1ListReportsResponse.from_dict(google_cloud_channel_v1_list_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



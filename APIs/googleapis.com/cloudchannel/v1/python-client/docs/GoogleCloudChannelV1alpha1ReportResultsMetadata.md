# GoogleCloudChannelV1alpha1ReportResultsMetadata

The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_range** | [**GoogleCloudChannelV1alpha1DateRange**](GoogleCloudChannelV1alpha1DateRange.md) |  | [optional] 
**preceding_date_range** | [**GoogleCloudChannelV1alpha1DateRange**](GoogleCloudChannelV1alpha1DateRange.md) |  | [optional] 
**report** | [**GoogleCloudChannelV1alpha1Report**](GoogleCloudChannelV1alpha1Report.md) |  | [optional] 
**row_count** | **str** | The total number of rows of data in the final report. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_report_results_metadata import GoogleCloudChannelV1alpha1ReportResultsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1ReportResultsMetadata from a JSON string
google_cloud_channel_v1alpha1_report_results_metadata_instance = GoogleCloudChannelV1alpha1ReportResultsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1ReportResultsMetadata.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_report_results_metadata_dict = google_cloud_channel_v1alpha1_report_results_metadata_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1ReportResultsMetadata from a dict
google_cloud_channel_v1alpha1_report_results_metadata_from_dict = GoogleCloudChannelV1alpha1ReportResultsMetadata.from_dict(google_cloud_channel_v1alpha1_report_results_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



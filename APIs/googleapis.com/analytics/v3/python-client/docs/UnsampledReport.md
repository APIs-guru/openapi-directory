# UnsampledReport

JSON template for Analytics unsampled report resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this unsampled report belongs. | [optional] 
**cloud_storage_download_details** | [**UnsampledReportCloudStorageDownloadDetails**](UnsampledReportCloudStorageDownloadDetails.md) |  | [optional] 
**created** | **datetime** | Time this unsampled report was created. | [optional] [readonly] 
**dimensions** | **str** | The dimensions for the unsampled report. | [optional] 
**download_type** | **str** | The type of download you need to use for the report data file. Possible values include &#x60;GOOGLE_DRIVE&#x60; and &#x60;GOOGLE_CLOUD_STORAGE&#x60;. If the value is &#x60;GOOGLE_DRIVE&#x60;, see the &#x60;driveDownloadDetails&#x60; field. If the value is &#x60;GOOGLE_CLOUD_STORAGE&#x60;, see the &#x60;cloudStorageDownloadDetails&#x60; field. | [optional] [readonly] 
**drive_download_details** | [**UnsampledReportDriveDownloadDetails**](UnsampledReportDriveDownloadDetails.md) |  | [optional] 
**end_date** | **str** | The end date for the unsampled report. | [optional] 
**filters** | **str** | The filters for the unsampled report. | [optional] 
**id** | **str** | Unsampled report ID. | [optional] 
**kind** | **str** | Resource type for an Analytics unsampled report. | [optional] [readonly] [default to 'analytics#unsampledReport']
**metrics** | **str** | The metrics for the unsampled report. | [optional] 
**profile_id** | **str** | View (Profile) ID to which this unsampled report belongs. | [optional] 
**segment** | **str** | The segment for the unsampled report. | [optional] 
**self_link** | **str** | Link for this unsampled report. | [optional] [readonly] 
**start_date** | **str** | The start date for the unsampled report. | [optional] 
**status** | **str** | Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED. | [optional] [readonly] 
**title** | **str** | Title of the unsampled report. | [optional] 
**updated** | **datetime** | Time this unsampled report was last modified. | [optional] [readonly] 
**web_property_id** | **str** | Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY. | [optional] 

## Example

```python
from openapi_client.models.unsampled_report import UnsampledReport

# TODO update the JSON string below
json = "{}"
# create an instance of UnsampledReport from a JSON string
unsampled_report_instance = UnsampledReport.from_json(json)
# print the JSON string representation of the object
print(UnsampledReport.to_json())

# convert the object into a dict
unsampled_report_dict = unsampled_report_instance.to_dict()
# create an instance of UnsampledReport from a dict
unsampled_report_from_dict = UnsampledReport.from_dict(unsampled_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



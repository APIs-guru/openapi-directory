# UnsampledReportDriveDownloadDetails

Download details for a file stored in Google Drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **str** | Id of the document/file containing the report data. | [optional] 

## Example

```python
from openapi_client.models.unsampled_report_drive_download_details import UnsampledReportDriveDownloadDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UnsampledReportDriveDownloadDetails from a JSON string
unsampled_report_drive_download_details_instance = UnsampledReportDriveDownloadDetails.from_json(json)
# print the JSON string representation of the object
print(UnsampledReportDriveDownloadDetails.to_json())

# convert the object into a dict
unsampled_report_drive_download_details_dict = unsampled_report_drive_download_details_instance.to_dict()
# create an instance of UnsampledReportDriveDownloadDetails from a dict
unsampled_report_drive_download_details_from_dict = UnsampledReportDriveDownloadDetails.from_dict(unsampled_report_drive_download_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



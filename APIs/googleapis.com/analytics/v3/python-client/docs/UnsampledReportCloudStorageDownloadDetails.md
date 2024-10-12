# UnsampledReportCloudStorageDownloadDetails

Download details for a file stored in Google Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_id** | **str** | Id of the bucket the file object is stored in. | [optional] 
**object_id** | **str** | Id of the file object containing the report data. | [optional] 

## Example

```python
from openapi_client.models.unsampled_report_cloud_storage_download_details import UnsampledReportCloudStorageDownloadDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UnsampledReportCloudStorageDownloadDetails from a JSON string
unsampled_report_cloud_storage_download_details_instance = UnsampledReportCloudStorageDownloadDetails.from_json(json)
# print the JSON string representation of the object
print(UnsampledReportCloudStorageDownloadDetails.to_json())

# convert the object into a dict
unsampled_report_cloud_storage_download_details_dict = unsampled_report_cloud_storage_download_details_instance.to_dict()
# create an instance of UnsampledReportCloudStorageDownloadDetails from a dict
unsampled_report_cloud_storage_download_details_from_dict = UnsampledReportCloudStorageDownloadDetails.from_dict(unsampled_report_cloud_storage_download_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



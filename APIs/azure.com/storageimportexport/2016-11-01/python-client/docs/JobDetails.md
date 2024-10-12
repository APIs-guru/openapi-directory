# JobDetails

Specifies the job properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_drive_manifest** | **bool** | Default value is false. Indicates whether the manifest files on the drives should be copied to block blobs. | [optional] 
**cancel_requested** | **bool** | Indicates whether a request has been submitted to cancel the job. | [optional] 
**delivery_package** | [**PackageInfomation**](PackageInfomation.md) |  | [optional] 
**diagnostics_path** | **str** | The virtual blob directory to which the copy logs and backups of drive manifest files (if enabled) will be stored. | [optional] 
**drive_list** | [**List[DriveStatus]**](DriveStatus.md) | List of up to ten drives that comprise the job. The drive list is a required element for an import job; it is not specified for export jobs. | [optional] 
**export** | [**Export**](Export.md) |  | [optional] 
**incomplete_blob_list_uri** | **str** | A blob path that points to a block blob containing a list of blob names that were not exported due to insufficient drive space. If all blobs were exported successfully, then this element is not included in the response. | [optional] 
**job_type** | **str** | The type of job | [optional] 
**log_level** | **str** | Default value is Error. Indicates whether error logging or verbose logging will be enabled. | [optional] 
**percent_complete** | **int** | Overall percentage completed for the job. | [optional] 
**provisioning_state** | **str** | Specifies the provisioning state of the job. | [optional] 
**return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**return_package** | [**PackageInfomation**](PackageInfomation.md) |  | [optional] 
**return_shipping** | [**ReturnShipping**](ReturnShipping.md) |  | [optional] 
**shipping_information** | [**ShippingInformation**](ShippingInformation.md) |  | [optional] 
**state** | **str** | Current state of the job. | [optional] 
**storage_account_id** | **str** | The resource identifier of the storage account where data will be imported to or exported from. | [optional] 

## Example

```python
from openapi_client.models.job_details import JobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of JobDetails from a JSON string
job_details_instance = JobDetails.from_json(json)
# print the JSON string representation of the object
print(JobDetails.to_json())

# convert the object into a dict
job_details_dict = job_details_instance.to_dict()
# create an instance of JobDetails from a dict
job_details_from_dict = JobDetails.from_dict(job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# UpdateJobParametersProperties

Specifies the properties of a UpdateJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_drive_manifest** | **bool** | Indicates whether the manifest files on the drives should be copied to block blobs. | [optional] 
**cancel_requested** | **bool** | If specified, the value must be true. The service will attempt to cancel the job.  | [optional] 
**delivery_package** | [**PackageInfomation**](PackageInfomation.md) |  | [optional] 
**drive_list** | [**List[DriveStatus]**](DriveStatus.md) | List of drives that comprise the job. | [optional] 
**log_level** | **str** | Indicates whether error logging or verbose logging is enabled. | [optional] 
**return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**return_shipping** | [**ReturnShipping**](ReturnShipping.md) |  | [optional] 
**state** | **str** | If specified, the value must be Shipping, which tells the Import/Export service that the package for the job has been shipped. The ReturnAddress and DeliveryPackage properties must have been set either in this request or in a previous request, otherwise the request will fail.  | [optional] 

## Example

```python
from openapi_client.models.update_job_parameters_properties import UpdateJobParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateJobParametersProperties from a JSON string
update_job_parameters_properties_instance = UpdateJobParametersProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateJobParametersProperties.to_json())

# convert the object into a dict
update_job_parameters_properties_dict = update_job_parameters_properties_instance.to_dict()
# create an instance of UpdateJobParametersProperties from a dict
update_job_parameters_properties_from_dict = UpdateJobParametersProperties.from_dict(update_job_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



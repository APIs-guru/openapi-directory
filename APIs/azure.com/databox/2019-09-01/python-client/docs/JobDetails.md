# JobDetails

Job details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain_of_custody_sas_key** | **str** | Shared access key to download the chain of custody logs | [optional] [readonly] 
**contact_details** | [**ContactDetails**](ContactDetails.md) |  | 
**copy_log_details** | [**List[CopyLogDetails]**](CopyLogDetails.md) | List of copy log details. | [optional] [readonly] 
**delivery_package** | [**PackageShippingDetails**](PackageShippingDetails.md) |  | [optional] 
**destination_account_details** | [**List[DestinationAccountDetails]**](DestinationAccountDetails.md) | Destination account details. | 
**error_details** | [**List[JobErrorDetails]**](JobErrorDetails.md) | Error details for failure. This is optional. | [optional] [readonly] 
**expected_data_size_in_terabytes** | **int** | The expected size of the data, which needs to be transferred in this job, in terabytes. | [optional] 
**job_details_type** | **str** | Indicates the type of job details. | 
**job_stages** | [**List[JobStages]**](JobStages.md) | List of stages that run in the job. | [optional] [readonly] 
**preferences** | [**Preferences**](Preferences.md) |  | [optional] 
**return_package** | [**PackageShippingDetails**](PackageShippingDetails.md) |  | [optional] 
**reverse_shipment_label_sas_key** | **str** | Shared access key to download the return shipment label | [optional] [readonly] 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | 

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



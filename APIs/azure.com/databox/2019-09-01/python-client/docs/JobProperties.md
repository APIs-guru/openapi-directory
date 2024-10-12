# JobProperties

Job Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_reason** | **str** | Reason for cancellation. | [optional] [readonly] 
**delivery_info** | [**JobDeliveryInfo**](JobDeliveryInfo.md) |  | [optional] 
**delivery_type** | **str** | Delivery type of Job. | [optional] 
**details** | [**JobDetails**](JobDetails.md) |  | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**is_cancellable** | **bool** | Describes whether the job is cancellable or not. | [optional] [readonly] 
**is_cancellable_without_fee** | **bool** | Flag to indicate cancellation of scheduled job. | [optional] [readonly] 
**is_deletable** | **bool** | Describes whether the job is deletable or not. | [optional] [readonly] 
**is_shipping_address_editable** | **bool** | Describes whether the shipping address is editable or not. | [optional] [readonly] 
**start_time** | **datetime** | Time at which the job was started in UTC ISO 8601 format. | [optional] [readonly] 
**status** | **str** | Name of the stage which is in progress. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_properties import JobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobProperties from a JSON string
job_properties_instance = JobProperties.from_json(json)
# print the JSON string representation of the object
print(JobProperties.to_json())

# convert the object into a dict
job_properties_dict = job_properties_instance.to_dict()
# create an instance of JobProperties from a dict
job_properties_from_dict = JobProperties.from_dict(job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



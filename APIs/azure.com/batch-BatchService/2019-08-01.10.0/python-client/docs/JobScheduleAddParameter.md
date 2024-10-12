# JobScheduleAddParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. | [optional] 
**id** | **str** | The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). | 
**job_specification** | [**JobSpecification**](JobSpecification.md) |  | 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | The Batch service does not assign any meaning to metadata; it is solely for the use of user code. | [optional] 
**schedule** | [**Schedule**](Schedule.md) |  | 

## Example

```python
from openapi_client.models.job_schedule_add_parameter import JobScheduleAddParameter

# TODO update the JSON string below
json = "{}"
# create an instance of JobScheduleAddParameter from a JSON string
job_schedule_add_parameter_instance = JobScheduleAddParameter.from_json(json)
# print the JSON string representation of the object
print(JobScheduleAddParameter.to_json())

# convert the object into a dict
job_schedule_add_parameter_dict = job_schedule_add_parameter_instance.to_dict()
# create an instance of JobScheduleAddParameter from a dict
job_schedule_add_parameter_from_dict = JobScheduleAddParameter.from_dict(job_schedule_add_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



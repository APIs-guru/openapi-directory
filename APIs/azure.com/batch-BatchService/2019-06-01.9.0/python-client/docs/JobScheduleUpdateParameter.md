# JobScheduleUpdateParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_specification** | [**JobSpecification**](JobSpecification.md) |  | 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | If you do not specify this element, it takes the default value of an empty list; in effect, any existing metadata is deleted. | [optional] 
**schedule** | [**Schedule**](Schedule.md) |  | 

## Example

```python
from openapi_client.models.job_schedule_update_parameter import JobScheduleUpdateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of JobScheduleUpdateParameter from a JSON string
job_schedule_update_parameter_instance = JobScheduleUpdateParameter.from_json(json)
# print the JSON string representation of the object
print(JobScheduleUpdateParameter.to_json())

# convert the object into a dict
job_schedule_update_parameter_dict = job_schedule_update_parameter_instance.to_dict()
# create an instance of JobScheduleUpdateParameter from a dict
job_schedule_update_parameter_from_dict = JobScheduleUpdateParameter.from_dict(job_schedule_update_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



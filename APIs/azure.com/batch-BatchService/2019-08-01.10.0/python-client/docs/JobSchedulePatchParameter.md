# JobSchedulePatchParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_specification** | [**JobSpecification**](JobSpecification.md) |  | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | If you do not specify this element, existing metadata is left unchanged. | [optional] 
**schedule** | [**Schedule**](Schedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_schedule_patch_parameter import JobSchedulePatchParameter

# TODO update the JSON string below
json = "{}"
# create an instance of JobSchedulePatchParameter from a JSON string
job_schedule_patch_parameter_instance = JobSchedulePatchParameter.from_json(json)
# print the JSON string representation of the object
print(JobSchedulePatchParameter.to_json())

# convert the object into a dict
job_schedule_patch_parameter_dict = job_schedule_patch_parameter_instance.to_dict()
# create an instance of JobSchedulePatchParameter from a dict
job_schedule_patch_parameter_from_dict = JobSchedulePatchParameter.from_dict(job_schedule_patch_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# JobPatchParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraints** | [**JobConstraints**](JobConstraints.md) |  | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | If omitted, the existing Job metadata is left unchanged. | [optional] 
**on_all_tasks_complete** | [**OnAllTasksComplete**](OnAllTasksComplete.md) |  | [optional] 
**pool_info** | [**PoolInformation**](PoolInformation.md) |  | [optional] 
**priority** | **int** | Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the Job is left unchanged. | [optional] 

## Example

```python
from openapi_client.models.job_patch_parameter import JobPatchParameter

# TODO update the JSON string below
json = "{}"
# create an instance of JobPatchParameter from a JSON string
job_patch_parameter_instance = JobPatchParameter.from_json(json)
# print the JSON string representation of the object
print(JobPatchParameter.to_json())

# convert the object into a dict
job_patch_parameter_dict = job_patch_parameter_instance.to_dict()
# create an instance of JobPatchParameter from a dict
job_patch_parameter_from_dict = JobPatchParameter.from_dict(job_patch_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



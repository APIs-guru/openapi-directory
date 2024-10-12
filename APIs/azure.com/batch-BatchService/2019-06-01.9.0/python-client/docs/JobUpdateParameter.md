# JobUpdateParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraints** | [**JobConstraints**](JobConstraints.md) |  | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | If omitted, it takes the default value of an empty list; in effect, any existing metadata is deleted. | [optional] 
**on_all_tasks_complete** | [**OnAllTasksComplete**](OnAllTasksComplete.md) |  | [optional] 
**pool_info** | [**PoolInformation**](PoolInformation.md) |  | 
**priority** | **int** | Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, it is set to the default value 0. | [optional] 

## Example

```python
from openapi_client.models.job_update_parameter import JobUpdateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of JobUpdateParameter from a JSON string
job_update_parameter_instance = JobUpdateParameter.from_json(json)
# print the JSON string representation of the object
print(JobUpdateParameter.to_json())

# convert the object into a dict
job_update_parameter_dict = job_update_parameter_instance.to_dict()
# create an instance of JobUpdateParameter from a dict
job_update_parameter_from_dict = JobUpdateParameter.from_dict(job_update_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



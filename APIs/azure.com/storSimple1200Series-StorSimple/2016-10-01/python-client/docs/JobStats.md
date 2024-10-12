# JobStats

Stats that are available for all jobs in common

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_work_item_count** | **int** | Completed work item count. | [optional] 
**estimated_time_remaining** | **int** | The estimated time remaining. | [optional] 
**total_work_item_count** | **int** | Total work item count. | [optional] 

## Example

```python
from openapi_client.models.job_stats import JobStats

# TODO update the JSON string below
json = "{}"
# create an instance of JobStats from a JSON string
job_stats_instance = JobStats.from_json(json)
# print the JSON string representation of the object
print(JobStats.to_json())

# convert the object into a dict
job_stats_dict = job_stats_instance.to_dict()
# create an instance of JobStats from a dict
job_stats_from_dict = JobStats.from_dict(job_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



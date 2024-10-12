# JobStatistics

The Data Lake Analytics U-SQL job execution statistics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_update_time_utc** | **datetime** | Gets the last update time for the statistics. | [optional] [readonly] 
**stages** | [**List[JobStatisticsVertexStage]**](JobStatisticsVertexStage.md) | Gets the list of stages for the job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_statistics import JobStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatistics from a JSON string
job_statistics_instance = JobStatistics.from_json(json)
# print the JSON string representation of the object
print(JobStatistics.to_json())

# convert the object into a dict
job_statistics_dict = job_statistics_instance.to_dict()
# create an instance of JobStatistics from a dict
job_statistics_from_dict = JobStatistics.from_dict(job_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# JobStatisticsVertexStage

The Data Lake Analytics job statistics vertex stage information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_read** | **int** | the amount of data read, in bytes. | [optional] [readonly] 
**data_read_cross_pod** | **int** | the amount of data read across multiple pods, in bytes. | [optional] [readonly] 
**data_read_intra_pod** | **int** | the amount of data read in one pod, in bytes. | [optional] [readonly] 
**data_to_read** | **int** | the amount of data remaining to be read, in bytes. | [optional] [readonly] 
**data_written** | **int** | the amount of data written, in bytes. | [optional] [readonly] 
**duplicate_discard_count** | **int** | the number of duplicates that were discarded. | [optional] [readonly] 
**failed_count** | **int** | the number of failures that occurred in this stage. | [optional] [readonly] 
**max_vertex_data_read** | **int** | the maximum amount of data read in a single vertex, in bytes. | [optional] [readonly] 
**min_vertex_data_read** | **int** | the minimum amount of data read in a single vertex, in bytes. | [optional] [readonly] 
**read_failure_count** | **int** | the number of read failures in this stage. | [optional] [readonly] 
**revocation_count** | **int** | the number of vertices that were revoked during this stage. | [optional] [readonly] 
**running_count** | **int** | the number of currently running vertices in this stage. | [optional] [readonly] 
**scheduled_count** | **int** | the number of currently scheduled vertices in this stage | [optional] [readonly] 
**stage_name** | **str** | the name of this stage in job execution. | [optional] [readonly] 
**succeeded_count** | **int** | the number of vertices that succeeded in this stage. | [optional] [readonly] 
**temp_data_written** | **int** | the amount of temporary data written, in bytes. | [optional] [readonly] 
**total_count** | **int** | the total vertex count for this stage. | [optional] [readonly] 
**total_failed_time** | **str** | the amount of time that failed vertices took up in this stage. | [optional] [readonly] 
**total_progress** | **int** | the current progress of this stage, as a percentage. | [optional] [readonly] 
**total_succeeded_time** | **str** | the amount of time all successful vertices took in this stage. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_statistics_vertex_stage import JobStatisticsVertexStage

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatisticsVertexStage from a JSON string
job_statistics_vertex_stage_instance = JobStatisticsVertexStage.from_json(json)
# print the JSON string representation of the object
print(JobStatisticsVertexStage.to_json())

# convert the object into a dict
job_statistics_vertex_stage_dict = job_statistics_vertex_stage_instance.to_dict()
# create an instance of JobStatisticsVertexStage from a dict
job_statistics_vertex_stage_from_dict = JobStatisticsVertexStage.from_dict(job_statistics_vertex_stage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



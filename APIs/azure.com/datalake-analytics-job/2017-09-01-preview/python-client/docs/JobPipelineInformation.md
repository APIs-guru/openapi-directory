# JobPipelineInformation

Job Pipeline Information, showing the relationship of jobs and recurrences of those jobs in a pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**au_hours_canceled** | **float** | The number of job execution hours that resulted in canceled jobs. | [optional] [readonly] 
**au_hours_failed** | **float** | The number of job execution hours that resulted in failed jobs. | [optional] [readonly] 
**au_hours_succeeded** | **float** | The number of job execution hours that resulted in successful jobs. | [optional] [readonly] 
**last_submit_time** | **datetime** | The last time a job in this pipeline was submitted. | [optional] [readonly] 
**num_jobs_canceled** | **int** | The number of jobs in this pipeline that have been canceled. | [optional] [readonly] 
**num_jobs_failed** | **int** | The number of jobs in this pipeline that have failed. | [optional] [readonly] 
**num_jobs_succeeded** | **int** | The number of jobs in this pipeline that have succeeded. | [optional] [readonly] 
**pipeline_id** | **str** | The job relationship pipeline identifier (a GUID). | [optional] [readonly] 
**pipeline_name** | **str** | The friendly name of the job relationship pipeline, which does not need to be unique. | [optional] [readonly] 
**pipeline_uri** | **str** | The pipeline uri, unique, links to the originating service for this pipeline. | [optional] [readonly] 
**recurrences** | **List[str]** | The list of recurrence identifiers representing each run of this pipeline. | [optional] [readonly] 
**runs** | [**List[JobPipelineRunInformation]**](JobPipelineRunInformation.md) | The list of recurrence identifiers representing each run of this pipeline. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_pipeline_information import JobPipelineInformation

# TODO update the JSON string below
json = "{}"
# create an instance of JobPipelineInformation from a JSON string
job_pipeline_information_instance = JobPipelineInformation.from_json(json)
# print the JSON string representation of the object
print(JobPipelineInformation.to_json())

# convert the object into a dict
job_pipeline_information_dict = job_pipeline_information_instance.to_dict()
# create an instance of JobPipelineInformation from a dict
job_pipeline_information_from_dict = JobPipelineInformation.from_dict(job_pipeline_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



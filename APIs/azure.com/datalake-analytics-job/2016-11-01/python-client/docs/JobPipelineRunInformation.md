# JobPipelineRunInformation

Run info for a specific job pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_submit_time** | **datetime** | the time this instance was last submitted. | [optional] [readonly] 
**run_id** | **str** | the run identifier of an instance of pipeline executions (a GUID). | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_pipeline_run_information import JobPipelineRunInformation

# TODO update the JSON string below
json = "{}"
# create an instance of JobPipelineRunInformation from a JSON string
job_pipeline_run_information_instance = JobPipelineRunInformation.from_json(json)
# print the JSON string representation of the object
print(JobPipelineRunInformation.to_json())

# convert the object into a dict
job_pipeline_run_information_dict = job_pipeline_run_information_instance.to_dict()
# create an instance of JobPipelineRunInformation from a dict
job_pipeline_run_information_from_dict = JobPipelineRunInformation.from_dict(job_pipeline_run_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



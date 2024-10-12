# JobStage

Contains details about the multiple job stages of a job

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | The details of the stage. | [optional] 
**error_code** | **str** | The error code of the stage if any. | [optional] 
**message** | **str** | The message of the job stage. | [optional] 
**stage_status** | **str** | The stage status. | 

## Example

```python
from openapi_client.models.job_stage import JobStage

# TODO update the JSON string below
json = "{}"
# create an instance of JobStage from a JSON string
job_stage_instance = JobStage.from_json(json)
# print the JSON string representation of the object
print(JobStage.to_json())

# convert the object into a dict
job_stage_dict = job_stage_instance.to_dict()
# create an instance of JobStage from a dict
job_stage_from_dict = JobStage.from_dict(job_stage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



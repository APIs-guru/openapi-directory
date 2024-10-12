# JobStages

Job stages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the job stage. | [optional] [readonly] 
**error_details** | [**List[JobErrorDetails]**](JobErrorDetails.md) | Error details for the stage. | [optional] [readonly] 
**job_stage_details** | **object** | Job Stage Details | [optional] [readonly] 
**stage_name** | **str** | Name of the job stage. | [optional] [readonly] 
**stage_status** | **str** | Status of the job stage. | [optional] [readonly] 
**stage_time** | **datetime** | Time for the job stage in UTC ISO 8601 format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_stages import JobStages

# TODO update the JSON string below
json = "{}"
# create an instance of JobStages from a JSON string
job_stages_instance = JobStages.from_json(json)
# print the JSON string representation of the object
print(JobStages.to_json())

# convert the object into a dict
job_stages_dict = job_stages_instance.to_dict()
# create an instance of JobStages from a dict
job_stages_from_dict = JobStages.from_dict(job_stages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



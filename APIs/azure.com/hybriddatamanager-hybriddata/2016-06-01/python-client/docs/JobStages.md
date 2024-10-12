# JobStages

Job stages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_details** | [**List[ErrorDetails]**](ErrorDetails.md) | Error details for the stage. This is optional | [optional] 
**job_stage_details** | **object** | Job Stage Details | [optional] 
**stage_name** | **str** | Name of the job stage. | [optional] 
**stage_status** | **str** | Status of the job stage. | 

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



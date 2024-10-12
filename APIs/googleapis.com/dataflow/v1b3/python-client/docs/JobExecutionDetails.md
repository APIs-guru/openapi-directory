# JobExecutionDetails

Information about the execution of a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value. | [optional] 
**stages** | [**List[StageSummary]**](StageSummary.md) | The stages of the job execution. | [optional] 

## Example

```python
from openapi_client.models.job_execution_details import JobExecutionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of JobExecutionDetails from a JSON string
job_execution_details_instance = JobExecutionDetails.from_json(json)
# print the JSON string representation of the object
print(JobExecutionDetails.to_json())

# convert the object into a dict
job_execution_details_dict = job_execution_details_instance.to_dict()
# create an instance of JobExecutionDetails from a dict
job_execution_details_from_dict = JobExecutionDetails.from_dict(job_execution_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



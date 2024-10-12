# Job

The Job object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**call_back_endpoint** | **str** | The callback endpoint. | [optional] 
**id** | **str** | The job id. | [optional] 
**job_execution_report** | [**List[JobExecutionReportDetails]**](JobExecutionReportDetails.md) | Job execution report- Array of KeyValue pairs object. | [optional] 
**result_meta_data** | [**List[KeyValuePair]**](KeyValuePair.md) | Array of KeyValue pairs. | [optional] 
**review_id** | **str** | Review Id if one is created. | [optional] 
**status** | **str** | The status string (&lt;Pending, Failed, Completed&gt;). | [optional] 
**team_name** | **str** | The team name associated with the job. | [optional] 
**type** | **str** | Type of the content. | [optional] 
**workflow_id** | **str** | The Id of the workflow. | [optional] 

## Example

```python
from openapi_client.models.job import Job

# TODO update the JSON string below
json = "{}"
# create an instance of Job from a JSON string
job_instance = Job.from_json(json)
# print the JSON string representation of the object
print(Job.to_json())

# convert the object into a dict
job_dict = job_instance.to_dict()
# create an instance of Job from a dict
job_from_dict = Job.from_dict(job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# JobInformation

The common Data Lake Analytics job information properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**degree_of_parallelism** | **int** | Gets or sets the degree of parallelism used for this job. This must be greater than 0. | [optional] 
**degree_of_parallelism_percent** | **float** | the degree of parallelism in percentage used for this job. | [optional] 
**end_time** | **datetime** | Gets the completion time of the job. | [optional] [readonly] 
**error_message** | [**List[JobErrorDetails]**](JobErrorDetails.md) | Gets the error message details for the job, if the job failed. | [optional] [readonly] 
**hierarchy_queue_node** | **str** | the name of hierarchy queue node this job is assigned to, null if job has not been assigned yet or the account doesn&#39;t have hierarchy queue. | [optional] [readonly] 
**job_id** | **str** | Gets or sets the job&#39;s unique identifier (a GUID). | [optional] 
**name** | **str** | Gets or sets the friendly name of the job. | 
**priority** | **int** | Gets or sets the priority value for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0. | [optional] 
**properties** | [**JobProperties**](JobProperties.md) |  | 
**result** | **str** | Gets the result of job execution or the current result of the running job. | [optional] [readonly] 
**start_time** | **datetime** | Gets the start time of the job. | [optional] [readonly] 
**state** | **str** | Gets the job state. When the job is in the Ended state, refer to Result and ErrorMessage for details. | [optional] [readonly] 
**state_audit_records** | [**List[JobStateAuditRecord]**](JobStateAuditRecord.md) | Gets the job state audit records, indicating when various operations have been performed on this job. | [optional] [readonly] 
**submit_time** | **datetime** | Gets the time the job was submitted to the service. | [optional] [readonly] 
**submitter** | **str** | Gets or sets the user or account that submitted the job. | [optional] 
**type** | **str** | Gets or sets the job type of the current job (Hive or USql). | 

## Example

```python
from openapi_client.models.job_information import JobInformation

# TODO update the JSON string below
json = "{}"
# create an instance of JobInformation from a JSON string
job_information_instance = JobInformation.from_json(json)
# print the JSON string representation of the object
print(JobInformation.to_json())

# convert the object into a dict
job_information_dict = job_information_instance.to_dict()
# create an instance of JobInformation from a dict
job_information_from_dict = JobInformation.from_dict(job_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



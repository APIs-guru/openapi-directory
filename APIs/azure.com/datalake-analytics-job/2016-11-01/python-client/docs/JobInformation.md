# JobInformation

The extended Data Lake Analytics job information properties returned when retrieving a specific job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | [**List[JobErrorDetails]**](JobErrorDetails.md) | the error message details for the job, if the job failed. | [optional] [readonly] 
**properties** | [**JobProperties**](JobProperties.md) |  | 
**state_audit_records** | [**List[JobStateAuditRecord]**](JobStateAuditRecord.md) | the job state audit records, indicating when various operations have been performed on this job. | [optional] [readonly] 
**degree_of_parallelism** | **int** | the degree of parallelism used for this job. | [optional] [readonly] [default to 1]
**degree_of_parallelism_percent** | **float** | the degree of parallelism in percentage used for this job. | [optional] [readonly] 
**end_time** | **datetime** | the completion time of the job. | [optional] [readonly] 
**hierarchy_queue_node** | **str** | the name of hierarchy queue node this job is assigned to, null if job has not been assigned yet or the account doesn&#39;t have hierarchy queue. | [optional] [readonly] 
**job_id** | **str** | the job&#39;s unique identifier (a GUID). | [optional] [readonly] 
**log_file_patterns** | **List[str]** | the list of log file name patterns to find in the logFolder. &#39;*&#39; is the only matching character allowed. Example format: jobExecution*.log or *mylog*.txt | [optional] [readonly] 
**log_folder** | **str** | the log folder path to use in the following format: adl://&lt;accountName&gt;.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/13/17/18/5fe51957-93bc-4de0-8ddc-c5a4753b068b/logs/. | [optional] [readonly] 
**name** | **str** | the friendly name of the job. | 
**priority** | **int** | the priority value for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0. | [optional] [readonly] 
**related** | [**JobRelationshipProperties**](JobRelationshipProperties.md) |  | [optional] 
**result** | **str** | the result of job execution or the current result of the running job. | [optional] [readonly] 
**start_time** | **datetime** | the start time of the job. | [optional] [readonly] 
**state** | **str** | the job state. When the job is in the Ended state, refer to Result and ErrorMessage for details. | [optional] [readonly] 
**submit_time** | **datetime** | the time the job was submitted to the service. | [optional] [readonly] 
**submitter** | **str** | the user or account that submitted the job. | [optional] [readonly] 
**type** | **str** | the job type of the current job (Hive or USql). | 

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



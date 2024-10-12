# JobInformationBasic

The common Data Lake Analytics job information properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**degree_of_parallelism** | **int** | The degree of parallelism used for this job. | [optional] [default to 1]
**degree_of_parallelism_percent** | **float** | the degree of parallelism in percentage used for this job. | [optional] [readonly] 
**end_time** | **datetime** | The completion time of the job. | [optional] [readonly] 
**hierarchy_queue_node** | **str** | the name of hierarchy queue node this job is assigned to, Null if job has not been assigned yet or the account doesn&#39;t have hierarchy queue. | [optional] [readonly] 
**job_id** | **str** | The job&#39;s unique identifier (a GUID). | [optional] [readonly] 
**log_file_patterns** | **List[str]** | The list of log file name patterns to find in the logFolder. &#39;*&#39; is the only matching character allowed. Example format: jobExecution*.log or *mylog*.txt | [optional] 
**log_folder** | **str** | The log folder path to use in the following format: adl://&lt;accountName&gt;.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/13/17/18/5fe51957-93bc-4de0-8ddc-c5a4753b068b/logs/. | [optional] [readonly] 
**name** | **str** | The friendly name of the job. | 
**priority** | **int** | The priority value for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0. | [optional] 
**related** | [**JobRelationshipProperties**](JobRelationshipProperties.md) |  | [optional] 
**result** | **str** | The result of job execution or the current result of the running job. | [optional] [readonly] 
**start_time** | **datetime** | The start time of the job. | [optional] [readonly] 
**state** | **str** | The job state. When the job is in the Ended state, refer to Result and ErrorMessage for details. | [optional] [readonly] 
**submit_time** | **datetime** | The time the job was submitted to the service. | [optional] [readonly] 
**submitter** | **str** | The user or account that submitted the job. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The key-value pairs used to add additional metadata to the job information. (Only for use internally with Scope job type.) | [optional] 
**type** | **str** | The job type of the current job (Hive, USql, or Scope (for internal use only)). | 

## Example

```python
from openapi_client.models.job_information_basic import JobInformationBasic

# TODO update the JSON string below
json = "{}"
# create an instance of JobInformationBasic from a JSON string
job_information_basic_instance = JobInformationBasic.from_json(json)
# print the JSON string representation of the object
print(JobInformationBasic.to_json())

# convert the object into a dict
job_information_basic_dict = job_information_basic_instance.to_dict()
# create an instance of JobInformationBasic from a dict
job_information_basic_from_dict = JobInformationBasic.from_dict(job_information_basic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



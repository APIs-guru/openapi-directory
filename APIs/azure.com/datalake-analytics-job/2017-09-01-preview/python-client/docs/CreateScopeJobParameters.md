# CreateScopeJobParameters

The parameters used to submit a new Data Lake Analytics Scope job. (Only for use internally with Scope job type.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | The key-value pairs used to add additional metadata to the job information. | [optional] 
**degree_of_parallelism** | **int** | The degree of parallelism to use for this job. At most one of degreeOfParallelism and degreeOfParallelismPercent should be specified. If none, a default value of 1 will be used for degreeOfParallelism. | [optional] [default to 1]
**degree_of_parallelism_percent** | **float** | the degree of parallelism in percentage used for this job. At most one of degreeOfParallelism and degreeOfParallelismPercent should be specified. If none, a default value of 1 will be used for degreeOfParallelism. | [optional] 
**log_file_patterns** | **List[str]** | The list of log file name patterns to find in the logFolder. &#39;*&#39; is the only matching character allowed. Example format: jobExecution*.log or *mylog*.txt | [optional] 
**name** | **str** | The friendly name of the job to submit. | 
**priority** | **int** | The priority value to use for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0. | [optional] 
**related** | [**JobRelationshipProperties**](JobRelationshipProperties.md) |  | [optional] 
**properties** | [**CreateJobProperties**](CreateJobProperties.md) |  | 
**type** | **str** | The job type of the current job (Hive, USql, or Scope (for internal use only)). | 

## Example

```python
from openapi_client.models.create_scope_job_parameters import CreateScopeJobParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CreateScopeJobParameters from a JSON string
create_scope_job_parameters_instance = CreateScopeJobParameters.from_json(json)
# print the JSON string representation of the object
print(CreateScopeJobParameters.to_json())

# convert the object into a dict
create_scope_job_parameters_dict = create_scope_job_parameters_instance.to_dict()
# create an instance of CreateScopeJobParameters from a dict
create_scope_job_parameters_from_dict = CreateScopeJobParameters.from_dict(create_scope_job_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



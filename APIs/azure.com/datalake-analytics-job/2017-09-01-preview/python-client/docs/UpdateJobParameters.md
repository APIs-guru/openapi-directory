# UpdateJobParameters

The parameters that can be used to update existing Data Lake Analytics job information properties. (Only for use internally with Scope job type.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**degree_of_parallelism** | **int** | The degree of parallelism used for this job. | [optional] 
**degree_of_parallelism_percent** | **float** | the degree of parallelism in percentage used for this job. | [optional] 
**priority** | **int** | The priority value for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0. | [optional] 
**tags** | **Dict[str, str]** | The key-value pairs used to add additional metadata to the job information. | [optional] 

## Example

```python
from openapi_client.models.update_job_parameters import UpdateJobParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateJobParameters from a JSON string
update_job_parameters_instance = UpdateJobParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateJobParameters.to_json())

# convert the object into a dict
update_job_parameters_dict = update_job_parameters_instance.to_dict()
# create an instance of UpdateJobParameters from a dict
update_job_parameters_from_dict = UpdateJobParameters.from_dict(update_job_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# JobConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy** | [**JobConfigurationTableCopy**](JobConfigurationTableCopy.md) |  | [optional] 
**dry_run** | **bool** | Optional. If set, don&#39;t actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn&#39;t a dry run. Behavior of non-query jobs is undefined. | [optional] 
**extract** | [**JobConfigurationExtract**](JobConfigurationExtract.md) |  | [optional] 
**job_timeout_ms** | **str** | Optional. Job timeout in milliseconds. If this time limit is exceeded, BigQuery might attempt to stop the job. | [optional] 
**job_type** | **str** | Output only. The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN. | [optional] 
**labels** | **Dict[str, str]** | The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. | [optional] 
**load** | [**JobConfigurationLoad**](JobConfigurationLoad.md) |  | [optional] 
**query** | [**JobConfigurationQuery**](JobConfigurationQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_configuration import JobConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of JobConfiguration from a JSON string
job_configuration_instance = JobConfiguration.from_json(json)
# print the JSON string representation of the object
print(JobConfiguration.to_json())

# convert the object into a dict
job_configuration_dict = job_configuration_instance.to_dict()
# create an instance of JobConfiguration from a dict
job_configuration_from_dict = JobConfiguration.from_dict(job_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



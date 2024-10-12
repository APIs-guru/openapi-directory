# USqlJobProperties

U-SQL job properties used when retrieving U-SQL jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algebra_file_path** | **str** | the algebra file path after the job has completed | [optional] [readonly] 
**compile_mode** | **str** | the specific compilation mode for the job used during execution. If this is not specified during submission, the server will determine the optimal compilation mode. | [optional] [readonly] 
**debug_data** | [**JobDataPath**](JobDataPath.md) |  | [optional] 
**diagnostics** | [**List[Diagnostics]**](Diagnostics.md) | the diagnostics for the job. | [optional] [readonly] 
**resources** | [**List[JobResource]**](JobResource.md) | the list of resources that are required by the job | [optional] [readonly] 
**root_process_node_id** | **str** | the ID used to identify the job manager coordinating job execution. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 
**statistics** | [**JobStatistics**](JobStatistics.md) |  | [optional] 
**total_compilation_time** | **str** | the total time this job spent compiling. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 
**total_pause_time** | **str** | the total time this job spent paused. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 
**total_queued_time** | **str** | the total time this job spent queued. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 
**total_running_time** | **str** | the total time this job spent executing. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 
**yarn_application_id** | **str** | the ID used to identify the yarn application executing the job. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 
**yarn_application_time_stamp** | **int** | the timestamp (in ticks) for the yarn application executing the job. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 

## Example

```python
from openapi_client.models.u_sql_job_properties import USqlJobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of USqlJobProperties from a JSON string
u_sql_job_properties_instance = USqlJobProperties.from_json(json)
# print the JSON string representation of the object
print(USqlJobProperties.to_json())

# convert the object into a dict
u_sql_job_properties_dict = u_sql_job_properties_instance.to_dict()
# create an instance of USqlJobProperties from a dict
u_sql_job_properties_from_dict = USqlJobProperties.from_dict(u_sql_job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



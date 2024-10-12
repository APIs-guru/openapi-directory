# JobProperties

Job specific properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caffe_settings** | [**CaffeSettings**](CaffeSettings.md) |  | [optional] 
**chainer_settings** | [**ChainerSettings**](ChainerSettings.md) |  | [optional] 
**cluster** | [**ResourceId**](ResourceId.md) |  | [optional] 
**cntk_settings** | [**CNTKsettings**](CNTKsettings.md) |  | [optional] 
**constraints** | [**JobBasePropertiesConstraints**](JobBasePropertiesConstraints.md) |  | [optional] 
**container_settings** | [**ContainerSettings**](ContainerSettings.md) |  | [optional] 
**creation_time** | **datetime** | The creation time of the job. | [optional] [readonly] 
**custom_toolkit_settings** | [**CustomToolkitSettings**](CustomToolkitSettings.md) |  | [optional] 
**environment_variables** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) | Batch AI services sets the following environment variables for all jobs: AZ_BATCHAI_INPUT_id, AZ_BATCHAI_OUTPUT_id, AZ_BATCHAI_NUM_GPUS_PER_NODE, For distributed TensorFlow jobs, following additional environment variables are set by the Batch AI Service: AZ_BATCHAI_PS_HOSTS, AZ_BATCHAI_WORKER_HOSTS. | [optional] 
**execution_info** | [**JobPropertiesExecutionInfo**](JobPropertiesExecutionInfo.md) |  | [optional] 
**execution_state** | **str** | The current state of the job. Possible values are: queued - The job is queued and able to run. A job enters this state when it is created, or when it is awaiting a retry after a failed run. running - The job is running on a compute cluster. This includes job-level preparation such as downloading resource files or set up container specified on the job - it does not necessarily mean that the job command line has started executing. terminating - The job is terminated by the user, the terminate operation is in progress. succeeded - The job has completed running successfully and exited with exit code 0. failed - The job has finished unsuccessfully (failed with a non-zero exit code) and has exhausted its retry limit. A job is also marked as failed if an error occurred launching the job. | [optional] 
**execution_state_transition_time** | **datetime** | The time at which the job entered its current execution state. | [optional] [readonly] 
**experiment_name** | **str** | Describe the experiment information of the job | [optional] 
**input_directories** | [**List[InputDirectory]**](InputDirectory.md) |  | [optional] 
**job_preparation** | [**JobPreparation**](JobPreparation.md) |  | [optional] 
**node_count** | **int** | The job will be gang scheduled on that many compute nodes | [optional] 
**output_directories** | [**List[OutputDirectory]**](OutputDirectory.md) |  | [optional] 
**priority** | **int** | Priority associated with the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. | [optional] [default to 0]
**provisioning_state** | **str** | The provisioned state of the Batch AI job | [optional] [readonly] 
**provisioning_state_transition_time** | **datetime** | The time at which the job entered its current provisioning state. | [optional] [readonly] 
**std_out_err_path_prefix** | **str** | The path where the Batch AI service will upload stdout and stderror of the job. | [optional] 
**tensor_flow_settings** | [**TensorFlowSettings**](TensorFlowSettings.md) |  | [optional] 
**tool_type** | [**ToolType**](ToolType.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_properties import JobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobProperties from a JSON string
job_properties_instance = JobProperties.from_json(json)
# print the JSON string representation of the object
print(JobProperties.to_json())

# convert the object into a dict
job_properties_dict = job_properties_instance.to_dict()
# create an instance of JobProperties from a dict
job_properties_from_dict = JobProperties.from_dict(job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



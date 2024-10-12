# JobBaseProperties

The properties of a Batch AI job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caffe2_settings** | [**Caffe2Settings**](Caffe2Settings.md) |  | [optional] 
**caffe_settings** | [**CaffeSettings**](CaffeSettings.md) |  | [optional] 
**chainer_settings** | [**ChainerSettings**](ChainerSettings.md) |  | [optional] 
**cluster** | [**ResourceId**](ResourceId.md) |  | 
**cntk_settings** | [**CNTKsettings**](CNTKsettings.md) |  | [optional] 
**constraints** | [**JobBasePropertiesConstraints**](JobBasePropertiesConstraints.md) |  | [optional] 
**container_settings** | [**ContainerSettings**](ContainerSettings.md) |  | [optional] 
**custom_toolkit_settings** | [**CustomToolkitSettings**](CustomToolkitSettings.md) |  | [optional] 
**environment_variables** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) | Batch AI service sets the following environment variables for all jobs: AZ_BATCHAI_INPUT_id, AZ_BATCHAI_OUTPUT_id, AZ_BATCHAI_NUM_GPUS_PER_NODE. For distributed TensorFlow jobs, following additional environment variables are set by the Batch AI Service: AZ_BATCHAI_PS_HOSTS, AZ_BATCHAI_WORKER_HOSTS | [optional] 
**experiment_name** | **str** | Describe the experiment information of the job | [optional] 
**input_directories** | [**List[InputDirectory]**](InputDirectory.md) |  | [optional] 
**job_preparation** | [**JobPreparation**](JobPreparation.md) |  | [optional] 
**node_count** | **int** | The job will be gang scheduled on that many compute nodes | 
**output_directories** | [**List[OutputDirectory]**](OutputDirectory.md) |  | [optional] 
**priority** | **int** | Priority associated with the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. | [optional] [default to 0]
**std_out_err_path_prefix** | **str** | The path where the Batch AI service will upload stdout and stderror of the job. | 
**tensor_flow_settings** | [**TensorFlowSettings**](TensorFlowSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_base_properties import JobBaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobBaseProperties from a JSON string
job_base_properties_instance = JobBaseProperties.from_json(json)
# print the JSON string representation of the object
print(JobBaseProperties.to_json())

# convert the object into a dict
job_base_properties_dict = job_base_properties_instance.to_dict()
# create an instance of JobBaseProperties from a dict
job_base_properties_from_dict = JobBaseProperties.from_dict(job_base_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



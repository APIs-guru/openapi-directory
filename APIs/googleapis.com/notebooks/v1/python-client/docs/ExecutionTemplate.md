# ExecutionTemplate

The description a notebook execution workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_config** | [**SchedulerAcceleratorConfig**](SchedulerAcceleratorConfig.md) |  | [optional] 
**container_image_uri** | **str** | Container Image URI to a DLVM Example: &#39;gcr.io/deeplearning-platform-release/base-cu100&#39; More examples can be found at: https://cloud.google.com/ai-platform/deep-learning-containers/docs/choosing-container | [optional] 
**dataproc_parameters** | [**DataprocParameters**](DataprocParameters.md) |  | [optional] 
**input_notebook_file** | **str** | Path to the notebook file to execute. Must be in a Google Cloud Storage bucket. Format: &#x60;gs://{bucket_name}/{folder}/{notebook_file_name}&#x60; Ex: &#x60;gs://notebook_user/scheduled_notebooks/sentiment_notebook.ipynb&#x60; | [optional] 
**job_type** | **str** | The type of Job to be used on this execution. | [optional] 
**kernel_spec** | **str** | Name of the kernel spec to use. This must be specified if the kernel spec name on the execution target does not match the name in the input notebook file. | [optional] 
**labels** | **Dict[str, str]** | Labels for execution. If execution is scheduled, a field included will be &#39;nbs-scheduled&#39;. Otherwise, it is an immediate execution, and an included field will be &#39;nbs-immediate&#39;. Use fields to efficiently index between various types of executions. | [optional] 
**master_type** | **str** | Specifies the type of virtual machine to use for your training job&#39;s master worker. You must specify this field when &#x60;scaleTier&#x60; is set to &#x60;CUSTOM&#x60;. You can use certain Compute Engine machine types directly in this field. The following types are supported: - &#x60;n1-standard-4&#x60; - &#x60;n1-standard-8&#x60; - &#x60;n1-standard-16&#x60; - &#x60;n1-standard-32&#x60; - &#x60;n1-standard-64&#x60; - &#x60;n1-standard-96&#x60; - &#x60;n1-highmem-2&#x60; - &#x60;n1-highmem-4&#x60; - &#x60;n1-highmem-8&#x60; - &#x60;n1-highmem-16&#x60; - &#x60;n1-highmem-32&#x60; - &#x60;n1-highmem-64&#x60; - &#x60;n1-highmem-96&#x60; - &#x60;n1-highcpu-16&#x60; - &#x60;n1-highcpu-32&#x60; - &#x60;n1-highcpu-64&#x60; - &#x60;n1-highcpu-96&#x60; Alternatively, you can use the following legacy machine types: - &#x60;standard&#x60; - &#x60;large_model&#x60; - &#x60;complex_model_s&#x60; - &#x60;complex_model_m&#x60; - &#x60;complex_model_l&#x60; - &#x60;standard_gpu&#x60; - &#x60;complex_model_m_gpu&#x60; - &#x60;complex_model_l_gpu&#x60; - &#x60;standard_p100&#x60; - &#x60;complex_model_m_p100&#x60; - &#x60;standard_v100&#x60; - &#x60;large_model_v100&#x60; - &#x60;complex_model_m_v100&#x60; - &#x60;complex_model_l_v100&#x60; Finally, if you want to use a TPU for training, specify &#x60;cloud_tpu&#x60; in this field. Learn more about the [special configuration options for training with TPU](https://cloud.google.com/ai-platform/training/docs/using-tpus#configuring_a_custom_tpu_machine). | [optional] 
**output_notebook_folder** | **str** | Path to the notebook folder to write to. Must be in a Google Cloud Storage bucket path. Format: &#x60;gs://{bucket_name}/{folder}&#x60; Ex: &#x60;gs://notebook_user/scheduled_notebooks&#x60; | [optional] 
**parameters** | **str** | Parameters used within the &#39;input_notebook_file&#39; notebook. | [optional] 
**params_yaml_file** | **str** | Parameters to be overridden in the notebook during execution. Ref https://papermill.readthedocs.io/en/latest/usage-parameterize.html on how to specifying parameters in the input notebook and pass them here in an YAML file. Ex: &#x60;gs://notebook_user/scheduled_notebooks/sentiment_notebook_params.yaml&#x60; | [optional] 
**scale_tier** | **str** | Required. Scale tier of the hardware used for notebook execution. DEPRECATED Will be discontinued. As right now only CUSTOM is supported. | [optional] 
**service_account** | **str** | The email address of a service account to use when running the execution. You must have the &#x60;iam.serviceAccounts.actAs&#x60; permission for the specified service account. | [optional] 
**tensorboard** | **str** | The name of a Vertex AI [Tensorboard] resource to which this execution will upload Tensorboard logs. Format: &#x60;projects/{project}/locations/{location}/tensorboards/{tensorboard}&#x60; | [optional] 
**vertex_ai_parameters** | [**VertexAIParameters**](VertexAIParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.execution_template import ExecutionTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionTemplate from a JSON string
execution_template_instance = ExecutionTemplate.from_json(json)
# print the JSON string representation of the object
print(ExecutionTemplate.to_json())

# convert the object into a dict
execution_template_dict = execution_template_instance.to_dict()
# create an instance of ExecutionTemplate from a dict
execution_template_from_dict = ExecutionTemplate.from_dict(execution_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



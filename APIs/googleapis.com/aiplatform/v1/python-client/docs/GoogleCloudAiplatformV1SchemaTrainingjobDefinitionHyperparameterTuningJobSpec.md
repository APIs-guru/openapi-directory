# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionHyperparameterTuningJobSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_failed_trial_count** | **int** | The number of failed Trials that need to be seen before failing the HyperparameterTuningJob. If set to 0, Vertex AI decides how many Trials must fail before the whole job fails. | [optional] 
**max_trial_count** | **int** | The desired total number of Trials. | [optional] 
**parallel_trial_count** | **int** | The desired number of Trials to run in parallel. | [optional] 
**study_spec** | [**GoogleCloudAiplatformV1StudySpec**](GoogleCloudAiplatformV1StudySpec.md) |  | [optional] 
**trial_job_spec** | [**GoogleCloudAiplatformV1CustomJobSpec**](GoogleCloudAiplatformV1CustomJobSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_hyperparameter_tuning_job_spec import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionHyperparameterTuningJobSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionHyperparameterTuningJobSpec from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_hyperparameter_tuning_job_spec_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionHyperparameterTuningJobSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionHyperparameterTuningJobSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_hyperparameter_tuning_job_spec_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_hyperparameter_tuning_job_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionHyperparameterTuningJobSpec from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_hyperparameter_tuning_job_spec_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionHyperparameterTuningJobSpec.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_hyperparameter_tuning_job_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningJobMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backing_hyperparameter_tuning_job** | **str** | The resource name of the HyperparameterTuningJob that has been created to carry out this HyperparameterTuning task. | [optional] 
**best_trial_backing_custom_job** | **str** | The resource name of the CustomJob that has been created to run the best Trial of this HyperparameterTuning task. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_job_metadata import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningJobMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningJobMetadata from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_job_metadata_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningJobMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningJobMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_job_metadata_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_job_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningJobMetadata from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_job_metadata_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningJobMetadata.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_job_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningTask

A TrainingJob that tunes Hypererparameters of a custom code Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningJobSpec**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningJobSpec.md) |  | [optional] 
**metadata** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningJobMetadata**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningJobMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_task import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningTask

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningTask from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_task_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningTask.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningTask.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_task_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_task_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningTask from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_task_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHyperparameterTuningTask.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_hyperparameter_tuning_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



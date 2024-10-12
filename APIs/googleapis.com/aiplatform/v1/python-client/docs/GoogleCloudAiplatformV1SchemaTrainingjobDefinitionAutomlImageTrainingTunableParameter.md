# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutomlImageTrainingTunableParameter

A wrapper class which contains the tunable parameters in an AutoML Image training job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkpoint_name** | **str** | Optional. An unique name of pretrained model checkpoint provided in model garden, it will be mapped to a GCS location internally. | [optional] 
**dataset_config** | **Dict[str, str]** | Customizable dataset settings, used in the &#x60;model_garden_trainer&#x60;. | [optional] 
**study_spec** | [**GoogleCloudAiplatformV1StudySpec**](GoogleCloudAiplatformV1StudySpec.md) |  | [optional] 
**trainer_config** | **Dict[str, str]** | Customizable trainer settings, used in the &#x60;model_garden_trainer&#x60;. | [optional] 
**trainer_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_image_training_tunable_parameter import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutomlImageTrainingTunableParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutomlImageTrainingTunableParameter from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_image_training_tunable_parameter_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutomlImageTrainingTunableParameter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutomlImageTrainingTunableParameter.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_image_training_tunable_parameter_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_image_training_tunable_parameter_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutomlImageTrainingTunableParameter from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_image_training_tunable_parameter_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutomlImageTrainingTunableParameter.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_image_training_tunable_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



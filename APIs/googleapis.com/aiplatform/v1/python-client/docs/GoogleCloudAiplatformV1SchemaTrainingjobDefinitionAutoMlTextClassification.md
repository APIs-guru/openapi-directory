# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTextClassification

A TrainingJob that trains and uploads an AutoML Text Classification Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTextClassificationInputs**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTextClassificationInputs.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_text_classification import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTextClassification

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTextClassification from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_text_classification_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTextClassification.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTextClassification.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_text_classification_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_text_classification_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTextClassification from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_text_classification_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTextClassification.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_text_classification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



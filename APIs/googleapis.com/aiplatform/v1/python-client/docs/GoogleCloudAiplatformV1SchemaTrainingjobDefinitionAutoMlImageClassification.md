# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassification

A TrainingJob that trains and uploads an AutoML Image Classification Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassificationInputs**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassificationInputs.md) |  | [optional] 
**metadata** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassificationMetadata**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassificationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassification

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassification from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassification.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassification.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassification from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassification.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



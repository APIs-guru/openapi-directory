# GoogleCloudAiplatformV1PredictSchemata

Contains the schemata used in Model's predictions and explanations via PredictionService.Predict, PredictionService.Explain and BatchPredictionJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_schema_uri** | **str** | Immutable. Points to a YAML file stored on Google Cloud Storage describing the format of a single instance, which are used in PredictRequest.instances, ExplainRequest.instances and BatchPredictionJob.input_config. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). AutoML Models always have this field populated by Vertex AI. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access. | [optional] 
**parameters_schema_uri** | **str** | Immutable. Points to a YAML file stored on Google Cloud Storage describing the parameters of prediction and explanation via PredictRequest.parameters, ExplainRequest.parameters and BatchPredictionJob.model_parameters. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). AutoML Models always have this field populated by Vertex AI, if no parameters are supported, then it is set to an empty string. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access. | [optional] 
**prediction_schema_uri** | **str** | Immutable. Points to a YAML file stored on Google Cloud Storage describing the format of a single prediction produced by this Model, which are returned via PredictResponse.predictions, ExplainResponse.explanations, and BatchPredictionJob.output_config. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). AutoML Models always have this field populated by Vertex AI. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_predict_schemata import GoogleCloudAiplatformV1PredictSchemata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PredictSchemata from a JSON string
google_cloud_aiplatform_v1_predict_schemata_instance = GoogleCloudAiplatformV1PredictSchemata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PredictSchemata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_predict_schemata_dict = google_cloud_aiplatform_v1_predict_schemata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PredictSchemata from a dict
google_cloud_aiplatform_v1_predict_schemata_from_dict = GoogleCloudAiplatformV1PredictSchemata.from_dict(google_cloud_aiplatform_v1_predict_schemata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



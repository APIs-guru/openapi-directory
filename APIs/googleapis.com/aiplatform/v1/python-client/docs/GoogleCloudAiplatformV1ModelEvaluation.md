# GoogleCloudAiplatformV1ModelEvaluation

A collection of metrics calculated by comparing Model's predictions on all of the test data against annotations from the test data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_schema_uri** | **str** | Points to a YAML file stored on Google Cloud Storage describing EvaluatedDataItemView.predictions, EvaluatedDataItemView.ground_truths, EvaluatedAnnotation.predictions, and EvaluatedAnnotation.ground_truths. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). This field is not populated if there are neither EvaluatedDataItemViews nor EvaluatedAnnotations under this ModelEvaluation. | [optional] 
**create_time** | **str** | Output only. Timestamp when this ModelEvaluation was created. | [optional] [readonly] 
**data_item_schema_uri** | **str** | Points to a YAML file stored on Google Cloud Storage describing EvaluatedDataItemView.data_item_payload and EvaluatedAnnotation.data_item_payload. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). This field is not populated if there are neither EvaluatedDataItemViews nor EvaluatedAnnotations under this ModelEvaluation. | [optional] 
**display_name** | **str** | The display name of the ModelEvaluation. | [optional] 
**explanation_specs** | [**List[GoogleCloudAiplatformV1ModelEvaluationModelEvaluationExplanationSpec]**](GoogleCloudAiplatformV1ModelEvaluationModelEvaluationExplanationSpec.md) | Describes the values of ExplanationSpec that are used for explaining the predicted values on the evaluated data. | [optional] 
**metadata** | **object** | The metadata of the ModelEvaluation. For the ModelEvaluation uploaded from Managed Pipeline, metadata contains a structured value with keys of \&quot;pipeline_job_id\&quot;, \&quot;evaluation_dataset_type\&quot;, \&quot;evaluation_dataset_path\&quot;, \&quot;row_based_metrics_path\&quot;. | [optional] 
**metrics** | **object** | Evaluation metrics of the Model. The schema of the metrics is stored in metrics_schema_uri | [optional] 
**metrics_schema_uri** | **str** | Points to a YAML file stored on Google Cloud Storage describing the metrics of this ModelEvaluation. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). | [optional] 
**model_explanation** | [**GoogleCloudAiplatformV1ModelExplanation**](GoogleCloudAiplatformV1ModelExplanation.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the ModelEvaluation. | [optional] [readonly] 
**slice_dimensions** | **List[str]** | All possible dimensions of ModelEvaluationSlices. The dimensions can be used as the filter of the ModelService.ListModelEvaluationSlices request, in the form of &#x60;slice.dimension &#x3D; &#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_evaluation import GoogleCloudAiplatformV1ModelEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelEvaluation from a JSON string
google_cloud_aiplatform_v1_model_evaluation_instance = GoogleCloudAiplatformV1ModelEvaluation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelEvaluation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_evaluation_dict = google_cloud_aiplatform_v1_model_evaluation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelEvaluation from a dict
google_cloud_aiplatform_v1_model_evaluation_from_dict = GoogleCloudAiplatformV1ModelEvaluation.from_dict(google_cloud_aiplatform_v1_model_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



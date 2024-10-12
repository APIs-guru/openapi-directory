# GoogleCloudAiplatformV1SchemaModelevaluationMetricsGeneralTextGenerationEvaluationMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bleu** | **float** | BLEU (bilingual evaluation understudy) scores based on sacrebleu implementation. | [optional] 
**rouge_l_sum** | **float** | ROUGE-L (Longest Common Subsequence) scoring at summary level. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_modelevaluation_metrics_general_text_generation_evaluation_metrics import GoogleCloudAiplatformV1SchemaModelevaluationMetricsGeneralTextGenerationEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsGeneralTextGenerationEvaluationMetrics from a JSON string
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_general_text_generation_evaluation_metrics_instance = GoogleCloudAiplatformV1SchemaModelevaluationMetricsGeneralTextGenerationEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaModelevaluationMetricsGeneralTextGenerationEvaluationMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_general_text_generation_evaluation_metrics_dict = google_cloud_aiplatform_v1_schema_modelevaluation_metrics_general_text_generation_evaluation_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsGeneralTextGenerationEvaluationMetrics from a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_general_text_generation_evaluation_metrics_from_dict = GoogleCloudAiplatformV1SchemaModelevaluationMetricsGeneralTextGenerationEvaluationMetrics.from_dict(google_cloud_aiplatform_v1_schema_modelevaluation_metrics_general_text_generation_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



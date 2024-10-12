# GoogleCloudDocumentaiV1EvaluationMetrics

Evaluation metrics, either in aggregate or about a specific entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**f1_score** | **float** | The calculated f1 score. | [optional] 
**false_negatives_count** | **int** | The amount of false negatives. | [optional] 
**false_positives_count** | **int** | The amount of false positives. | [optional] 
**ground_truth_document_count** | **int** | The amount of documents with a ground truth occurrence. | [optional] 
**ground_truth_occurrences_count** | **int** | The amount of occurrences in ground truth documents. | [optional] 
**precision** | **float** | The calculated precision. | [optional] 
**predicted_document_count** | **int** | The amount of documents with a predicted occurrence. | [optional] 
**predicted_occurrences_count** | **int** | The amount of occurrences in predicted documents. | [optional] 
**recall** | **float** | The calculated recall. | [optional] 
**total_documents_count** | **int** | The amount of documents that had an occurrence of this label. | [optional] 
**true_positives_count** | **int** | The amount of true positives. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_evaluation_metrics import GoogleCloudDocumentaiV1EvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1EvaluationMetrics from a JSON string
google_cloud_documentai_v1_evaluation_metrics_instance = GoogleCloudDocumentaiV1EvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1EvaluationMetrics.to_json())

# convert the object into a dict
google_cloud_documentai_v1_evaluation_metrics_dict = google_cloud_documentai_v1_evaluation_metrics_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1EvaluationMetrics from a dict
google_cloud_documentai_v1_evaluation_metrics_from_dict = GoogleCloudDocumentaiV1EvaluationMetrics.from_dict(google_cloud_documentai_v1_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



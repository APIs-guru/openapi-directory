# GoogleCloudDocumentaiV1EvaluationMultiConfidenceMetrics

Metrics across multiple confidence levels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auprc** | **float** | The calculated area under the precision recall curve (AUPRC), computed by integrating over all confidence thresholds. | [optional] 
**auprc_exact** | **float** | The AUPRC for metrics with fuzzy matching disabled, i.e., exact matching only. | [optional] 
**confidence_level_metrics** | [**List[GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics]**](GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics.md) | Metrics across confidence levels with fuzzy matching enabled. | [optional] 
**confidence_level_metrics_exact** | [**List[GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics]**](GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics.md) | Metrics across confidence levels with only exact matching. | [optional] 
**estimated_calibration_error** | **float** | The Estimated Calibration Error (ECE) of the confidence of the predicted entities. | [optional] 
**estimated_calibration_error_exact** | **float** | The ECE for the predicted entities with fuzzy matching disabled, i.e., exact matching only. | [optional] 
**metrics_type** | **str** | The metrics type for the label. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_evaluation_multi_confidence_metrics import GoogleCloudDocumentaiV1EvaluationMultiConfidenceMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1EvaluationMultiConfidenceMetrics from a JSON string
google_cloud_documentai_v1_evaluation_multi_confidence_metrics_instance = GoogleCloudDocumentaiV1EvaluationMultiConfidenceMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1EvaluationMultiConfidenceMetrics.to_json())

# convert the object into a dict
google_cloud_documentai_v1_evaluation_multi_confidence_metrics_dict = google_cloud_documentai_v1_evaluation_multi_confidence_metrics_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1EvaluationMultiConfidenceMetrics from a dict
google_cloud_documentai_v1_evaluation_multi_confidence_metrics_from_dict = GoogleCloudDocumentaiV1EvaluationMultiConfidenceMetrics.from_dict(google_cloud_documentai_v1_evaluation_multi_confidence_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



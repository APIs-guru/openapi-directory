# GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics

Evaluations metrics, at a specific confidence level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_level** | **float** | The confidence level. | [optional] 
**metrics** | [**GoogleCloudDocumentaiV1EvaluationMetrics**](GoogleCloudDocumentaiV1EvaluationMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_evaluation_confidence_level_metrics import GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics from a JSON string
google_cloud_documentai_v1_evaluation_confidence_level_metrics_instance = GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics.to_json())

# convert the object into a dict
google_cloud_documentai_v1_evaluation_confidence_level_metrics_dict = google_cloud_documentai_v1_evaluation_confidence_level_metrics_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics from a dict
google_cloud_documentai_v1_evaluation_confidence_level_metrics_from_dict = GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics.from_dict(google_cloud_documentai_v1_evaluation_confidence_level_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



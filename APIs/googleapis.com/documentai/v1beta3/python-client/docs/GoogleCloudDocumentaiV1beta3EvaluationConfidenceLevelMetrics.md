# GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics

Evaluations metrics, at a specific confidence level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_level** | **float** | The confidence level. | [optional] 
**metrics** | [**GoogleCloudDocumentaiV1beta3EvaluationMetrics**](GoogleCloudDocumentaiV1beta3EvaluationMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_evaluation_confidence_level_metrics import GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics from a JSON string
google_cloud_documentai_v1beta3_evaluation_confidence_level_metrics_instance = GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_evaluation_confidence_level_metrics_dict = google_cloud_documentai_v1beta3_evaluation_confidence_level_metrics_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics from a dict
google_cloud_documentai_v1beta3_evaluation_confidence_level_metrics_from_dict = GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics.from_dict(google_cloud_documentai_v1beta3_evaluation_confidence_level_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



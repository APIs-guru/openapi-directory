# GoogleCloudDocumentaiV1beta3EvaluationReference

Gives a short summary of an evaluation, and links to the evaluation itself.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_metrics** | [**GoogleCloudDocumentaiV1beta3EvaluationMetrics**](GoogleCloudDocumentaiV1beta3EvaluationMetrics.md) |  | [optional] 
**aggregate_metrics_exact** | [**GoogleCloudDocumentaiV1beta3EvaluationMetrics**](GoogleCloudDocumentaiV1beta3EvaluationMetrics.md) |  | [optional] 
**evaluation** | **str** | The resource name of the evaluation. | [optional] 
**operation** | **str** | The resource name of the Long Running Operation for the evaluation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_evaluation_reference import GoogleCloudDocumentaiV1beta3EvaluationReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3EvaluationReference from a JSON string
google_cloud_documentai_v1beta3_evaluation_reference_instance = GoogleCloudDocumentaiV1beta3EvaluationReference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3EvaluationReference.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_evaluation_reference_dict = google_cloud_documentai_v1beta3_evaluation_reference_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3EvaluationReference from a dict
google_cloud_documentai_v1beta3_evaluation_reference_from_dict = GoogleCloudDocumentaiV1beta3EvaluationReference.from_dict(google_cloud_documentai_v1beta3_evaluation_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



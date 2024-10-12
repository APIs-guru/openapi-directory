# GoogleCloudDocumentaiV1EvaluationCounters

Evaluation counters for the documents that were used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluated_documents_count** | **int** | How many documents were used in the evaluation. | [optional] 
**failed_documents_count** | **int** | How many documents were not included in the evaluation as Document AI failed to process them. | [optional] 
**input_documents_count** | **int** | How many documents were sent for evaluation. | [optional] 
**invalid_documents_count** | **int** | How many documents were not included in the evaluation as they didn&#39;t pass validation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_evaluation_counters import GoogleCloudDocumentaiV1EvaluationCounters

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1EvaluationCounters from a JSON string
google_cloud_documentai_v1_evaluation_counters_instance = GoogleCloudDocumentaiV1EvaluationCounters.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1EvaluationCounters.to_json())

# convert the object into a dict
google_cloud_documentai_v1_evaluation_counters_dict = google_cloud_documentai_v1_evaluation_counters_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1EvaluationCounters from a dict
google_cloud_documentai_v1_evaluation_counters_from_dict = GoogleCloudDocumentaiV1EvaluationCounters.from_dict(google_cloud_documentai_v1_evaluation_counters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



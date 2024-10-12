# GoogleCloudDocumentaiV1beta3Evaluation

An evaluation of a ProcessorVersion's performance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_entities_metrics** | [**GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics**](GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics.md) |  | [optional] 
**create_time** | **str** | The time that the evaluation was created. | [optional] 
**document_counters** | [**GoogleCloudDocumentaiV1beta3EvaluationCounters**](GoogleCloudDocumentaiV1beta3EvaluationCounters.md) |  | [optional] 
**entity_metrics** | [**Dict[str, GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics]**](GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics.md) | Metrics across confidence levels, for different entities. | [optional] 
**kms_key_name** | **str** | The KMS key name used for encryption. | [optional] 
**kms_key_version_name** | **str** | The KMS key version with which data is encrypted. | [optional] 
**name** | **str** | The resource name of the evaluation. Format: &#x60;projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processor_version}/evaluations/{evaluation}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_evaluation import GoogleCloudDocumentaiV1beta3Evaluation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3Evaluation from a JSON string
google_cloud_documentai_v1beta3_evaluation_instance = GoogleCloudDocumentaiV1beta3Evaluation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3Evaluation.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_evaluation_dict = google_cloud_documentai_v1beta3_evaluation_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3Evaluation from a dict
google_cloud_documentai_v1beta3_evaluation_from_dict = GoogleCloudDocumentaiV1beta3Evaluation.from_dict(google_cloud_documentai_v1beta3_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



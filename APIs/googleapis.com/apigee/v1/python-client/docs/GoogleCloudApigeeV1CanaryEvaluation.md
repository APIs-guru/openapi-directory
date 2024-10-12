# GoogleCloudApigeeV1CanaryEvaluation

CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control** | **str** | Required. The stable version that is serving requests. | [optional] 
**create_time** | **str** | Output only. Create time of the canary evaluation. | [optional] [readonly] 
**end_time** | **str** | Required. End time for the evaluation&#39;s analysis. | [optional] 
**metric_labels** | [**GoogleCloudApigeeV1CanaryEvaluationMetricLabels**](GoogleCloudApigeeV1CanaryEvaluationMetricLabels.md) |  | [optional] 
**name** | **str** | Output only. Name of the canary evalution. | [optional] [readonly] 
**start_time** | **str** | Required. Start time for the canary evaluation&#39;s analysis. | [optional] 
**state** | **str** | Output only. The current state of the canary evaluation. | [optional] [readonly] 
**treatment** | **str** | Required. The newer version that is serving requests. | [optional] 
**verdict** | **str** | Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_canary_evaluation import GoogleCloudApigeeV1CanaryEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1CanaryEvaluation from a JSON string
google_cloud_apigee_v1_canary_evaluation_instance = GoogleCloudApigeeV1CanaryEvaluation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1CanaryEvaluation.to_json())

# convert the object into a dict
google_cloud_apigee_v1_canary_evaluation_dict = google_cloud_apigee_v1_canary_evaluation_instance.to_dict()
# create an instance of GoogleCloudApigeeV1CanaryEvaluation from a dict
google_cloud_apigee_v1_canary_evaluation_from_dict = GoogleCloudApigeeV1CanaryEvaluation.from_dict(google_cloud_apigee_v1_canary_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudApigeeV1CanaryEvaluationMetricLabels

Labels that can be used to filter Apigee metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**env** | **str** | The environment ID associated with the metrics. | [optional] 
**instance_id** | **str** | Required. The instance ID associated with the metrics. In Apigee Hybrid, the value is configured during installation. | [optional] 
**location** | **str** | Required. The location associated with the metrics. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_canary_evaluation_metric_labels import GoogleCloudApigeeV1CanaryEvaluationMetricLabels

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1CanaryEvaluationMetricLabels from a JSON string
google_cloud_apigee_v1_canary_evaluation_metric_labels_instance = GoogleCloudApigeeV1CanaryEvaluationMetricLabels.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1CanaryEvaluationMetricLabels.to_json())

# convert the object into a dict
google_cloud_apigee_v1_canary_evaluation_metric_labels_dict = google_cloud_apigee_v1_canary_evaluation_metric_labels_instance.to_dict()
# create an instance of GoogleCloudApigeeV1CanaryEvaluationMetricLabels from a dict
google_cloud_apigee_v1_canary_evaluation_metric_labels_from_dict = GoogleCloudApigeeV1CanaryEvaluationMetricLabels.from_dict(google_cloud_apigee_v1_canary_evaluation_metric_labels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



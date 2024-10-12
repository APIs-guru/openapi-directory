# GoogleCloudDialogflowCxV3beta1ExperimentResultMetric

Metric and corresponding confidence intervals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_interval** | [**GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval**](GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval.md) |  | [optional] 
**count** | **float** | Count value of a metric. | [optional] 
**count_type** | **str** | Count-based metric type. Only one of type or count_type is specified in each Metric. | [optional] 
**ratio** | **float** | Ratio value of a metric. | [optional] 
**type** | **str** | Ratio-based metric type. Only one of type or count_type is specified in each Metric. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_experiment_result_metric import GoogleCloudDialogflowCxV3beta1ExperimentResultMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ExperimentResultMetric from a JSON string
google_cloud_dialogflow_cx_v3beta1_experiment_result_metric_instance = GoogleCloudDialogflowCxV3beta1ExperimentResultMetric.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ExperimentResultMetric.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_experiment_result_metric_dict = google_cloud_dialogflow_cx_v3beta1_experiment_result_metric_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ExperimentResultMetric from a dict
google_cloud_dialogflow_cx_v3beta1_experiment_result_metric_from_dict = GoogleCloudDialogflowCxV3beta1ExperimentResultMetric.from_dict(google_cloud_dialogflow_cx_v3beta1_experiment_result_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


